(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/uz-UZ', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.uzUZ = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Qabul qilish',
        clear: 'Tozalash'
      },
      datepicker: {
        now: 'Hozir',
        today: 'Bugun',
        cancel: 'Bekor qilish',
        clear: 'Tozalash',
        confirm: 'Qabul qilish',
        selectDate: 'Kunni taladingiz',
        selectTime: 'Soatni tanladingiz',
        startDate: 'Boshlanish sanasi',
        startTime: 'Boshlanish vaqti',
        endDate: 'Tugash sanasi',
        endTime: 'Tugash vaqti',
        prevYear: 'O`tgan yil',
        nextYear: 'Kelgusi yil',
        prevMonth: 'O`tgan oy',
        nextMonth: 'Kelgusi oy',
        year: 'Yil',
        month1: 'Yanvar',
        month2: 'Fevral',
        month3: 'Mart',
        month4: 'Aprel',
        month5: 'May',
        month6: 'Iyun',
        month7: 'Iyul',
        month8: 'Avgust',
        month9: 'Sentyabr',
        month10: 'Oktabr',
        month11: 'Noyabr',
        month12: 'Dekabr',
        week: 'Hafta',
        weeks: {
          sun: 'Yak',
          mon: 'Dush',
          tue: 'Sesh',
          wed: 'Chor',
          thu: 'Pay',
          fri: 'Jum',
          sat: 'Shan'
        },
        months: {
          jan: 'Yan',
          feb: 'Fev',
          mar: 'Mar',
          apr: 'Apr',
          may: 'May',
          jun: 'Iyun',
          jul: 'Iyul',
          aug: 'Avg',
          sep: 'Sen',
          oct: 'Okt',
          nov: 'Noy',
          dec: 'Dek'
        }
      },
      select: {
        loading: 'Yuklanmoqda',
        noMatch: 'Mos ma`lumot yo`q',
        noData: 'Ma`lumot yo`q',
        placeholder: 'Tanladizngiz'
      },
      cascader: {
        noMatch: 'Mos ma`lumot yo`q',
        loading: 'Yuklanmoqda',
        placeholder: 'Tanladingiz',
        noData: 'Ma`lumot yo`q'
      },
      pagination: {
        goto: 'Borish',
        pagesize: '/page',
        total: 'Jami {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Xabar',
        confirm: 'Qabul qilish',
        cancel: 'Bekor qilish',
        error: 'Xatolik'
      },
      upload: {
        deleteTip: 'O`chirish tugmasini bosib o`chiring',
        delete: 'O`chirish',
        preview: 'Oldin ko`rish',
        continue: 'Joylashtirish'
      },
      table: {
        emptyText: 'Bo`sh',
        confirmFilter: 'Qabul qilish',
        resetFilter: 'Oldingi holatga qaytarish',
        clearFilter: 'Jami',
        sumText: 'Summasi'
      },
      tree: {
        emptyText: 'Ma`lumot yo`q'
      },
      transfer: {
        noMatch: 'Mos ma`lumot topilmadi',
        noData: 'Ma`lumot yo`q',
        titles: ['List 1', 'List 2'],
        filterPlaceholder: 'Kalit so`zni kiriting',
        noCheckedFormat: '{total} ta element',
        hasCheckedFormat: '{checked}/{total} belgilandi'
      },
      image: {
        error: 'Xatolik'
      },
      pageHeader: {
        title: 'Orqaga'
      }
    }
  };
  module.exports = exports['default'];
});