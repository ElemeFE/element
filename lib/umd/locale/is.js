(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/is', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.is = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Hreinsa'
      },
      datepicker: {
        now: 'Núna',
        today: 'Í dag',
        cancel: 'Hætta við',
        clear: 'Hreinsa',
        confirm: 'OK',
        selectDate: 'Velja dagsetningu',
        selectTime: 'Velja tíma',
        startDate: 'Upphafsdagsetning',
        startTime: 'Upphafstími',
        endDate: 'Lokadagsetning',
        endTime: 'Lokatími',
        prevYear: 'Síðasta ár',
        nextYear: 'Næsta ár',
        prevMonth: 'Síðasti mánuður',
        nextMonth: 'Næsti mánuður',
        year: 'Ár',
        month1: 'Janúar',
        month2: 'Febrúar',
        month3: 'Mars',
        month4: 'Apríl',
        month5: 'Maí',
        month6: 'Júní',
        month7: 'Júlí',
        month8: 'Ágúst',
        month9: 'September',
        month10: 'Október',
        month11: 'Nóvember',
        month12: 'Desember',
        week: 'Vika',
        weeks: {
          sun: 'Sun',
          mon: 'Mán',
          tue: 'Þri',
          wed: 'Mið',
          thu: 'Fim',
          fri: 'Fös',
          sat: 'Lau'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Maí',
          jun: 'Jún',
          jul: 'Júl',
          aug: 'Ágú',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nóv',
          dec: 'Des'
        }
      },
      select: {
        loading: 'Hleð',
        noMatch: 'Ekkert fannst',
        noData: 'Engin gögn',
        placeholder: 'Velja'
      },
      cascader: {
        noMatch: 'Ekkert fannst',
        loading: 'Hleð',
        placeholder: 'Velja',
        noData: 'Engin gögn'
      },
      pagination: {
        goto: 'Fara á',
        pagesize: '/sida',
        total: 'Samtals {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Skilaboð',
        confirm: 'OK',
        cancel: 'Hætta við',
        error: 'Rangt innslegið'
      },
      upload: {
        deleteTip: 'smelltu á eyða til að eyða',
        delete: 'Eyða',
        preview: 'Skoða',
        continue: 'Halda áfram'
      },
      table: {
        emptyText: 'Engin gögn',
        confirmFilter: 'Staðfesta',
        resetFilter: 'Endurstilla',
        clearFilter: 'Allt',
        sumText: 'Summa'
      },
      tree: {
        emptyText: 'Engin gögn'
      },
      transfer: {
        noMatch: 'Engin gögn fundust',
        noData: 'Engin gögn',
        titles: ['Listi 1', 'Listi 2'],
        filterPlaceholder: 'Slá inn orð',
        noCheckedFormat: '{total} atriði',
        hasCheckedFormat: '{checked}/{total} valin'
      },
      image: {
        error: 'VILLA'
      },
      pageHeader: {
        title: 'Til baka'
      },
      popconfirm: {
        confirmButtonText: 'Já',
        cancelButtonText: 'Nei'
      },
      empty: {
        description: 'Engin gögn'
      }
    }
  };
  module.exports = exports['default'];
});