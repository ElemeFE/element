(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/fa', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.fa = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'باشد',
        clear: 'حذف'
      },
      datepicker: {
        now: 'اکنون',
        today: 'امروز',
        cancel: 'لغو',
        clear: 'حذف',
        confirm: 'باشه',
        selectDate: 'انتخاب تاریخ',
        selectTime: 'انتخاب زمان',
        startDate: 'تاریخ شروع',
        startTime: 'زمان شروع',
        endDate: 'تاریخ پایان',
        endTime: 'زمان پایان',
        prevYear: 'سال قبل',
        nextYear: 'سال بعد',
        prevMonth: 'ماه قبل',
        nextMonth: 'ماه بعد',
        year: 'سال',
        month1: 'ژانویه',
        month2: 'فوریه',
        month3: 'مارس',
        month4: 'آوریل',
        month5: 'مه',
        month6: 'ژوئن',
        month7: 'جولای',
        month8: 'اوت',
        month9: 'سپتامبر',
        month10: 'اکتبر',
        month11: 'نوامبر',
        month12: 'دسامبر',
        // week: 'week',
        weeks: {
          sun: 'یکشنبه',
          mon: 'دوشنبه',
          tue: 'سه​شنبه',
          wed: 'چهارشنبه',
          thu: 'پنج​شنبه',
          fri: 'جمعه',
          sat: 'شنبه'
        },
        months: {
          jan: 'ژانویه',
          feb: 'فوریه',
          mar: 'مارس',
          apr: 'آوریل',
          may: 'مه',
          jun: 'ژوئن',
          jul: 'جولای',
          aug: 'اوت',
          sep: 'سپتامبر',
          oct: 'اکتبر',
          nov: 'نوامبر',
          dec: 'دسامبر'
        }
      },
      select: {
        loading: 'بارگیری',
        noMatch: 'هیچ داده‌ای پیدا نشد',
        noData: 'اطلاعاتی وجود ندارد',
        placeholder: 'انتخاب کنید'
      },
      cascader: {
        noMatch: 'هیچ داده‌ای پیدا نشد',
        loading: 'بارگیری',
        placeholder: 'انتخاب کنید',
        noData: 'اطلاعاتی وجود ندارد'
      },
      pagination: {
        goto: 'برو به',
        pagesize: '/صفحه',
        total: 'مجموع {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'پیام',
        confirm: 'باشه',
        cancel: 'لغو',
        error: 'ورودی غیر مجاز'
      },
      upload: {
        deleteTip: 'برای پاک کردن حذف را فشار دهید',
        delete: 'حذف',
        preview: 'پیش‌نمایش',
        continue: 'ادامه'
      },
      table: {
        emptyText: 'اطلاعاتی وجود ندارد',
        confirmFilter: 'تایید',
        resetFilter: 'حذف',
        clearFilter: 'همه',
        sumText: 'جمع'
      },
      tree: {
        emptyText: 'اطلاعاتی وجود ندارد'
      },
      transfer: {
        noMatch: 'هیچ داده‌ای پیدا نشد',
        noData: 'اطلاعاتی وجود ندارد',
        titles: ['لیست 1', 'لیست 2'],
        filterPlaceholder: 'کلید واژه هارو وارد کن',
        noCheckedFormat: '{total} مورد',
        hasCheckedFormat: '{checked} مورد از {total} مورد انتخاب شده است'
      },
      image: {
        error: 'خطا در بارگیری تصویر'
      },
      pageHeader: {
        title: 'بازگشت'
      },
      popconfirm: {
        confirmButtonText: 'Yes', // to be translated
        cancelButtonText: 'No' // to be translated
      },
      empty: {
        description: 'اطلاعاتی وجود ندارد'
      }
    }
  };
  module.exports = exports['default'];
});