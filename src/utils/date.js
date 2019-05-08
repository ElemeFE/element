/* Modified from https://github.com/taylorhakes/fecha
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Taylor Hakes
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 *     The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 *     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* Added UTC date methods to support time conversion to UTC and UTC offsets
 * Changes licensed under the ElemeFE project license
 */

/*eslint-disable*/
// 把 YYYY-MM-DD 改成了 yyyy-MM-dd
(function (main) {
  'use strict';

  /**
   * Parse or format dates
   * @class fecha
   */
  var fecha = {};
  var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
  var twoDigits = /\d\d?/;
  var threeDigits = /\d{3}/;
  var fourDigits = /\d{4}/;
  var word = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var UTCOffset = /^UTC([-+])(\d{1,2}):(\d\d)$/;
  var noop = function () {
  };

  function shorten(arr, sLen) {
    var newArr = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      newArr.push(arr[i].substr(0, sLen));
    }
    return newArr;
  }

  function monthUpdate(arrName) {
    return function (d, v, timezone, i18n) {
      var index = i18n[arrName].indexOf(v.charAt(0).toUpperCase() + v.substr(1).toLowerCase());
      if (~index) {
        d.month = index;
      }
    };
  }

  function pad(val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) {
      val = '0' + val;
    }
    return val;
  }

  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNamesShort = shorten(monthNames, 3);
  var dayNamesShort = shorten(dayNames, 3);
  fecha.i18n = {
    dayNamesShort: dayNamesShort,
    dayNames: dayNames,
    monthNamesShort: monthNamesShort,
    monthNames: monthNames,
    amPm: ['am', 'pm'],
    timezone: 'local',
    DoFn: function DoFn(D) {
      return D + ['th', 'st', 'nd', 'rd'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
  };

  var formatFlags = {
    D: function(dateObj, timezone) {
      return fecha.dates.getDay(dateObj, timezone);
    },
    DD: function(dateObj, timezone) {
      return pad(fecha.dates.getDay(dateObj, timezone));
    },
    Do: function(dateObj, timezone, i18n) {
      return i18n.DoFn(fecha.dates.getDate(dateObj, timezone));
    },
    d: function(dateObj, timezone) {
      return fecha.dates.getDate(dateObj, timezone);
    },
    dd: function(dateObj, timezone) {
      return pad(fecha.dates.getDate(dateObj, timezone));
    },
    ddd: function(dateObj, timezone, i18n) {
      return i18n.dayNamesShort[fecha.dates.getDay(dateObj, timezone)];
    },
    dddd: function(dateObj, timezone, i18n) {
      return i18n.dayNames[fecha.dates.getDay(dateObj, timezone)];
    },
    M: function(dateObj, timezone) {
      return fecha.dates.getMonth(dateObj, timezone) + 1;
    },
    MM: function(dateObj, timezone) {
      return pad(fecha.dates.getMonth(dateObj, timezone) + 1);
    },
    MMM: function(dateObj, timezone, i18n) {
      return i18n.monthNamesShort[fecha.dates.getMonth(dateObj, timezone)];
    },
    MMMM: function(dateObj, timezone, i18n) {
      return i18n.monthNames[fecha.dates.getMonth(dateObj, timezone)];
    },
    yy: function(dateObj, timezone) {
      return String(fecha.dates.getFullYear(dateObj, timezone)).substr(2);
    },
    yyyy: function(dateObj, timezone) {
      return fecha.dates.getFullYear(dateObj, timezone);
    },
    h: function(dateObj, timezone) {
      return fecha.dates.getHours(dateObj, timezone) % 12 || 12;
    },
    hh: function(dateObj, timezone) {
      return pad(fecha.dates.getHours(dateObj, timezone) % 12 || 12);
    },
    H: function(dateObj, timezone) {
      return fecha.dates.getHours(dateObj, timezone);
    },
    HH: function(dateObj, timezone) {
      return pad(fecha.dates.getHours(dateObj, timezone));
    },
    m: function(dateObj, timezone) {
      return fecha.dates.getMinutes(dateObj, timezone);
    },
    mm: function(dateObj, timezone) {
      return pad(fecha.dates.getMinutes(dateObj, timezone));
    },
    s: function(dateObj, timezone) {
      return fecha.dates.getSeconds(dateObj, timezone);
    },
    ss: function(dateObj, timezone) {
      return pad(fecha.dates.getSeconds(dateObj, timezone));
    },
    S: function(dateObj, timezone) {
      return Math.round(fecha.dates.getMilliseconds(dateObj, timezone) / 100);
    },
    SS: function(dateObj, timezone) {
      return pad(Math.round(fecha.dates.getMilliseconds(dateObj, timezone) / 10), 2);
    },
    SSS: function(dateObj, timezone) {
      return pad(fecha.dates.getMilliseconds(dateObj, timezone), 3);
    },
    a: function(dateObj, timezone, i18n) {
      return fecha.dates.getHours(dateObj, timezone) < 12 ? i18n.amPm[0] : i18n.amPm[1];
    },
    A: function(dateObj, timezone, i18n) {
      return fecha.dates.getHours(dateObj, timezone) < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
    },
    ZZ: function(dateObj, timezone) {
      var o = dateObj.getTimezoneOffset();
      return (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4);
    }
  };

  var parseFlags = {
    d: [twoDigits, function (d, v) {
      d.day = v;
    }],
    M: [twoDigits, function (d, v) {
      d.month = v - 1;
    }],
    yy: [twoDigits, function (d, v, timezone) {
      var da = new Date(), cent = +('' + fecha.dates.getFullYear(da, timezone)).substr(0, 2);
      d.year = '' + (v > 68 ? cent - 1 : cent) + v;
    }],
    h: [twoDigits, function (d, v) {
      d.hour = v;
    }],
    m: [twoDigits, function (d, v) {
      d.minute = v;
    }],
    s: [twoDigits, function (d, v) {
      d.second = v;
    }],
    yyyy: [fourDigits, function (d, v) {
      d.year = v;
    }],
    S: [/\d/, function (d, v) {
      d.millisecond = v * 100;
    }],
    SS: [/\d{2}/, function (d, v) {
      d.millisecond = v * 10;
    }],
    SSS: [threeDigits, function (d, v) {
      d.millisecond = v;
    }],
    D: [twoDigits, noop],
    ddd: [word, noop],
    MMM: [word, monthUpdate('monthNamesShort')],
    MMMM: [word, monthUpdate('monthNames')],
    a: [word, function (d, v, timezone, i18n) {
      var val = v.toLowerCase();
      if (val === i18n.amPm[0]) {
        d.isPm = false;
      } else if (val === i18n.amPm[1]) {
        d.isPm = true;
      }
    }],
    ZZ: [/[\+\-]\d\d:?\d\d/, function (d, v) {
      var parts = (v + '').match(/([\+\-]|\d\d)/gi), minutes;

      if (parts) {
        minutes = +(parts[1] * 60) + parseInt(parts[2], 10);
        d.timezoneOffset = parts[0] === '+' ? minutes : -minutes;
      }
    }]
  };
  parseFlags.DD = parseFlags.D;
  parseFlags.dddd = parseFlags.ddd;
  parseFlags.Do = parseFlags.dd = parseFlags.d;
  parseFlags.mm = parseFlags.m;
  parseFlags.hh = parseFlags.H = parseFlags.HH = parseFlags.h;
  parseFlags.MM = parseFlags.M;
  parseFlags.ss = parseFlags.s;
  parseFlags.A = parseFlags.a;


  // Some common format strings
  fecha.masks = {
    'default': 'ddd MMM dd yyyy HH:mm:ss',
    shortDate: 'M/D/yy',
    mediumDate: 'MMM d, yyyy',
    longDate: 'MMMM d, yyyy',
    fullDate: 'dddd, MMMM d, yyyy',
    shortTime: 'HH:mm',
    mediumTime: 'HH:mm:ss',
    longTime: 'HH:mm:ss.SSS'
  };

  /***
   * Format a date
   * @method format
   * @param {Date|number} dateObj
   * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
   */
  fecha.format = function (dateObj, mask, i18nSettings) {
    var i18n = Object.assign({}, fecha.i18n, i18nSettings);

    if (typeof dateObj === 'number') {
      dateObj = new Date(dateObj);
    }

    if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
      throw new Error('Invalid Date in fecha.format');
    }

    mask = fecha.masks[mask] || mask || fecha.masks['default'];

    return mask.replace(token, function ($0) {
      return $0 in formatFlags ? formatFlags[$0](dateObj, i18n.timezone, i18n) : $0.slice(1, $0.length - 1);
    });
  };

  /**
   * Parse a date string into an object, changes - into /
   * @method parse
   * @param {string} dateStr Date string
   * @param {string} format Date parse format
   * @returns {Date|boolean}
   */
  fecha.parse = function (dateStr, format, i18nSettings) {
    var i18n = Object.assign({}, fecha.i18n, i18nSettings);

    if (typeof format !== 'string') {
      throw new Error('Invalid format in fecha.parse');
    }

    format = fecha.masks[format] || format;

    // Avoid regular expression denial of service, fail early for really long strings
    // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
    if (dateStr.length > 1000) {
      return false;
    }

    var isValid = true;
    var dateInfo = {};
    format.replace(token, function ($0) {
      if (parseFlags[$0]) {
        var info = parseFlags[$0];
        var index = dateStr.search(info[0]);
        if (!~index) {
          isValid = false;
        } else {
          dateStr.replace(info[0], function (result) {
            info[1](dateInfo, result, i18n.timezone, i18n);
            dateStr = dateStr.substr(index + result.length);
            return result;
          });
        }
      }

      return parseFlags[$0] ? '' : $0.slice(1, $0.length - 1);
    });

    if (!isValid) {
      return false;
    }

    var today = new Date();
    if (dateInfo.isPm === true && dateInfo.hour != null && +dateInfo.hour !== 12) {
      dateInfo.hour = +dateInfo.hour + 12;
    } else if (dateInfo.isPm === false && +dateInfo.hour === 12) {
      dateInfo.hour = 0;
    }

    var date;
    if (dateInfo.timezoneOffset != null) {
      dateInfo.minute = +(dateInfo.minute || 0) - +dateInfo.timezoneOffset;
      date = new Date(Date.UTC(dateInfo.year || fecha.dates.getFullYear(today, i18n.timezone), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0));
    } else {
      date = fecha.dates.newDate([dateInfo.year || fecha.dates.getFullYear(today, i18n.timezone), dateInfo.month || 0, dateInfo.day || 1,
        dateInfo.hour || 0, dateInfo.minute || 0, dateInfo.second || 0, dateInfo.millisecond || 0], i18n.timezone);
    }
    return date;
  };

  fecha.dates = {};

  fecha.dates.newDate = function newDate(toSet, timezone) {
    if (Array.isArray(toSet)) {
      if (timezone === 'UTC') {
        return new Date(Date.UTC(...toSet));
      }

      const result = timezone.match(UTCOffset);

      if (result) {
        const direction = result[1];
        const hours = Number(result[2]);
        const minutes = Number(result[3]);

        if (direction === '+') {
          toSet[1] = Number(toSet[1]) || 0;
          toSet[2] = Number(toSet[2]) || Number(toSet[2]) === 0 ? Number(toSet[2]) : 1;
          toSet[3] = Number(toSet[3]) || Number(toSet[3]) === 0 ? Number(toSet[3]) - hours : -hours;
          toSet[4] = Number(toSet[4]) || Number(toSet[4]) === 0 ? Number(toSet[4]) - minutes : -minutes;
        } else {
          toSet[1] = Number(toSet[1]) || 0;
          toSet[2] = Number(toSet[2]) || Number(toSet[2]) === 0 ? Number(toSet[2]) : 1;
          toSet[3] = Number(toSet[3]) || Number(toSet[3]) === 0 ? Number(toSet[3]) + hours : hours;
          toSet[4] = Number(toSet[4]) || Number(toSet[4]) === 0 ? Number(toSet[4]) + minutes : minutes;
        }

        return new Date(Date.UTC(...toSet));
      }

      return new Date(...toSet);
    }

    return new Date(toSet);
  };

  fecha.dates.getDate = function getDate(date, timezone) {
    return getDateProperty(date, timezone, 'date');
  };

  fecha.dates.getDay = function getDay(date, timezone) {
    return getDateProperty(date, timezone, 'day');
  };

  fecha.dates.getFullYear = function getFullYear(date, timezone) {
    return getDateProperty(date, timezone, 'fullYear');
  };

  fecha.dates.getHours = function getHours(date, timezone) {
    return getDateProperty(date, timezone, 'hours');
  };

  fecha.dates.getMilliseconds = function getMilliseconds(date, timezone) {
    return getDateProperty(date, timezone, 'milliseconds');
  };

  fecha.dates.getMinutes = function getMinutes(date, timezone) {
    return getDateProperty(date, timezone, 'minutes');
  };

  fecha.dates.getMonth = function getMonth(date, timezone) {
    return getDateProperty(date, timezone, 'month');
  };

  fecha.dates.getSeconds = function getSeconds(date, timezone) {
    return getDateProperty(date, timezone, 'seconds');
  };

  fecha.dates.setDate = function setDate(date, toSet, timezone) {
    return setDateProperty(date, toSet, timezone, 'date');
  };

  fecha.dates.setFullYear = function setFullYear(date, toSet, timezone) {
    return setDateProperty(date, toSet, timezone, 'fullYear');
  };

  fecha.dates.setHours = function setHours(date, toSet, timezone) {
    return setDateProperty(date, toSet, timezone, 'hours');
  };

  fecha.dates.setMilliseconds = function setMilliseconds(date, toSet, timezone) {
    return setDateProperty(date, toSet, timezone, 'milliseconds');
  };

  fecha.dates.setMinutes = function setMinutes(date, toSet, timezone) {
    return setDateProperty(date, toSet, timezone, 'minutes');
  };

  fecha.dates.setMonth = function setMonth(date, toSet, timezone) {
    return setDateProperty(date, toSet, timezone, 'month');
  };

  fecha.dates.setSeconds = function setSeconds(date, toSet, timezone) {
    return setDateProperty(date, toSet, timezone, 'seconds');
  };

  function getDateProperty(date, timezone, funct) {
    const copiedDate = new Date(date.getTime());

    if (timezone === 'UTC') {
      return getDateFunction(copiedDate, 'UTC', funct);
    }

    const result = timezone.match(UTCOffset);

    if (result) {
      const direction = result[1];
      let hours = Number(result[2]);
      let minutes = Number(result[3]);

      if (direction === '+') {
        hours += copiedDate.getUTCHours();
        minutes += copiedDate.getUTCMinutes();
      } else {
        hours = copiedDate.getUTCHours() - hours;
        minutes = copiedDate.getUTCMinutes() - minutes;
      }

      copiedDate.setUTCHours(hours);
      copiedDate.setUTCMinutes(minutes);

      return getDateFunction(copiedDate, 'UTC', funct);
    }

    return getDateFunction(copiedDate, 'local', funct);
  };

  function setDateProperty(date, toSet, timezone, funct) {
    toSet = Array.isArray(toSet) ? toSet : [toSet];

    if (timezone === 'UTC') {
      return setDateFunction(date, toSet, 'UTC', funct);
    }

    const result = timezone.match(UTCOffset);

    if (result) {
      const direction = result[1];
      const tempDate = fecha.dates.newDate([fecha.dates.getFullYear(date, timezone), fecha.dates.getMonth(date, timezone), fecha.dates.getDate(date, timezone), fecha.dates.getHours(date, timezone), fecha.dates.getMinutes(date, timezone), fecha.dates.getSeconds(date, timezone), fecha.dates.getMilliseconds(date, timezone)], 'UTC');
      let oppositeOffset = direction === '+' ? timezone.replace('+', '-') : timezone.replace('-', '+');

      switch (funct) {
        case 'date':
          setDateFunction(tempDate, toSet, 'UTC', 'date');
          break;
        case 'fullYear':
          setDateFunction(tempDate, toSet, 'UTC', 'fullYear');
          break;
        case 'hours':
          setDateFunction(tempDate, toSet, 'UTC', 'hours');
          break;
        case 'milliseconds':
          setDateFunction(tempDate, toSet, 'UTC', 'milliseconds');
          break;
        case 'minutes':
          setDateFunction(tempDate, toSet, 'UTC', 'minutes');
          break;
        case 'month':
          setDateFunction(tempDate, toSet, 'UTC', 'month');
          break;
        case 'seconds':
          setDateFunction(tempDate, toSet, 'UTC', 'seconds');
          break;
      };

      setDateFunction(date, [fecha.dates.getHours(tempDate, oppositeOffset), fecha.dates.getMinutes(tempDate, oppositeOffset), fecha.dates.getSeconds(tempDate, oppositeOffset), fecha.dates.getMilliseconds(tempDate, oppositeOffset)], 'UTC', 'hours');
      return setDateFunction(date, [fecha.dates.getFullYear(tempDate, oppositeOffset), fecha.dates.getMonth(tempDate, oppositeOffset), fecha.dates.getDate(tempDate, oppositeOffset)], 'UTC', 'fullYear');
    }

    return setDateFunction(date, toSet, 'local', funct);
  };


  function getDateFunction(date, timezone, funct) {
    if (timezone === 'UTC') {
      switch (funct) {
        case 'date':
          return date.getUTCDate();
        case 'day':
          return date.getUTCDay();
        case 'fullYear':
          return date.getUTCFullYear();
        case 'hours':
          return date.getUTCHours();
        case 'milliseconds':
          return date.getUTCMilliseconds();
        case 'minutes':
          return date.getUTCMinutes();
        case 'month':
          return date.getUTCMonth();
        case 'seconds':
          return date.getUTCSeconds();
        default:
          return;
      }
    } else {
      switch (funct) {
        case 'date':
          return date.getDate();
        case 'day':
          return date.getDay();
        case 'fullYear':
          return date.getFullYear();
        case 'hours':
          return date.getHours();
        case 'milliseconds':
          return date.getMilliseconds();
        case 'minutes':
          return date.getMinutes();
        case 'month':
          return date.getMonth();
        case 'seconds':
          return date.getSeconds();
        default:
          return;
      }
    }
  };

  function setDateFunction(date, toSet, timezone, funct) {
    toSet = Array.isArray(toSet) ? toSet : [toSet];

    if (timezone === 'UTC') {
      switch (funct) {
        case 'date':
          return date.setUTCDate(...toSet);
        case 'fullYear':
          return date.setUTCFullYear(...toSet);
        case 'hours':
          return date.setUTCHours(...toSet);
        case 'milliseconds':
          return date.setUTCMilliseconds(...toSet);
        case 'minutes':
          return date.setUTCMinutes(...toSet);
        case 'month':
          return date.setUTCMonth(...toSet);
        case 'seconds':
          return date.setUTCSeconds(...toSet);
        default:
          return;
      }
    } else {
      switch (funct) {
        case 'date':
          return date.setDate(...toSet);
        case 'fullYear':
          return date.setFullYear(...toSet);
        case 'hours':
          return date.setHours(...toSet);
        case 'milliseconds':
          return date.setMilliseconds(...toSet);
        case 'minutes':
          return date.setMinutes(...toSet);
        case 'month':
          return date.setMonth(...toSet);
        case 'seconds':
          return date.setSeconds(...toSet);
        default:
          return;
      }
    }
  };

  /* istanbul ignore next */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = fecha;
  } else if (typeof define === 'function' && define.amd) {
    define(function () {
      return fecha;
    });
  } else {
    main.fecha = fecha;
  }
})(this);

