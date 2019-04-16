(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/hu', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.hu = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Törlés'
      },
      datepicker: {
        now: 'Most',
        today: 'Ma',
        cancel: 'Mégse',
        clear: 'Törlés',
        confirm: 'OK',
        selectDate: 'Dátum',
        selectTime: 'Időpont',
        startDate: 'Dátum-tól',
        startTime: 'Időpont-tól',
        endDate: 'Dátum-ig',
        endTime: 'Időpont-ig',
        prevYear: 'Előző év',
        nextYear: 'Következő év',
        prevMonth: 'Előző hónap',
        nextMonth: 'Következő hónap',
        year: '',
        month1: 'Január',
        month2: 'Február',
        month3: 'Március',
        month4: 'Április',
        month5: 'Május',
        month6: 'Június',
        month7: 'Július',
        month8: 'Augusztus',
        month9: 'Szeptember',
        month10: 'Október',
        month11: 'November',
        month12: 'December',
        weeks: {
          sun: 'Vas',
          mon: 'Hét',
          tue: 'Ked',
          wed: 'Sze',
          thu: 'Csü',
          fri: 'Pén',
          sat: 'Szo'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Már',
          apr: 'Ápr',
          may: 'Máj',
          jun: 'Jún',
          jul: 'Júl',
          aug: 'Aug',
          sep: 'Szep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Betöltés',
        noMatch: 'Nincs találat',
        noData: 'Nincs adat',
        placeholder: 'Válassz'
      },
      cascader: {
        noMatch: 'Nincs találat',
        loading: 'Betöltés',
        placeholder: 'Válassz'
      },
      pagination: {
        goto: 'Ugrás',
        pagesize: '/oldal',
        total: 'Össz {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Üzenet',
        confirm: 'OK',
        cancel: 'Mégse',
        error: 'Hibás adat'
      },
      upload: {
        deleteTip: 'kattints a törléshez',
        delete: 'Törlés',
        preview: 'Előnézet',
        continue: 'Tovább'
      },
      table: {
        emptyText: 'Nincs adat',
        confirmFilter: 'Megerősít',
        resetFilter: 'Alaphelyet',
        clearFilter: 'Mind',
        sumText: 'Összeg'
      },
      tree: {
        emptyText: 'Nincs adat'
      },
      transfer: {
        noMatch: 'Nincs találat',
        noData: 'Nincs adat',
        titles: ['Lista 1', 'Lista 2'],
        filterPlaceholder: 'Kulcsszó',
        noCheckedFormat: '{total} elem',
        hasCheckedFormat: '{checked}/{total} kiválasztva'
      }
    }
  };
  module.exports = exports['default'];
});