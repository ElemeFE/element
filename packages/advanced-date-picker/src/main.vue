<template>
  <div class="tm-advanced-date-picker">
    <tm-popover :width="popoverWidth"
                ref="popover"
                trigger="click"
                :offset="24">
      <tm-date-picker :class="pickerClass"
                      v-model="date"
                      @input="onChange"
                      inline
                      ref="datePicker"
                      :type="pickerType"
                      @typechange="onTypeChanged"
                      placeholder="Когда"
                      size="extra-large"
                      :disable-old-date="disableOldDate" />
      <div slot="reference" @keyup.enter="onEnterKeyUp">
        <tm-input class="tm-advanced-date-picker__input"
                  v-if="isEditable"
                  :readonly="false"
                  prefix-icon="calendar"
                  size="extra-large"
                  v-model="inputDate"
                  @blur="isEditable = false"
                  @focus="$refs.datePicker.focus()"
                  v-mask="customMask">
          <tm-icon name="calendar"></tm-icon>
        </tm-input>
        <tm-input class="tm-advanced-date-picker__input"
                  v-if="!isEditable"
                  prefix-icon="calendar"
                  size="extra-large"
                  @focus="isEditable = true"
                  :placeholder="inputPlaceholder">
          <tm-icon name="calendar"></tm-icon>
        </tm-input>
      </div>
    </tm-popover>
  </div>
</template>

<script>
  import moment from 'moment';
  import TmPopover from 'tmconsulting-ui/packages/popover/src/main.vue';
  import TmInput from 'tmconsulting-ui/packages/input';
  import TmDatePicker from 'tmconsulting-ui/packages/date-picker/src/picker/date-picker';

  moment.locale('ru');

  const SINGLE = 'single';
  const DOUBLE = 'double';
  const DATE_LENGTH = 10;
  const DATE_FORMAT = 'DD.MM.YYYY';
  const DEFAULT_PLACEHOLDER_TEXT = 'Выберите дату';
  const DEFAULT_POPOVER_WIDTH = 520;

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
    const selectedDate = moment(date, DATE_FORMAT);
    return selectedDate.isValid() && getValidity(selectedDate);
  };

  export default {
    name: 'TmAdvancedDatePicker',

    componentName: 'TmAdvancedDatePicker',

    components: {
      TmDatePicker,
      TmInput,
      TmPopover
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
      localStorageDate: {
        type: [Array, Date, String],
        default: null
      },
      popoverWidth: {
        type: Number,
        default: DEFAULT_POPOVER_WIDTH
      },
      placeholder: {
        type: String,
        default: DEFAULT_PLACEHOLDER_TEXT
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
      if (this.date) this.onChange(this.date);
    },

    computed: {
      inputPlaceholder() {
        return this.date ? this.blurValue : this.placeholder;
      },
      blurValue() {
        if (Array.isArray(this.date)) {
          const [from, till] = this.date;
          return `${moment(from).format('D MMMM')} - ${moment(till).format('D MMMM')}`;
        } else {
          return moment(this.date).format('D MMMM');
        }
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
        }
      },
      handleDouble(value) {
        const results = [];
        const dates = value.split('-').map(_ => _.trim());
        const isTwo = dates.length === 2;
        if (!isTwo) this.inputDate = null;

        const totalLength = dates.reduce((curr, next) => curr + next.length, 0);
        if (totalLength !== DATE_LENGTH * 2) this.inputDate = null;

        const newRange = [];
        dates.forEach(_ => {
          const [day, month, year] = _.split('.');
          if (isDateValid(_)) {
            newRange.push(new Date(`${month}.${day}.${year}`));
          } else {
            this.inputDate = null;
          }
          results.push(isDateValid(_));
        });
        this.date = newRange;
        const isAvailableToClose = results.reduce(
          (curr, next) => curr && next,
          true
        );
        if (isAvailableToClose) this.close();
      },
      onChange(value) {
        const getDate = val => moment(val).format(DATE_FORMAT);
        this.inputDate = Array.isArray(value)
          ? value.map(_ => getDate(_)).join(' - ')
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
        this.$refs.datePicker.focus();
      }
    }
  };
</script>
