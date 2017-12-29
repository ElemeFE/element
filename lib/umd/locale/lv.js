(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/lv', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.lv = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Labi',
        clear: 'Notīrīt'
      },
      datepicker: {
        now: 'Tagad',
        today: 'Šodien',
        cancel: 'Atcelt',
        clear: 'Notīrīt',
        confirm: 'Labi',
        selectDate: 'Izvēlēties datumu',
        selectTime: 'Izvēlēties laiku',
        startDate: 'Sākuma datums',
        startTime: 'Sākuma laiks',
        endDate: 'Beigu datums',
        endTime: 'Beigu laiks',
        prevYear: 'Previous Year', // to be translated
        nextYear: 'Next Year', // to be translated
        prevMonth: 'Previous Month', // to be translated
        nextMonth: 'Next Month', // to be translated
        year: '',
        month1: 'Janvāris',
        month2: 'Februāris',
        month3: 'Marts',
        month4: 'Aprīlis',
        month5: 'Maijs',
        month6: 'Jūnijs',
        month7: 'Jūlijs',
        month8: 'Augusts',
        month9: 'Septembris',
        month10: 'Oktobris',
        month11: 'Novembris',
        month12: 'Decembris',
        // week: 'nedēļa',
        weeks: {
          sun: 'Sv',
          mon: 'Pr',
          tue: 'Ot',
          wed: 'Tr',
          thu: 'Ce',
          fri: 'Pk',
          sat: 'Se'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Mai',
          jun: 'Jūn',
          jul: 'Jūl',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Ielādē',
        noMatch: 'Nav atbilstošu datu',
        noData: 'Nav datu',
        placeholder: 'Izvēlēties'
      },
      cascader: {
        noMatch: 'Nav atbilstošu datu',
        loading: 'Ielādē',
        placeholder: 'Izvēlēties'
      },
      pagination: {
        goto: 'Iet uz',
        pagesize: '/page',
        total: 'Kopā {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Paziņojums',
        confirm: 'Labi',
        cancel: 'Atcelt',
        error: 'Nederīga ievade'
      },
      upload: {
        deleteTip: 'press delete to remove', // to be translated
        delete: 'Dzēst',
        preview: 'Priekšskatīt',
        continue: 'Turpināt'
      },
      table: {
        emptyText: 'Nav datu',
        confirmFilter: 'Apstiprināt',
        resetFilter: 'Reset',
        clearFilter: 'Visi',
        sumText: 'Summa'
      },
      tree: {
        emptyText: 'Nav datu'
      },
      transfer: {
        noMatch: 'Nav atbilstošu datu',
        noData: 'Nav datu',
        titles: ['Saraksts 1', 'Saraksts 2'],
        filterPlaceholder: 'Ievadīt atslēgvārdu',
        noCheckedFormat: '{total} vienības',
        hasCheckedFormat: '{checked}/{total} atzīmēti'
      }
    }
  };
  module.exports = exports['default'];
});