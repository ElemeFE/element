Date.prototype.format = function() {
  let s = "";
  let mouth =
    this.getMonth() + 1 >= 10
      ? this.getMonth() + 1
      : "0" + (this.getMonth() + 1);
  let day = this.getDate() >= 10 ? this.getDate() : "0" + this.getDate();
  s += this.getFullYear() + "-"; // 获取年份。
  s += mouth + "-"; // 获取月份。
  s += day; // 获取日。
  return s; // 返回日期。
};

export function getBetweenDay(beginDate, endDate) {
  let dateSpan = endDate - beginDate;
  dateSpan = Math.abs(dateSpan);
  let days = Math.floor(dateSpan / (24 * 3600 * 1000));
  return days + 1;
}

/**
 * @param date 传入的日期
 * @param num 加减的天数，加为正，减为负
 * @returns 格式化后的日期
 */
export function addDays(date, num) {
  date.setDate(date.getDate() + num);
  return date.format();
}

//获取当前count个周的起止日期，如：count=0 ,就是当前周，-1就是上周，以此类推
export function getWeekStartAndEnd(count, currentDate) {
  //起止日期数组
  let resultArr = new Array();
  let millisecond = 1000 * 60 * 60 * 24;
  currentDate = new Date(currentDate.getTime() + millisecond * 7 * count);
  let week = currentDate.getDay();

  //减去的天数
  let minusDay = week != 0 ? week - 1 : 6;
  //获得当前周的第一天
  let currentWeekFirstDay = new Date(
    currentDate.getTime() - millisecond * minusDay
  );
  //获得当前周的最后一天
  let currentWeekLastDay = new Date(
    currentWeekFirstDay.getTime() + millisecond * 6
  );

  resultArr.push(currentWeekFirstDay.format());
  resultArr.push(currentWeekLastDay.format());
  return resultArr;
}

export function getMonthStartAndEnd(count, currentDate) {
  //起止日期数组
  let resultArray = new Array();
  let month = currentDate.getMonth() + count;
  if (month < 0) {
    let n = parseInt(-month / 12);
    month += n * 12;
    currentDate.setFullYear(currentDate.getFullYear() - n);
  }
  currentDate = new Date(currentDate.setMonth(month, 1));
  //获得当前月份0-11
  let currentMonth = currentDate.getMonth();
  //获得当前年份4位年
  let currentYear = currentDate.getFullYear();
  //获得上一个月的第一天
  let currentMonthFirstDay = new Date(currentYear, currentMonth, 1);
  //获得上一月的最后一天
  let currentMonthLastDay = new Date(currentYear, currentMonth + 1, 0);
  //添加至数组
  resultArray.push(currentMonthFirstDay.format());
  resultArray.push(currentMonthLastDay.format());
  //返回
  return resultArray;
}

// export function getYearStartAndEnd(count, currentDate) {
//   //起止日期数组
//   let resultArray = new Array();

//   //获得当前年份4位年
//   let currentYear = currentDate.getFullYear();
//   //获得上一个月的第一天
//   let currentYearFirstDay = new Date(currentYear, 1);
//   //获得上一月的最后一天
//   let currentYearLastDay = new Date(currentYear + 1, 0);
//   //添加至数组
//   resultArray.push(currentYearFirstDay.format());
//   resultArray.push(currentYearLastDay.format());
//   //返回
//   return resultArray;
// }

//定义对象排序规则，根据对象的其中的一个属性pro
export function compare(pro) {
  return function(obj1, obj2) {
    let v1 = obj1[pro];
    let v2 = obj2[pro];
    //降序
    if (v1 < v2) {
      return 1;
    } else if (v1 > v2) {
      return -1;
    } else {
      return 0;
    }
  };
}

export function compareUp(pro) {
  return function(obj1, obj2) {
    let v1 = obj1[pro];
    let v2 = obj2[pro];
    //升序
    if (v1 < v2) {
      return -1;
    } else if (v1 > v2) {
      return 1;
    } else {
      return 0;
    }
  };
}

//定义对象排序规则，根据对象的其中的一个时间属性pro
export function compareTime(pro) {
  return function(obj1, obj2) {
    let v1 = obj1[pro];
    let v2 = obj2[pro];
    v1 = new Date(v1.replace(/-/g, "/"));
    v2 = new Date(v2.replace(/-/g, "/"));
    //升序
    if (v1 > v2) {
      return 1;
    } else if (v1 < v2) {
      return -1;
    } else {
      return 0;
    }
  };
}

//数组分组
export function groupBy(array, f) {
  let groups = {};
  array.forEach(function(o) {
    let group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(function(group) {
    return groups[group];
  });
}

//获取两个日期区间的所有日期
export function getDateList(startDate, endDate, dateType) {
  const dateList = [];
  if ("day" == dateType) {
    let sdate = startDate.split("-");
    let edate = endDate.split("-");
    let startResultDate = new Date();
    startResultDate.setUTCFullYear(sdate[0], sdate[1] - 1, sdate[2]);
    let endResultDate = new Date();
    endResultDate.setUTCFullYear(edate[0], edate[1] - 1, edate[2]);
    let unixStartDate = startResultDate.getTime();
    let unixEndDate = endResultDate.getTime();
    for (let k = unixStartDate; k <= unixEndDate; ) {
      dateList.push(new Date(parseInt(k)).format());
      k = k + 24 * 60 * 60 * 1000;
    }
  }

  return dateList;
}

//日期转字符串
export function dateToString(date) {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  if (month.length == 1) {
    month = "0" + month;
  }
  if (day.length == 1) {
    day = "0" + day;
  }
  var dateTime = year + "-" + month + "-" + day;
  return dateTime;
}

//将日期转换成一年中的第几周
export function getYearWeek(date) {
  //按照国际标准
  let time,
    week,
    checkDate = new Date(date);
  checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
  time = checkDate.getTime();
  checkDate.setMonth(0);
  checkDate.setDate(1);
  week = Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
  return week;
}

//返回格式 2019年第23周，特别注意跨年一周的问题
export function getYearAndWeek(date, anotherDate) {
  let week = getYearWeek(date);
  let year = date.substring(0, 4);
  let anotherYear = anotherDate.substring(0, 4);
  //处理跨年特殊日期
  if (anotherDate > date) {
    let betweenDay = getBetweenDay(new Date(date), new Date(anotherDate));
    if (betweenDay == 7 && anotherYear != year) {
      if (week == 1) {
        year = parseInt(year) + 1;
      }
    }
  } else {
    let betweenDay = getBetweenDay(new Date(anotherDate), new Date(date));
    if (betweenDay == 7 && anotherYear != year) {
      if (week != 1) {
        year = parseInt(year) - 1;
      }
    }
  }
  return `${year}年第${week}周`;
}

//获取两个日期相差几个月
export function getBetweenMonthByDay(beginDate, endDate) {
  endDate = endDate.split("-");
  endDate = parseInt(endDate[0]) * 12 + parseInt(endDate[1]);
  beginDate = beginDate.split("-");
  beginDate = parseInt(beginDate[0]) * 12 + parseInt(beginDate[1]);

  let result = Math.abs(endDate - beginDate);
  return result + 1;
}

//获取两个日期相差几周
export function getBetweenWeekByDay(beginDate, endDate) {
  let beginTime = beginDate.getTime();
  let endTime = endDate.getTime();
  return parseInt(Math.abs(endTime - beginTime) / 1000 / 60 / 60 / 24 / 7) + 1;
}
