(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ee', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ee = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Tühjenda'
      },
      datepicker: {
        now: 'Praegu',
        today: 'Täna',
        cancel: 'Tühista',
        clear: 'Tühjenda',
        confirm: 'OK',
        selectDate: 'Vali kuupäev',
        selectTime: 'Vali kellaaeg',
        startDate: 'Alguskuupäev',
        startTime: 'Algusaeg',
        endDate: 'Lõpukuupäev',
        endTime: 'Lõpuaeg',
        prevYear: 'Previous Year', // to be translated
        nextYear: 'Next Year', // to be translated
        prevMonth: 'Previous Month', // to be translated
        nextMonth: 'Next Month', // to be translated
        year: '',
        month1: 'Jaanuar',
        month2: 'Veebruar',
        month3: 'Märts',
        month4: 'Aprill',
        month5: 'Mai',
        month6: 'Juuni',
        month7: 'Juuli',
        month8: 'August',
        month9: 'September',
        month10: 'Oktoober',
        month11: 'November',
        month12: 'Detsember',
        // week: 'nädal',
        weeks: {
          sun: 'P',
          mon: 'E',
          tue: 'T',
          wed: 'K',
          thu: 'N',
          fri: 'R',
          sat: 'L'
        },
        months: {
          jan: 'Jaan',
          feb: 'Veeb',
          mar: 'Mär',
          apr: 'Apr',
          may: 'Mai',
          jun: 'Juun',
          jul: 'Juul',
          aug: 'Aug',
          sep: 'Sept',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dets'
        }
      },
      select: {
        loading: 'Laadimine',
        noMatch: 'Sobivad andmed puuduvad',
        noData: 'Andmed puuduvad',
        placeholder: 'Vali'
      },
      cascader: {
        noMatch: 'Sobivad andmed puuduvad',
        loading: 'Laadimine',
        placeholder: 'Vali'
      },
      pagination: {
        goto: 'Mine lehele',
        pagesize: '/page',
        total: 'Kokku {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Teade',
        confirm: 'OK',
        cancel: 'Tühista',
        error: 'Vigane sisend'
      },
      upload: {
        deleteTip: 'press delete to remove', // to be translated
        delete: 'Kustuta',
        preview: 'Eelvaate',
        continue: 'Jätka'
      },
      table: {
        emptyText: 'Andmed puuduvad',
        confirmFilter: 'Kinnita',
        resetFilter: 'Taasta',
        clearFilter: 'Kõik',
        sumText: 'Summa'
      },
      tree: {
        emptyText: 'Andmed puuduvad'
      },
      transfer: {
        noMatch: 'Sobivad andmed puuduvad',
        noData: 'Andmed puuduvad',
        titles: ['Loend 1', 'Loend 2'],
        filterPlaceholder: 'Sisesta märksõna',
        noCheckedFormat: '{total} objekti',
        hasCheckedFormat: '{checked}/{total} valitud'
      }
    }
  };
  module.exports = exports['default'];
});