(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/af-ZA', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.afZA = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Bevestig',
        clear: 'Maak skoon'
      },
      datepicker: {
        now: 'Nou',
        today: 'Vandag',
        cancel: 'Kanselleer',
        clear: 'Maak skoon',
        confirm: 'Bevestig',
        selectDate: 'Kies datum',
        selectTime: 'Kies tyd',
        startDate: 'Begindatum',
        startTime: 'Begintyd',
        endDate: 'Einddatum',
        endTime: 'Eindtyd',
        prevYear: 'Previous Year', // to be translated
        nextYear: 'Next Year', // to be translated
        prevMonth: 'Previous Month', // to be translated
        nextMonth: 'Next Month', // to be translated
        year: 'Jaar',
        month1: 'Jan',
        month2: 'Feb',
        month3: 'Mrt',
        month4: 'Apr',
        month5: 'Mei',
        month6: 'Jun',
        month7: 'Jul',
        month8: 'Aug',
        month9: 'Sep',
        month10: 'Okt',
        month11: 'Nov',
        month12: 'Des',
        // week: 'week',
        weeks: {
          sun: 'So',
          mon: 'Ma',
          tue: 'Di',
          wed: 'Wo',
          thu: 'Do',
          fri: 'Vr',
          sat: 'Sa'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mrt',
          apr: 'Apr',
          may: 'Mei',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Des'
        }
      },
      select: {
        loading: 'Laai',
        noMatch: 'Geen toepaslike data',
        noData: 'Geen data',
        placeholder: 'Kies'
      },
      cascader: {
        noMatch: 'Geen toepaslike data',
        loading: 'Laai',
        placeholder: 'Kies',
        noData: 'Geen data'
      },
      pagination: {
        goto: 'Gaan na',
        pagesize: '/page',
        total: 'Totaal {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Boodskap',
        confirm: 'Bevestig',
        cancel: 'Kanselleer',
        error: 'Ongeldige invoer'
      },
      upload: {
        deleteTip: 'press delete to remove', // to be translated
        delete: 'Verwyder',
        preview: 'Voorskou',
        continue: 'Gaan voort'
      },
      table: {
        emptyText: 'Geen Data',
        confirmFilter: 'Bevestig',
        resetFilter: 'Herstel',
        clearFilter: 'Alles',
        sumText: 'Som'
      },
      tree: {
        emptyText: 'Geen Data'
      },
      transfer: {
        noMatch: 'Geen toepaslike data',
        noData: 'Geen data',
        titles: ['Lys 1', 'Lys 2'],
        filterPlaceholder: 'Voer sleutelwoord in',
        noCheckedFormat: '{total} items',
        hasCheckedFormat: '{checked}/{total} gekies'
      },
      image: {
        error: 'FAILED' // to be translated
      },
      pageHeader: {
        title: 'Back' // to be translated
      },
      popconfirm: {
        confirmButtonText: 'Yes', // to be translated
        cancelButtonText: 'No' // to be translated
      },
      empty: {
        description: 'Geen Data'
      }
    }
  };
  module.exports = exports['default'];
});