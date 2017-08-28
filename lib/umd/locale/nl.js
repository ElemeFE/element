(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/nl', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.nl = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Bevestig',
        clear: 'Legen'
      },
      datepicker: {
        now: 'Nu',
        today: 'Vandaag',
        cancel: 'Annuleren',
        clear: 'Legen',
        confirm: 'Bevestig',
        selectDate: 'Selecteer datum',
        selectTime: 'Selecteer tijd',
        startDate: 'Startdatum',
        startTime: 'Starttijd',
        endDate: 'Einddatum',
        endTime: 'Eindtijd',
        year: '',
        month1: 'januari',
        month2: 'februari',
        month3: 'maart',
        month4: 'april',
        month5: 'mei',
        month6: 'juni',
        month7: 'juli',
        month8: 'augustus',
        month9: 'september',
        month10: 'oktober',
        month11: 'november',
        month12: 'december',
        // week: 'week',
        weeks: {
          sun: 'Zo',
          mon: 'Ma',
          tue: 'Di',
          wed: 'Wo',
          thu: 'Do',
          fri: 'Vr',
          sat: 'Za'
        },
        months: {
          jan: 'jan',
          feb: 'feb',
          mar: 'maa',
          apr: 'apr',
          may: 'mei',
          jun: 'jun',
          jul: 'jul',
          aug: 'aug',
          sep: 'sep',
          oct: 'okt',
          nov: 'nov',
          dec: 'dec'
        }
      },
      select: {
        loading: 'Laden',
        noMatch: 'Geen overeenkomende resultaten',
        noData: 'Geen data',
        placeholder: 'Selecteer'
      },
      cascader: {
        noMatch: 'Geen overeenkomende resultaten',
        loading: 'Laden',
        placeholder: 'Selecteer'
      },
      pagination: {
        goto: 'Ga naar',
        pagesize: '/page',
        total: 'Totaal {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Bericht',
        confirm: 'Bevestig',
        cancel: 'Annuleren',
        error: 'Ongeldige invoer'
      },
      upload: {
        delete: 'Verwijder',
        preview: 'Voorbeeld',
        continue: 'Doorgaan'
      },
      table: {
        emptyText: 'Geen data',
        confirmFilter: 'Bevestigen',
        resetFilter: 'Reset',
        clearFilter: 'Alles',
        sumText: 'Sum' // to be translated
      },
      tree: {
        emptyText: 'Geen data'
      },
      transfer: {
        noMatch: 'Geen overeenkomende resultaten',
        noData: 'Geen data',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});