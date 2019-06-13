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
                      :default-value="defaultValue"/>
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

  moment.locale('ru');

  const SINGLE = 'single';
  const DOUBLE = 'double';
  const DATE_LENGTH = 10;
  const DATE_FORMATS = {
    EDIT: 'DD.MM.YYYY',
    READ: 'D MMMM'
  };

  const DEFAULT_PLACEHOLDER_TEXT = 'Выберите дату';

  const getValidity = selectedDate => {
    const isYear = moment().isSame(selectedDate, 'year')
      ? true
      : moment().isBefore(selectedDate, 'year');
    const isMonth = moment().isSame(selectedDate, 'month')
      ? true
      : moment().isBefore(selectedDate, 'month');
    const isDay = moment().isBefore(selectedDate, 'day');

    return isDay && isMonth && isYear;
  };

  const isDateValid = date => {
    const selectedDate = moment(date, DATE_FORMATS.EDIT);
    return selectedDate.isValid() && getValidity(selectedDate);
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

  const validateRules = (dates, mode) => {
    const dateLength = dates === null ? 0 : (mode === SINGLE ? dates.length : dates.join('').length);

    return {
      inputLength: mode === SINGLE
        ? dateLength === DATE_LENGTH
        : dateLength === (DATE_LENGTH * 2) + getSpacesLength(dates),
      isDateValid: mode === SINGLE
        ? isDateValid(dates)
        : dates.reduce((curr, date) => curr && isDateValid(date.trim()), true)
    };
  };

  const validateInput = (mode, dates) => {
    const rules = Object.values(validateRules(dates, mode));
    return rules.reduce((curr, next) => curr && next, true);
  };

  const getDate = value => moment
    .tz(value, moment.tz.guess())
    .format(DATE_FORMATS.EDIT);

  export default {
    name: 'TmAdvancedDatePicker',

    componentName: 'TmAdvancedDatePicker',

    components: {
      TmDatePicker,
      TmInput,
      TmPopover
    },

    watch: {
      date: {
        handler(value) {
          if (value) {
            this.$emit('date-changed', value);
          }
        }
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
        default: true
      },
      disabledDate: {
        type: Function,
        default: null
      },
      defaultValue: {},
      localStorageDate: {
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
      }
    },

    data: () => ({
      type: SINGLE,
      date: null,
      inputDate: null,
      value: null,
      isEditable: false
    }),

    mounted() {
      this.date = this.localStorageDate;
      if (Array.isArray(this.date)) this.type = DOUBLE;
      if (this.date) this.onChange(this.date);
    },

    computed: {
      prefixIconName() {
        return this.suffixIcon ? '' : this.prefixIcon;
      },

      isInputDateValid() {
        const dates = this.type === SINGLE ? this.inputDate : this.inputDate.split('-');
        return validateInput(this.type, dates);
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
          return this.date.map(getDate).join(' - ');
        }

        return getDate(this.date);
      },

      dateMask() {
        const dateMask = 'D#.##.####';
        return Array.isArray(this.date) ? `${dateMask} - ${dateMask}` : dateMask;
      },

      customMask() {
        return {
          mask: this.dateMask,
          tokens: {
            D: { pattern: /[0-3]/ },
            '#': { pattern: /\d/ }
          }
        };
      }
    },

    methods: {
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
      handleSingle(value) {
        if (value.length === DATE_LENGTH) {
          const [month, day, year] = value.split('.');
          if (isDateValid(value)) {
            this.date = new Date(`${day}.${month}.${year}`);
            this.close();
          } else {
            this.inputDate = null;
          }

          const picker = this.$refs.datePicker.picker;
          picker.date = this.date;
          picker.leftDate = this.date;
        }
      },
      handleDouble(value) {
        const results = [];
        const dates = value.split('-');
        const isTwo = dates.length === 2;
        if (!isTwo) this.inputDate = null;

        const totalLength = dates.reduce((curr, next) => curr + next.length, 0);
        if (totalLength !== getCorrectInputLength(dates, DOUBLE)) this.inputDate = null;

        const newRange = [];
        dates.forEach(dateItem => {
          const dateString = dateItem.trim();
          const [day, month, year] = dateString.split('.');
          if (isDateValid(dateString)) {
            newRange.push(new Date(`${month}.${day}.${year}`));
          } else {
            this.inputDate = null;
          }
          results.push(isDateValid(dateString));
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
      onChange(value) {
        this.inputDate = Array.isArray(value)
          ? value.map(getDate).join(' - ')
          : getDate(value);

        this.isEditable = false;
        this.close();
      },
      close() {
        this.$refs.popover.doClose();
        this.$emit('date-picked', this.date);
      },
      onTypeChanged(type) {
        this.type = type;
        this.$emit('typechange', type);
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
