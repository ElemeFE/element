import fecha from 'element-ui/src/utils/date';
import { t } from 'element-ui/src/locale';

const weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/** @param {number} n */
export function range(n, cb = (_, n) => n) {
  // see https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
  return Array.apply(null, {length: n}).map(cb);
}

/**
 * @param {number} start
 * @param {number} end
 **/
function newArray(start, end) {
  return range(end - start + 1, (_, n) => start + n);
}

/**
 * @param {any[]} arr
 * @param {number} start
 * @param {number} end
 **/
function setRangeData(arr, start, end, value) {
  for (let i = start; i < end; i++) {
    arr[i] = value;
  }
}

export function getI18nSettings() {
  return {
    dayNamesShort: weeks.map(week => t(`el.datepicker.weeks.${ week }`)),
    dayNames: weeks.map(week => t(`el.datepicker.weeks.${ week }`)),
    monthNamesShort: months.map(month => t(`el.datepicker.months.${ month }`)),
    monthNames: months.map((month, index) => t(`el.datepicker.month${ index + 1 }`)),
    amPm: ['am', 'pm']
  };
}

export function isDate(date) {
  if (date == null) return false;
  if (isNaN(+new Date(date))) return false;
  if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
  return true;
}

export function toDate(date) {
  const temp = new Date(date);
  return isNaN(+temp) ? null : temp;
}

export function isDateObject(val) {
  return val instanceof Date;
}

export function formatDate(date, format = 'yyyy-MM-dd') {
  date = toDate(date);
  if (!date) return '';
  return fecha.format(date, format);
}

/** @param {string} string */
export function parseDate(string, format = 'yyyy-MM-dd') {
  return fecha.parse(string, format);
}

/**
 * @param {number} year
 * @param {number} month
 **/
export function getDayCountOfMonth(year, month) {
  // 后一个月的前一天（它这个month是1开始的）
  return new Date(year, month + 1, 0).getDate();
}

/** @param {number} year */
export function getDayCountOfYear(year) {
  const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  return isLeapYear ? 366 : 365;
}

/** @param {Date} date */
export function getFirstDayOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

/** @param {Date} date */
export function prevDate(date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
}

/** @param {Date} date */
export function nextDate(date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

/**
 * @param {number} year
 * @param {number} month
 **/
export function getStartDateOfMonth(year, month) {
  const result = new Date(year, month, 1);
  const day = result.getDay();
  return prevDate(result, day === 0 ? 7 : day);
}

/** @param {Date} src */
export function getWeekNumber(src) {
  if (!isDate(src)) return null;
  const date = new Date(src.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  const week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

export function getRangeHours(ranges = []) {
  const hours = [];
  let disabledHours = [];

  ranges.forEach(range => {
    const value = range.map(date => date.getHours());

    disabledHours.push(...newArray(value[0], value[1]));
  });

  if (disabledHours.length) {
    for (let i = 0; i < 24; i++) {
      hours[i] = disabledHours.indexOf(i) === -1;
    }
  } else {
    for (let i = 0; i < 24; i++) {
      hours[i] = false;
    }
  }

  return hours;
}

/**
 * @param {Date} date
 * @param {number} amount
 **/
export function getPrevMonthLastDays(date, amount) {
  if (amount <= 0) return [];
  const temp = new Date(+date);
  temp.setDate(0);
  const lastDay = temp.getDate();
  return range(amount, (_, index) => lastDay - (amount - index - 1));
}

/** @param {Date} date */
export function getMonthDays(date) {
  const temp = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  return range(temp.getDate(), (_, index) => index + 1);
}

export function getRangeMinutes(ranges, hour) {
  const minutes = new Array(60);

  if (ranges.length > 0) {
    ranges.forEach(([start, end]) => {
      const startHour = start.getHours();
      const startMinute = start.getMinutes();
      const endHour = end.getHours();
      const endMinute = end.getMinutes();
      if (startHour === hour && endHour !== hour) {
        setRangeData(minutes, startMinute, 60, true);
      } else if (startHour === hour && endHour === hour) {
        setRangeData(minutes, startMinute, endMinute + 1, true);
      } else if (startHour !== hour && endHour === hour) {
        setRangeData(minutes, 0, endMinute + 1, true);
      } else if (startHour < hour && endHour > hour) {
        setRangeData(minutes, 0, 60, true);
      }
    });
  } else {
    setRangeData(minutes, 0, 60, true);
  }
  return minutes;
}

/**
 * @param {Date} date
 * @param {number} y
 * @param {number} m
 * @param {number} d
 **/
export function modifyDate(date, y, m, d) {
  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
}

/**
 * @param {Date} date
 * @param {number} h
 * @param {number} m
 * @param {number} s
 **/
export function modifyTime(date, h, m, s) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
}

/**
 * @param {Date} date
 * @param {string} time
 **/
export function modifyWithTimeString(date, time) {
  if (date == null || !time) {
    return date;
  }
  time = parseDate(time, 'HH:mm:ss');
  return modifyTime(date, time.getHours(), time.getMinutes(), time.getSeconds());
};

export function clearTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

/** @param {Date} date */
export function clearMilliseconds(date) {
  const temp = new Date(+date);
  temp.setMilliseconds(0);
  return temp;
};

/**
 * @param {Date} date
 * @param {any[]} ranges
 **/
export function limitTimeRange(date, ranges, format = 'HH:mm:ss') {
  // TODO: refactory a more elegant solution
  if (ranges.length === 0) return date;
  const normalizeDate = date => parseDate(formatDate(date, format), format);
  const ndate = normalizeDate(date);
  const nranges = ranges.map(range => range.map(normalizeDate));
  if (nranges.some(nrange => ndate >= nrange[0] && ndate <= nrange[1])) return date;

  let minDate = nranges[0][0];
  let maxDate = nranges[0][0];

  nranges.forEach(nrange => {
    minDate = new Date(Math.min(nrange[0], minDate));
    maxDate = new Date(Math.max(nrange[1], minDate));
  });

  const ret = ndate < minDate ? minDate : maxDate;
  // preserve Year/Month/Date
  return modifyDate(
    ret,
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );
}

/**
 * @param {Date} date
 * @param {any[]} ranges
 * @param {string} format
 **/
export function timeWithinRange(date, selectableRange, format) {
  const limitedDate = limitTimeRange(date, selectableRange, format);
  return +limitedDate === +date;
}

/**
 * @param {Date} date
 * @param {number} year
 * @param {number} month
 **/
export function changeYearMonthAndClampDate(date, year, month) {
  // clamp date to the number of days in `year`, `month`
  // eg: (2010-1-31, 2010, 2) => 2010-2-28
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
}

/** @param {Date} date */
export function prevMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return month === 0
    ? changeYearMonthAndClampDate(date, year - 1, 11)
    : changeYearMonthAndClampDate(date, year, month - 1);
}

/** @param {Date} date */
export function nextMonth(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return month === 11
    ? changeYearMonthAndClampDate(date, year + 1, 0)
    : changeYearMonthAndClampDate(date, year, month + 1);
}

/** @param {Date} date */
export function prevYear(date, amount = 1) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return changeYearMonthAndClampDate(date, year - amount, month);
}

/** @param {Date} date */
export function nextYear(date, amount = 1) {
  const year = date.getFullYear();
  const month = date.getMonth();
  return changeYearMonthAndClampDate(date, year + amount, month);
}

/** @param {string} format */
export function extractDateFormat(format) {
  return format
    .replace(/\W?m{1,2}|\W?ZZ/g, '')
    .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
    .trim();
}

/** @param {string} format */
export function extractTimeFormat(format) {
  return format
    .replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '')
    .trim();
}

/**
 * @param {Date} start
 * @param {Date} end
 **/
export function validateRangeInOneMonth(start, end) {
  return (start.getMonth() === end.getMonth()) && (start.getFullYear() === end.getFullYear());
}
