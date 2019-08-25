(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ar', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ar = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'موافق',
        clear: 'إزالة'
      },
      datepicker: {
        now: 'الآن',
        today: 'اليوم',
        cancel: 'إلغاء',
        clear: 'إزالة',
        confirm: 'موافق',
        selectDate: 'أختر التاريخ',
        selectTime: 'أختر الوقت',
        startDate: 'تاريخ البدء',
        startTime: 'وقت البدء',
        endDate: 'تاريخ الانتهاء',
        endTime: 'وقت الانتهاء',
        prevYear: 'Previous Year', // to be translated
        nextYear: 'Next Year', // to be translated
        prevMonth: 'Previous Month', // to be translated
        nextMonth: 'Next Month', // to be translated
        year: '',
        month1: 'يناير',
        month2: 'فبراير',
        month3: 'مارس',
        month4: 'ابريل',
        month5: 'مايو',
        month6: 'يونيو',
        month7: 'يوليو',
        month8: 'أغسطس',
        month9: 'سبتمبر',
        month10: 'أكتوبر',
        month11: 'نوفمبر',
        month12: 'ديسمبر',
        week: 'أسبوع',
        weeks: {
          sun: 'الأحد',
          mon: 'الأثنين',
          tue: 'الثلاثاء',
          wed: 'الأربعاء',
          thu: 'الخميس',
          fri: 'الجمعة',
          sat: 'السبت'
        },
        months: {
          jan: 'يناير',
          feb: 'فبراير',
          mar: 'مارس',
          apr: 'أبريل',
          may: 'مايو',
          jun: 'يونيو',
          jul: 'يوليو',
          aug: 'أغسطس',
          sep: 'سبتمبر',
          oct: 'أكتوبر',
          nov: 'نوفمبر',
          dec: 'ديسمبر'
        }
      },
      select: {
        loading: 'جار التحميل',
        noMatch: 'لايوجد بيانات مطابقة',
        noData: 'لايوجد بيانات',
        placeholder: 'أختر'
      },
      cascader: {
        noMatch: 'لايوجد بيانات مطابقة',
        loading: 'جار التحميل',
        placeholder: 'أختر'
      },
      pagination: {
        goto: 'أذهب إلى',
        pagesize: '/صفحة',
        total: 'الكل {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'الرسالة',
        confirm: 'موافق',
        cancel: 'إلغاء',
        error: 'مدخل غير صحيح'
      },
      upload: {
        delete: 'حذف',
        preview: 'عرض',
        continue: 'إستمرار'
      },
      table: {
        emptyText: 'لايوجد بيانات',
        confirmFilter: 'تأكيد',
        resetFilter: 'حذف',
        clearFilter: 'الكل',
        sumText: 'المجموع'
      },
      tree: {
        emptyText: 'لايوجد بيانات'
      },
      transfer: {
        noMatch: 'لايوجد بيانات مطابقة',
        noData: 'لايوجد بيانات',
        titles: ['قائمة 1', 'قائمة 2'],
        filterPlaceholder: 'ادخل كلمة',
        noCheckedFormat: '{total} عناصر',
        hasCheckedFormat: '{checked}/{total} مختار'
      },
      image: {
        error: 'FAILED' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});