(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ro', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ro = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Șterge'
      },
      datepicker: {
        now: 'Acum',
        today: 'Azi',
        cancel: 'Anulează',
        clear: 'Șterge',
        confirm: 'OK',
        selectDate: 'Selectează data',
        selectTime: 'Selectează ora',
        startDate: 'Data de început',
        startTime: 'Ora de început',
        endDate: 'Data de sfârșit',
        endTime: 'Ora de sfârșit',
        prevYear: 'Anul trecut',
        nextYear: 'Anul următor',
        prevMonth: 'Luna trecută',
        nextMonth: 'Luna următoare',
        year: '',
        month1: 'Ianuarie',
        month2: 'Februarie',
        month3: 'Martie',
        month4: 'Aprilie',
        month5: 'Mai',
        month6: 'Iunie',
        month7: 'Iulie',
        month8: 'August',
        month9: 'Septembrie',
        month10: 'Octombrie',
        month11: 'Noiembrie',
        month12: 'Decembrie',
        // week: 'week',
        weeks: {
          sun: 'Du',
          mon: 'Lu',
          tue: 'Ma',
          wed: 'Mi',
          thu: 'Jo',
          fri: 'Vi',
          sat: 'Sâ'
        },
        months: {
          jan: 'Ian',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Mai',
          jun: 'Iun',
          jul: 'Iul',
          aug: 'Aug',
          sep: 'Sep',
          oct: 'Oct',
          nov: 'Noi',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Se încarcă',
        noMatch: 'Nu există date potrivite',
        noData: 'Nu există date',
        placeholder: 'Selectează'
      },
      cascader: {
        noMatch: 'Nu există date potrivite',
        loading: 'Se încarcă',
        placeholder: 'Selectează'
      },
      pagination: {
        goto: 'Go to',
        pagesize: '/pagina',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Mesaj',
        confirm: 'OK',
        cancel: 'Anulează',
        error: 'Date introduse eronate'
      },
      upload: {
        deleteTip: 'apăsați pe ștergeți pentru a elimina',
        delete: 'șterge',
        preview: 'previzualizare',
        continue: 'continuă'
      },
      table: {
        emptyText: 'Nu există date',
        confirmFilter: 'Confirmă',
        resetFilter: 'Resetează',
        clearFilter: 'Tot',
        sumText: 'Suma'
      },
      tree: {
        emptyText: 'Nu există date'
      },
      transfer: {
        noMatch: 'Nu există date potrivite',
        noData: 'Nu există date',
        titles: ['Lista 1', 'Lista 2'],
        filterPlaceholder: 'Introduceți cuvântul cheie',
        noCheckedFormat: '{total} elemente',
        hasCheckedFormat: '{checked}/{total} verificate'
      }
    }
  };
  module.exports = exports['default'];
});