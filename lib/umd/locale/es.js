(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/es', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.es = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Confirmar',
        clear: 'Limpiar'
      },
      datepicker: {
        now: 'Ahora',
        today: 'Hoy',
        cancel: 'Cancelar',
        clear: 'Limpiar',
        confirm: 'Confirmar',
        selectDate: 'Seleccionar fecha',
        selectTime: 'Seleccionar hora',
        startDate: 'Fecha de Inicio',
        startTime: 'Hora de Inicio',
        endDate: 'Fecha Final',
        endTime: 'Hora Final',
        year: 'Año',
        month1: 'Enero',
        month2: 'Febrero',
        month3: 'Marzo',
        month4: 'Abril',
        month5: 'Mayo',
        month6: 'Junio',
        month7: 'Julio',
        month8: 'Agosto',
        month9: 'Septiembre',
        month10: 'Octubre',
        month11: 'Noviembre',
        month12: 'Diciembre',
        // week: 'semana',
        weeks: {
          sun: 'Dom',
          mon: 'Lun',
          tue: 'Mar',
          wed: 'Mié',
          thu: 'Jue',
          fri: 'Vie',
          sat: 'Sáb'
        },
        months: {
          jan: 'Ene',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Abr',
          may: 'May',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Ago',
          sep: 'Sep',
          oct: 'Oct',
          nov: 'Nov',
          dec: 'Dic'
        }
      },
      select: {
        loading: 'Cargando',
        noMatch: 'No hay datos que coincidan',
        noData: 'Sin datos',
        placeholder: 'Seleccionar'
      },
      cascader: {
        noMatch: 'No hay datos que coincidan',
        loading: 'Cargando',
        placeholder: 'Seleccionar'
      },
      pagination: {
        goto: 'Ir a',
        pagesize: '/pagina',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'Aceptar',
        cancel: 'Cancelar',
        error: 'Entrada inválida'
      },
      upload: {
        delete: 'Eliminar',
        preview: 'Vista Previa',
        continue: 'Continuar'
      },
      table: {
        emptyText: 'Sin Datos',
        confirmFilter: 'Confirmar',
        resetFilter: 'Limpiar',
        clearFilter: 'Todo',
        sumText: 'Sum' // to be translated
      },
      tree: {
        emptyText: 'Sin Datos'
      },
      transfer: {
        noMatch: 'No hay datos que coincidan',
        noData: 'Sin datos',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});