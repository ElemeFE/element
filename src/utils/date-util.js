import fecha from 'element-ui/src/utils/date';
import { t } from 'element-ui/src/locale';

const weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

const newArray = function(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

export const getI18nSettings = (timezone = 'local') => {
  return {
    dayNamesShort: weeks.map(week => t(`el.datepicker.weeks.${ week }`)),
    dayNames: weeks.map(week => t(`el.datepicker.weeks.${ week }`)),
    monthNamesShort: months.map(month => t(`el.datepicker.months.${ month }`)),
    monthNames: months.map((month, index) => t(`el.datepicker.month${ index + 1 }`)),
    amPm: ['am', 'pm'],
    timezone
  };
};

export const toDate = function(date, timezone) {
  return isDate(date) ? newDate(date, timezone) : null;
};

export const isDate = function(date) {
  if (date === null || date === undefined) return false;
  if (isNaN(new Date(date).getTime())) return false;
  if (Array.isArray(date)) return false; // deal with `new Date([ new Date() ]) -> new Date()`
  return true;
};

export const isDateObject = function(val) {
  return val instanceof Date;
};

export const formatDate = function(date, format, timezone = 'local') {
  date = toDate(date);
  if (!date) return '';
  return fecha.format(date, format || 'yyyy-MM-dd', getI18nSettings(timezone));
};

export const parseDate = function(string, format, timezone = 'local') {
  return fecha.parse(string, format || 'yyyy-MM-dd', getI18nSettings(timezone));
};

export const getDayCountOfMonth = function(year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
};

export const getDayCountOfYear = function(year) {
  const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  return isLeapYear ? 366 : 365;
};

export const getFirstDayOfMonth = function(date, timezone = 'local') {
  const temp = new Date(date.getTime());
  setDate(temp, 1, timezone);
  return getDay(temp, timezone);
};

// see: https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript
// {prev, next} Date should work for Daylight Saving Time
// Adding 24 * 60 * 60 * 1000 does not work in the above scenario
export const prevDate = function(date, timezone, amount = 1) {
  return newDate([getFullYear(date, timezone), getMonth(date, timezone), getDate(date, timezone) - amount], timezone);
};

export const nextDate = function(date, timezone, amount = 1) {
  return newDate([getFullYear(date, timezone), getMonth(date, timezone), getDate(date, timezone) + amount], timezone);
};

export const getStartDateOfMonth = function(year, month, timezone = 'local') {
  const result = newDate([year, month, 1], timezone);
  const day = getDay(result, timezone);

  if (day === 0) {
    return prevDate(result, timezone, 7);
  } else {
    return prevDate(result, timezone, day);
  }
};

export const getWeekNumber = function(src, timezone = 'local') {
  if (!isDate(src)) return null;
  const date = new Date(src.getTime());
  setHours(date, [0, 0, 0, 0], timezone);
  // Thursday in current week decides the year.
  setDate(date, getDate(date, timezone) + 3 - (getDay(date, timezone) + 6) % 7, timezone);
  // January 4 is always in week 1.
  const week1 = newDate([getFullYear(date, timezone), 0, 4], timezone);
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (getDay(week1, timezone) + 6) % 7) / 7);
};

export const getRangeHours = function(ranges, timezone = 'local') {
  const hours = [];
  let disabledHours = [];

  (ranges || []).forEach(range => {
    const value = range.map(date => getHours(date, timezone));

    disabledHours = disabledHours.concat(newArray(value[0], value[1]));
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
};

export const getPrevMonthLastDays = (date, amount, timezone = 'local') => {
  if (amount <= 0) return [];
  const temp = new Date(date.getTime());
  setDate(temp, 0, timezone);
  const lastDay = getDate(temp, timezone);
  return range(amount).map((_, index) => lastDay - (amount - index - 1));
};

export const getMonthDays = (date, timezone = 'local') => {
  const temp = newDate([getFullYear(date, timezone), getMonth(date, timezone) + 1, 0], timezone);
  const days = getDate(temp, timezone);
  return range(days).map((_, index) => index + 1);
};

function setRangeData(arr, start, end, value) {
  for (let i = start; i < end; i++) {
    arr[i] = value;
  }
}

export const getRangeMinutes = function(ranges, hour, timezone = 'local') {
  const minutes = new Array(60);

  if (ranges.length > 0) {
    ranges.forEach(range => {
      const start = range[0];
      const end = range[1];
      const startHour = getHours(start, timezone);
      const startMinute = getMinutes(start, timezone);
      const endHour = getHours(end, timezone);
      const endMinute = getMinutes(end, timezone);
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
};

export const range = function(n) {
  // see https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
  return Array.apply(null, {length: n}).map((_, n) => n);
};

export const modifyDate = function(date, y, m, d, timezone = 'local') {
  return newDate([y, m, d, getHours(date, timezone), getMinutes(date, timezone), getSeconds(date, timezone), getMilliseconds(date, timezone)], timezone);
};

export const modifyTime = function(date, h, m, s, timezone = 'local') {
  return newDate([getFullYear(date, timezone), getMonth(date, timezone), getDate(date, timezone), h, m, s, getMilliseconds(date, timezone)], timezone);
};

export const modifyWithTimeString = (date, time, timezone = 'local') => {
  if (date == null || !time) {
    return date;
  }
  time = parseDate(time, 'HH:mm:ss', timezone);
  return modifyTime(date, getHours(time, timezone), getMinutes(time, timezone), getSeconds(time, timezone), timezone);
};

export const clearTime = function(date, timezone = 'local') {
  return newDate([getFullYear(date, timezone), getMonth(date, timezone), getDate(date, timezone)], timezone);
};

export const clearMilliseconds = function(date, timezone = 'local') {
  return newDate([getFullYear(date, timezone), getMonth(date, timezone), getDate(date, timezone), getHours(date, timezone), getMinutes(date, timezone), getSeconds(date, timezone), 0], timezone);
};

export const limitTimeRange = function(date, ranges, timezone, format = 'HH:mm:ss') {
  // TODO: refactory a more elegant solution
  if (ranges.length === 0) return date;
  const normalizeDate = date => fecha.parse(fecha.format(date, format, {timezone}), format, {timezone});
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
    getFullYear(date, timezone),
    getMonth(date, timezone),
    getDate(date, timezone),
    timezone
  );
};

export const timeWithinRange = function(date, selectableRange, timezone, format) {
  const limitedDate = limitTimeRange(date, selectableRange, timezone, format);
  return limitedDate.getTime() === date.getTime();
};

export const changeYearMonthAndClampDate = function(date, year, month, timezone = 'local') {
  // clamp date to the number of days in `year`, `month`
  // eg: (2010-1-31, 2010, 2) => 2010-2-28
  const monthDate = Math.min(getDate(date, timezone), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate, timezone);
};

export const prevMonth = function(date, timezone = 'local') {
  const year = getFullYear(date, timezone);
  const month = getMonth(date, timezone);
  return month === 0
    ? changeYearMonthAndClampDate(date, year - 1, 11, timezone)
    : changeYearMonthAndClampDate(date, year, month - 1, timezone);
};

export const nextMonth = function(date, timezone = 'local') {
  const year = getFullYear(date, timezone);
  const month = getMonth(date, timezone);
  return month === 11
    ? changeYearMonthAndClampDate(date, year + 1, 0, timezone)
    : changeYearMonthAndClampDate(date, year, month + 1, timezone);
};

export const prevYear = function(date, timezone, amount = 1) {
  const year = getFullYear(date, timezone);
  const month = getMonth(date, timezone);
  return changeYearMonthAndClampDate(date, year - amount, month, timezone);
};

export const nextYear = function(date, timezone, amount = 1) {
  const year = getFullYear(date, timezone);
  const month = getMonth(date, timezone);
  return changeYearMonthAndClampDate(date, year + amount, month, timezone);
};

export const extractDateFormat = function(format) {
  return format
    .replace(/\W?m{1,2}|\W?ZZ/g, '')
    .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, '')
    .trim();
};

export const extractTimeFormat = function(format) {
  return format
    .replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, '')
    .trim();
};

export const validateRangeInOneMonth = function(start, end, timezone = 'local') {
  return (getMonth(start, timezone) === getMonth(end, timezone)) && (getFullYear(start, timezone) === getFullYear(end, timezone));
};

export const newDate = fecha.dates.newDate;
export const getDate = fecha.dates.getDate;
export const getDay = fecha.dates.getDay;
export const getFullYear = fecha.dates.getFullYear;
export const getHours = fecha.dates.getHours;
export const getMilliseconds = fecha.dates.getMilliseconds;
export const getMinutes = fecha.dates.getMinutes;
export const getMonth = fecha.dates.getMonth;
export const getSeconds = fecha.dates.getSeconds;
export const setDate = fecha.dates.setDate;
export const setFullYear = fecha.dates.setFullYear;
export const setHours = fecha.dates.setHours;
export const setMilliseconds = fecha.dates.setMilliseconds;
export const setMinutes = fecha.dates.setMinutes;
export const setMonth = fecha.dates.setMonth;
export const setSeconds = fecha.dates.setSeconds;
