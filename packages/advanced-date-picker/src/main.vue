<template>
  <div class="tm-advanced-date-picker">
    <tm-popover :popper-class="popoverClassName"
                ref="popover"
                trigger="click"
                :offset="24"
                :visible-arrow="false">
      <tm-date-picker :class="pickerClass"
                      v-model="date"
                      @input="onChange"
                      inline
                      ref="datePicker"
                      :type="pickerType"
                      @typechange="onTypeChanged"
                      placeholder="Когда"
                      size="extra-large"
                      :disable-old-date="disableOldDate"
                      :disabled-date="disabledDate"
                      :default-value="defaultValue"
                      :format="format"
                      :value-format="valueFormat" />
      <div slot="reference"
           @keyup.enter="onEnterKeyUp">
        <tm-input v-if="isEditable"
                  :class="inputClassName"
                  :readonly="false"
                  :prefix-icon="prefixIconName"
                  :suffix-icon="suffixIcon"
                  :clearable="!!date && clearable"
                  size="extra-large"
                  v-model="inputDate"
                  @blur="isEditable = false"
                  @focus="$refs.datePicker.focus()"
                  @clear="date = null; inputDate = null"
                  @change="onReferenceChange"
                  v-mask="customMask">
          <tm-icon name="calendar"></tm-icon>
        </tm-input>
        <tm-input v-else
                  class="tm-advanced-date-picker__input"
                  :prefix-icon="prefixIconName"
                  :suffix-icon="suffixIcon"
                  :clearable="!!date && clearable"
                  size="extra-large"
                  @focus="isEditable = true"
                  @clear="date = null; inputDate = null"
                  :placeholder="inputPlaceholder">
          <tm-icon name="calendar"></tm-icon>
        </tm-input>
      </div>
    </tm-popover>
  </div>
</template>

<script>
  import moment from 'moment-timezone';
  import TmPopover from 'tmconsulting-ui/packages/popover/src/main.vue';
  import TmInput from 'tmconsulting-ui/packages/input';
  import TmDatePicker from 'tmconsulting-ui/packages/date-picker/src/picker/date-picker';
  import countBy from 'lodash/countBy';
  import isEqual from 'lodash/isEqual';

  moment.locale('ru');

  const SINGLE = 'single';
  const DOUBLE = 'double';
  const DATE_LENGTH = 10;
  const RANGE_SEPARATOR = ' - ';

  const DEFAULT_PLACEHOLDER_TEXT = 'Выберите дату';

  const MASK_TOKENS = {
    '#': { pattern: /\d/ }
  };

  const getOldDateValidity = selectedDate => {
    const isYear = moment().isSame(selectedDate, 'year') || moment().isBefore(selectedDate, 'year');
    const isMonth = moment().isSame(selectedDate, 'month') || moment().isBefore(selectedDate, 'month');
    const isDay = moment().isBefore(selectedDate, 'day');

    return isDay && isMonth && isYear;
  };

  const isDateValid = (date, format, isOldDateDisabled) => {
    const selectedDate = moment(date, format);
    return isOldDateDisabled
      ? selectedDate.isValid() && getOldDateValidity(selectedDate)
      : selectedDate.isValid();
  };

  const countStringSymbols = (str, ch) => countBy(str)[ch] || 0;

  /**
   * @param {String[]} dates
   * @returns {number}
   */
  const getSpacesLength = dates => dates.reduce((int, date) => int + countStringSymbols(date, ' '), 0);

  /**
   * @param {string[]|string} dates
   * @param {'single'|'double'} mode
   * @returns {number}
   */
  const getCorrectInputLength = (dates, mode) => {
    switch (mode) {
      case SINGLE:
        return DATE_LENGTH;
      case DOUBLE:
        return (DATE_LENGTH * 2) + getSpacesLength(dates);
    }
  };

  const validateRules = (dates, mode, format, isOldDateDisabled) => {
    const dateLength = dates === null ? 0 : (mode === SINGLE ? dates.length : dates.join('').length);

    return {
      inputLength: mode === SINGLE
        ? dateLength === DATE_LENGTH
        : dateLength === (DATE_LENGTH * 2) + getSpacesLength(dates),
      isDateValid: mode === SINGLE
        ? isDateValid(dates, format, isOldDateDisabled)
        : dates.reduce((curr, date) => curr && isDateValid(date.trim(), format, isOldDateDisabled), true)
    };
  };

  const validateInput = (mode, dates, format, isOldDateDisabled) => {
    const rules = Object.values(validateRules(dates, mode, format, isOldDateDisabled));
    return rules.reduce((curr, next) => curr && next, true);
  };

  const getDate = (value, resultFormat, originFormat) => {
    let date;
    if (moment.isDate(value)) {
      date = moment.tz(value, moment.tz.guess());
    } else if (originFormat) {
      date = moment.tz(value, originFormat, moment.tz.guess());
    } else {
      date = moment.tz(value, resultFormat, moment.tz.guess());
    }

    return date.format(resultFormat);
  };

  export default {
    name: 'TmAdvancedDatePicker',

    componentName: 'TmAdvancedDatePicker',

    components: {
      TmDatePicker,
      TmInput,
      TmPopover
    },

    watch: {
      value: {
        handler(value, oldValue) {
          if (!isEqual(value, oldValue)) {
            this.date = value;
          }
        },
        deep: true
      },
      date: {
        handler(value) {
          if (value) {
            this.type = Array.isArray(value) ? DOUBLE : SINGLE;
            this.updateInputDate(value);
            this.$emit('date-changed', value);
            this.$emit('input', value);
          }
        },
        deep: true
      },
      type(value) {
        this.$emit('typechange', value);
      }
    },

    props: {
      pickerType: {
        type: String,
        default: 'dynamic'
      },
      pickerClass: {
        type: String,
        default: 'child-picker'
      },
      disableOldDate: {
        type: Boolean,
        default: false
      },
      disabledDate: {
        type: Function,
        default: null
      },
      defaultValue: {},
      value: {
        type: [Array, Date, String],
        default: null
      },
      placeholder: {
        type: String,
        default: DEFAULT_PLACEHOLDER_TEXT
      },
      clearable: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: 'calendar'
      },
      suffixIcon: {
        type: String,
        default: ''
      },
      format: {
        type: String,
        default: 'yyyy-MM-dd'
      },
      valueFormat: {
        type: String,
        default: ''
      }
    },

    mounted() {
      if (this.value) {
        this.date = this.value;
      }
    },

    data: () => ({
      type: SINGLE,
      date: null,
      inputDate: null,
      isEditable: false
    }),

    computed: {
      prefixIconName() {
        return this.suffixIcon ? '' : this.prefixIcon;
      },

      momentFormat() {
        return this.format.replace(/d/g, 'D').replace(/y/g, 'Y');
      },

      momentValueFormat() {
        return this.valueFormat.replace(/d/g, 'D').replace(/y/g, 'Y');
      },

      isInputDateValid() {
        if (this.type === SINGLE) {
          return this.doValidateInput(this.type, this.inputDate);
        }
        const dates = this.inputDate ? this.inputDate.split(RANGE_SEPARATOR) : [];
        return this.doValidateInput(this.type, dates);
      },

      inputClassName() {
        const baseClass = 'tm-advanced-date-picker__input';

        return this.isInputDateValid ? baseClass : `${baseClass}--error`;
      },

      popoverClassName() {
        const baseClass = 'tm-advanced-date-picker__popover';
        const widePickerTypes = ['datetimerange', 'daterange', 'dynamic'];
        return widePickerTypes.includes(this.pickerType)
          ? `${baseClass} ${baseClass}--wide`
          : baseClass;
      },

      inputPlaceholder() {
        return this.date ? this.blurValue : this.placeholder;
      },

      blurValue() {
        if (Array.isArray(this.date)) {
          return this.date.map(this.getMomentFormatDate).join(RANGE_SEPARATOR);
        }
        return this.getMomentFormatDate(this.date);
      },

      dateMask() {
        let dateMask = this.format.toLowerCase();
        dateMask = dateMask.replace(/\w/g, '#');

        return Array.isArray(this.date)
          ? `${dateMask} - ${dateMask}`
          : dateMask;
      },

      customMask() {
        return {
          mask: this.dateMask,
          tokens: MASK_TOKENS
        };
      }
    },

    methods: {
      checkDataValid(value) {
        return isDateValid(value, this.momentFormat, this.disableOldDate);
      },
      doValidateInput(type, value) {
        return validateInput(type, value, this.momentFormat, this.disableOldDate);
      },
      getConvertedMomentToDate(value) {
        return moment(value, this.momentFormat).toDate();
      },
      getMomentFormatDate(value) {
        return getDate(value, this.momentFormat, this.momentValueFormat);
      },
      onEnterKeyUp() {
        switch (this.type) {
          case SINGLE:
            this.handleSingle(this.inputDate);
            break;
          case DOUBLE:
            this.handleDouble(this.inputDate);
            break;
        }
        this.isEditable = false;
      },
      onReferenceChange() {
        switch (this.type) {
          case SINGLE:
            this.handleSingle(this.inputDate);
            break;
          case DOUBLE:
            this.handleDouble(this.inputDate);
            break;
        }
      },
      handleSingle(value) {
        if (value.length !== DATE_LENGTH) { return; }
        if (!this.checkDataValid(value)) {
          this.clear();
          return;
        }

        this.date = this.getConvertedMomentToDate(value);
        this.close();

        const picker = this.$refs.datePicker.picker;
        picker.date = this.date;
        picker.leftDate = this.date;
      },
      handleDouble(value) {
        const results = [];
        const dates = value.split(RANGE_SEPARATOR);
        const isTwo = dates.length === 2;
        if (!isTwo) this.inputDate = null;

        const totalLength = dates.reduce((curr, next) => curr + next.length, 0);
        if (totalLength !== getCorrectInputLength(dates, DOUBLE)) this.inputDate = null;

        const newRange = [];
        dates.forEach(dateItem => {
          const dateString = dateItem.trim();
          if (this.checkDataValid(dateString)) {
            newRange.push(this.getConvertedMomentToDate(dateItem));
          } else {
            this.inputDate = null;
          }
          results.push(this.checkDataValid(dateString));
        });

        this.date = newRange;
        const isAvailableToClose = results.reduce(
          (curr, next) => curr && next,
          true
        );

        const picker = this.$refs.datePicker.picker;
        const [leftDate, rightDate] = newRange;
        picker.leftDate = new Date(leftDate);
        picker.rightDate = new Date(rightDate);
        if (isAvailableToClose) this.close();
      },
      updateInputDate(value) {
        this.inputDate = Array.isArray(value)
          ? value.map(this.getMomentFormatDate).join(RANGE_SEPARATOR)
          : this.getMomentFormatDate(value);
      },
      onChange(value) {
        this.updateInputDate(value);
        this.isEditable = false;
        this.close();
      },
      close() {
        this.$refs.popover.doClose();
        this.$emit('date-picked', this.date);
      },
      onTypeChanged(type) {
        this.type = type;
      },
      focus() {
        this.$refs.popover.doShow();
      },
      clear() {
        this.$refs.datePicker.clear();
        this.inputDate = null;
      }
    }
  };
</script>
