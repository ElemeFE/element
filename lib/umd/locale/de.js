(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/de', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.de = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Leeren'
      },
      datepicker: {
        now: 'Jetzt',
        today: 'Heute',
        cancel: 'Abbrechen',
        clear: 'Leeren',
        confirm: 'OK',
        selectDate: 'Datum wählen',
        selectTime: 'Uhrzeit wählen',
        startDate: 'Startdatum',
        startTime: 'Startzeit',
        endDate: 'Enddatum',
        endTime: 'Endzeit',
        prevYear: 'Letztes Jahr',
        nextYear: 'Nächtes Jahr',
        prevMonth: 'Letzter Monat',
        nextMonth: 'Nächster Monat',
        day: 'Tag',
        week: 'Woche',
        month: 'Monat',
        year: '',
        month1: 'Januar',
        month2: 'Februar',
        month3: 'März',
        month4: 'April',
        month5: 'Mai',
        month6: 'Juni',
        month7: 'Juli',
        month8: 'August',
        month9: 'September',
        month10: 'Oktober',
        month11: 'November',
        month12: 'Dezember',
        weeks: {
          sun: 'So',
          mon: 'Mo',
          tue: 'Di',
          wed: 'Mi',
          thu: 'Do',
          fri: 'Fr',
          sat: 'Sa'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mär',
          apr: 'Apr',
          may: 'Mai',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dez'
        }
      },
      select: {
        loading: 'Lädt.',
        noMatch: 'Nichts gefunden.',
        noData: 'Keine Daten',
        placeholder: 'Daten wählen'
      },
      cascader: {
        noMatch: 'Nichts gefunden.',
        loading: 'Lädt.',
        placeholder: 'Daten wählen',
        noData: 'Keine Daten'
      },
      pagination: {
        goto: 'Gehe zu',
        pagesize: ' pro Seite',
        total: 'Gesamt {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'OK',
        cancel: 'Abbrechen',
        error: 'Fehler'
      },
      upload: {
        deleteTip: 'Klicke löschen zum entfernen',
        delete: 'Löschen',
        preview: 'Vorschau',
        continue: 'Fortsetzen'
      },
      table: {
        emptyText: 'Keine Daten',
        confirmFilter: 'Anwenden',
        resetFilter: 'Zurücksetzen',
        clearFilter: 'Alles ',
        sumText: 'Summe'
      },
      tree: {
        emptyText: 'Keine Einträge'
      },
      transfer: {
        noMatch: 'Nichts gefunden.',
        noData: 'Keine Einträge',
        titles: ['Liste 1', 'Liste 2'],
        filterPlaceholder: 'Einträge filtern',
        noCheckedFormat: '{total} Einträge',
        hasCheckedFormat: '{checked}/{total} ausgewählt'
      },
      image: {
        error: 'FAILED' // to be translated
      },
      pageHeader: {
        title: 'Back' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});