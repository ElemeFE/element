(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/sw', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.sw = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Sawa',
        clear: 'Futa'
      },
      datepicker: {
        now: 'Hivi Punde',
        today: 'Leo',
        cancel: 'Katisha',
        clear: 'Futa',
        confirm: 'Sawa',
        selectDate: 'Chagua tarehe',
        selectTime: 'Chagua Muda',
        startDate: 'Kuanzia Tarehe',
        startTime: 'Kuanzia Saa',
        endDate: 'Mpaka Tarehe',
        endTime: 'Mpaka Saa',
        prevYear: 'Mwaka uliopita',
        nextYear: 'Mwaka ujao',
        prevMonth: 'Mwezi uliopita',
        nextMonth: 'Mwezi ujao',
        year: '',
        month1: 'Januari',
        month2: 'Februari',
        month3: 'Machi',
        month4: 'Aprili',
        month5: 'Mei',
        month6: 'Juni',
        month7: 'Julai',
        month8: 'Agosti',
        month9: 'Septemba',
        month10: 'Oktoba',
        month11: 'Novemba',
        month12: 'Disemba',
        week: 'wiki',
        weeks: {
          sun: 'J2',
          mon: 'J3',
          tue: 'J4',
          wed: 'J5',
          thu: 'Alhamisi',
          fri: 'Ijumaa',
          sat: 'J1'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Mei',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Ago',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Dec'
        }
      },
      select: {
        loading: 'Inapakia',
        noMatch: 'Hakuna Matokeo yaliyofanana',
        noData: 'Hakuna Matokeo',
        placeholder: 'Chagua'
      },
      cascader: {
        noMatch: 'Hakuna Matokeo yaliyofanana',
        loading: 'Inapakia',
        placeholder: 'Chagua',
        noData: 'Hakuna Matokeo'
      },
      pagination: {
        goto: 'Nenda',
        pagesize: '/page',
        total: 'Jumla {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Ujumbe',
        confirm: 'Sawa',
        cancel: 'Katisha',
        error: 'Maingizo yasiyo sahihi'
      },
      upload: {
        deleteTip: 'bonyeza futa kuondoa',
        delete: 'Futa',
        preview: 'Onyesha',
        continue: 'Endelea'
      },
      table: {
        emptyText: 'Hakuna Data',
        confirmFilter: 'Hakikisha',
        resetFilter: 'Ondoa Kichujio',
        clearFilter: 'Zote',
        sumText: 'Jumla'
      },
      tree: {
        emptyText: 'Hakuna Data'
      },
      transfer: {
        noMatch: 'Hakuna Matokeo yaliyofanana',
        noData: 'Hakuna Data',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} ya zote', // to be translated
        hasCheckedFormat: '{checked}/{total} zilizochaguliwa' // to be translated
      },
      image: {
        error: 'IMEFELI'
      },
      pageHeader: {
        title: 'Nyuma' // to be translated
      },
      popconfirm: {
        confirmButtonText: 'Ndio',
        cancelButtonText: 'Hapana'
      },
      empty: {
        description: 'Hakuna Data'
      }
    }
  };
  module.exports = exports['default'];
});