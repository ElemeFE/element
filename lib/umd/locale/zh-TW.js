(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/zh-TW', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.zhTW = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: '確認',
        clear: '清空'
      },
      datepicker: {
        now: '現在',
        today: '今天',
        cancel: '取消',
        clear: '清空',
        confirm: '確認',
        selectDate: '選擇日期',
        selectTime: '選擇時間',
        startDate: '開始日期',
        startTime: '開始時間',
        endDate: '結束日期',
        endTime: '結束時間',
        prevYear: '前一年',
        nextYear: '後一年',
        prevMonth: '上個月',
        nextMonth: '下個月',
        year: '年',
        month1: '1 月',
        month2: '2 月',
        month3: '3 月',
        month4: '4 月',
        month5: '5 月',
        month6: '6 月',
        month7: '7 月',
        month8: '8 月',
        month9: '9 月',
        month10: '10 月',
        month11: '11 月',
        month12: '12 月',
        // week: '周次',
        weeks: {
          sun: '日',
          mon: '一',
          tue: '二',
          wed: '三',
          thu: '四',
          fri: '五',
          sat: '六'
        },
        months: {
          jan: '一月',
          feb: '二月',
          mar: '三月',
          apr: '四月',
          may: '五月',
          jun: '六月',
          jul: '七月',
          aug: '八月',
          sep: '九月',
          oct: '十月',
          nov: '十一月',
          dec: '十二月'
        }
      },
      select: {
        loading: '加載中',
        noMatch: '無匹配資料',
        noData: '無資料',
        placeholder: '請選擇'
      },
      cascader: {
        noMatch: '無匹配資料',
        loading: '加載中',
        placeholder: '請選擇'
      },
      pagination: {
        goto: '前往',
        pagesize: '項/頁',
        total: '共 {total} 項',
        pageClassifier: '頁'
      },
      messagebox: {
        title: '提示',
        confirm: '確定',
        cancel: '取消',
        error: '輸入的資料不符規定!'
      },
      upload: {
        deleteTip: '按 delete 鍵可刪除',
        delete: '刪除',
        preview: '查看圖片',
        continue: '繼續上傳'
      },
      table: {
        emptyText: '暫無資料',
        confirmFilter: '篩選',
        resetFilter: '重置',
        clearFilter: '全部',
        sumText: 'Sum' // to be translated
      },
      tree: {
        emptyText: '暫無資料'
      },
      transfer: {
        noMatch: '無匹配資料',
        noData: '無資料',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
      },
      image: {
        error: '加載失敗'
      }
    }
  };
  module.exports = exports['default'];
});