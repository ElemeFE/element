<template>
  <div>
    <v-date-picker
      v-model='date'
      :min-date='minDate'
      :max-date='maxDate'
      :disabled-dates='disableDates'
      weeks-transition="fade"
      :title-position="titleAlign"
      :is-double-paned="isDouble"
      :pane-width="paneWidth"
      :is-inline="isInline"
      :mode="mode"      
      :attributes='attrs'
      :theme-styles='themeStyles'>
      <span slot='header-title' slot-scope='{ monthLabel, yearLabel }'>
        {{ monthLabel | capitalize }} {{ yearLabel }}
      </span>
      <div v-if="!isInline" slot-scope='{ inputValue, updateValue }'>
        <tm-input
          :value='date'
          placeholder='Pick a date'
          suffix-icon="calendar"
          @change.native='updateValue($event.target.value)'>
        </tm-input>
      </div>
    </v-date-picker>
  </div>
</template>

<script>
import Vue from 'vue';
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';

Vue.use(VCalendar, {
  locale: 'ru',
  formats: {
    title: 'MMMM YYYY',
    weekdays: 'WW',
    navMonths: 'MMM',
    input: ['L', 'YYYY-MM-DD', 'YYYY/MM/DD'],
    dayPopover: 'L'
  }
});

export default {
  name: 'TmCalendar',
  props: {
    date: {
      type: [Date, String, Array]
    },
    withEvents: {
      type: Boolean,
      default: false
    },
    dates: {
      type: [Date, String, Array]
    },
    minDate: {
      type: Date
    },
    large: {
      type: Boolean,
      default: false
    },
    maxDate: {
      type: Date
    },
    mode: {
      type: String,
      default: 'single'
    },
    disableDates: {
      type: [Array, Object, Date]
    },
    isDouble: {
      type: Boolean,
      default: false
    },
    isInline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      titleAlign: this.large ? 'left' : 'center',
      paneWidth: this.large ? 500 : 256,
      smallStyles: {
        wrapper: {
          background: '#fff',
          color: '#1e1e28',
          border: '0'
        },
        headerTitle: {
          color: '#1e1e28',
          fontWeight: 'bold',
          fontSize: '15px',
          paddingBottom: '10px'
        },
        headerArrows: {
          color: '#cccccc'
        },
        headerHorizontalDivider: {
          borderTop: 'solid rgba(255, 255, 255, 0.2) 1px',
          width: '80%'
        },
        weekdays: {
          color: '#1e1e28',
          padding: '0px 7px',
          textTransform: 'uppercase'
        },
        weeks: {
          padding: '5px'
        },
        dayContent: {
          fontSize: '0.9rem'
        },
        dots: {
          position: 'relative',
          top: '-20px',
          left: '10px'
        }
      },
      largeStyles: {
        wrapper: {
          background: '#fff',
          color: '#1e1e28',
          border: '0'
        },
        headerTitle: {
          color: '#1e1e28',
          fontWeight: 'bold',
          fontSize: '28px',
          paddingLeft: '10px',
          textAlign: 'left'
        },
        headerArrows: {
          color: '#cccccc',
          display: 'none'
        },
        headerHorizontalDivider: {
          borderTop: 'solid rgba(255, 255, 255, 0.2) 1px',
          width: '80%'
        },
        weekdays: {
          color: '#1e1e28',
          padding: '10px',
          paddingTop: '0px',
          textTransform: 'uppercase'
        },
        weeks: {
          padding: '5px'
        },
        dayContent: {
          fontSize: '14px',
          padding: '20px'
        },
        dots: {
          position: 'relative',
          top: '-20px',
          left: '10px'
        }
      }
    };
  },
  computed: {
    themeStyles() {
      return !this.large ? this.smallStyles : this.largeStyles;
    },
    attrs() {
      return !this.withEvents ? [
        {
          key: 'today',
          highlight: {
            backgroundColor: '#5dc376'
          },
          contentStyle: {
            color: '#fafafa'
          },
          dates: this.dates
        }
      ] : [
        {
          key: 'today',
          dates: this.dates,
          popover: {
            slot: 'todo-row',
            visibility: 'hover',
            label: 'Все билеты оплачены!'
          },
          dot: {
            backgroundColor: '#5dc376',
            diameter: '10px'
          }
        }
      ];
    }
  },
  filters: {
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>
