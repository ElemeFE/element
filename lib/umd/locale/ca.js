(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ca', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ca = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Confirmar',
        clear: 'Netejar'
      },
      datepicker: {
        now: 'Ara',
        today: 'Avui',
        cancel: 'Cancel·lar',
        clear: 'Netejar',
        confirm: 'Confirmar',
        selectDate: 'Seleccionar data',
        selectTime: 'Seleccionar hora',
        startDate: 'Data Inici',
        startTime: 'Hora Inici',
        endDate: 'Data Final',
        endTime: 'Hora Final',
        prevYear: 'Any anterior',
        nextYear: 'Pròxim Any',
        prevMonth: 'Mes anterior',
        nextMonth: 'Pròxim Mes',
        year: '',
        month1: 'Gener',
        month2: 'Febrer',
        month3: 'Març',
        month4: 'Abril',
        month5: 'Maig',
        month6: 'Juny',
        month7: 'Juliol',
        month8: 'Agost',
        month9: 'Setembre',
        month10: 'Octubre',
        month11: 'Novembre',
        month12: 'Desembre',
        // week: 'setmana',
        weeks: {
          sun: 'Dg',
          mon: 'Dl',
          tue: 'Dt',
          wed: 'Dc',
          thu: 'Dj',
          fri: 'Dv',
          sat: 'Ds'
        },
        months: {
          jan: 'Gen',
          feb: 'Febr',
          mar: 'Març',
          apr: 'Abr',
          may: 'Maig',
          jun: 'Juny',
          jul: 'Jul',
          aug: 'Ag',
          sep: 'Set',
          oct: 'Oct',
          nov: 'Nov',
          dec: 'Des'
        }
      },
      select: {
        loading: 'Carregant',
        noMatch: 'No hi ha dades que coincideixin',
        noData: 'Sense Dades',
        placeholder: 'Seleccionar'
      },
      cascader: {
        noMatch: 'No hi ha dades que coincideixin',
        loading: 'Carregant',
        placeholder: 'Seleccionar',
        noData: 'Sense Dades'
      },
      pagination: {
        goto: 'Anar a',
        pagesize: '/pagina',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'Acceptar',
        cancel: 'Cancel·lar',
        error: 'Entrada invàlida'
      },
      upload: {
        deleteTip: 'premi eliminar per descartar',
        delete: 'Eliminar',
        preview: 'Vista Prèvia',
        continue: 'Continuar'
      },
      table: {
        emptyText: 'Sense Dades',
        confirmFilter: 'Confirmar',
        resetFilter: 'Netejar',
        clearFilter: 'Tot',
        sumText: 'Tot'
      },
      tree: {
        emptyText: 'Sense Dades'
      },
      transfer: {
        noMatch: 'No hi ha dades que coincideixin',
        noData: 'Sense Dades',
        titles: ['Llista 1', 'Llista 2'],
        filterPlaceholder: 'Introdueix la paraula clau',
        noCheckedFormat: '{total} ítems',
        hasCheckedFormat: '{checked}/{total} seleccionats'
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
      }
    }
  };
  module.exports = exports['default'];
});