(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/sl', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.sl = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'V redu',
        clear: 'Počisti'
      },
      datepicker: {
        now: 'Zdaj',
        today: 'Danes',
        cancel: 'Prekliči',
        clear: 'Počisti',
        confirm: 'Potrdi',
        selectDate: 'Izberi datum',
        selectTime: 'Izberi čas',
        startDate: 'Začetni datum',
        startTime: 'Začetni čas',
        endDate: 'Končni datum',
        endTime: 'Končni čas',
        year: 'Leto',
        month1: 'Jan',
        month2: 'Feb',
        month3: 'Mar',
        month4: 'Apr',
        month5: 'Maj',
        month6: 'Jun',
        month7: 'Jul',
        month8: 'Avg',
        month9: 'Sep',
        month10: 'Okt',
        month11: 'Nov',
        month12: 'Dec',
        week: 'teden',
        weeks: {
          sun: 'Ned',
          mon: 'Pon',
          tue: 'Tor',
          wed: 'Sre',
          thu: 'Čet',
          fri: 'Pet',
          sat: 'Sob'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Maj',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Avg',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Nalaganje',
        noMatch: 'Ni ustreznih podatkov',
        noData: 'Ni podatkov',
        placeholder: 'Izberi'
      },
      cascader: {
        noMatch: 'Ni ustreznih podatkov',
        loading: 'Nalaganje',
        placeholder: 'Izberi'
      },
      pagination: {
        goto: 'Pojdi na',
        pagesize: '/page',
        total: 'Skupno {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Sporočilo',
        confirm: 'V redu',
        cancel: 'Prekliči',
        error: 'Nedovoljen vnos'
      },
      upload: {
        delete: 'Izbriši',
        preview: 'Predogled',
        continue: 'Nadaljuj'
      },
      table: {
        emptyText: 'Ni podatkov',
        confirmFilter: 'Potrdi',
        resetFilter: 'Ponastavi',
        clearFilter: 'Vse',
        sumText: 'Skupno'
      },
      tree: {
        emptyText: 'Ni podatkov'
      },
      transfer: {
        noMatch: 'Ni ustreznih podatkov',
        noData: 'Ni podatkov',
        titles: ['Seznam 1', 'Seznam 2'],
        filterPlaceholder: 'Vnesi ključno besedo',
        noCheckedFormat: '{total} elementov',
        hasCheckedFormat: '{checked}/{total} izbranih'
      }
    }
  };
  module.exports = exports['default'];
});