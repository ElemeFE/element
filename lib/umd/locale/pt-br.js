(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/pt-br', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ptBr = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Confirmar',
        clear: 'Limpar'
      },
      datepicker: {
        now: 'Agora',
        today: 'Hoje',
        cancel: 'Cancelar',
        clear: 'Limpar',
        confirm: 'Confirmar',
        selectDate: 'Selecione a data',
        selectTime: 'Selecione a hora',
        startDate: 'Data inicial',
        startTime: 'Hora inicial',
        endDate: 'Data final',
        endTime: 'Hora final',
        prevYear: 'Ano anterior',
        nextYear: 'Próximo ano',
        prevMonth: 'Mês anterior',
        nextMonth: 'Próximo mês',
        year: '',
        month1: 'Janeiro',
        month2: 'Fevereiro',
        month3: 'Março',
        month4: 'Abril',
        month5: 'Maio',
        month6: 'Junho',
        month7: 'Julho',
        month8: 'Agosto',
        month9: 'Setembro',
        month10: 'Outubro',
        month11: 'Novembro',
        month12: 'Dezembro',
        // week: 'semana',
        weeks: {
          sun: 'Dom',
          mon: 'Seg',
          tue: 'Ter',
          wed: 'Qua',
          thu: 'Qui',
          fri: 'Sex',
          sat: 'Sab'
        },
        months: {
          jan: 'Jan',
          feb: 'Fev',
          mar: 'Mar',
          apr: 'Abr',
          may: 'Mai',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Ago',
          sep: 'Set',
          oct: 'Out',
          nov: 'Nov',
          dec: 'Dez'
        }
      },
      select: {
        loading: 'Carregando',
        noMatch: 'Sem resultados',
        noData: 'Sem dados',
        placeholder: 'Selecione'
      },
      cascader: {
        noMatch: 'Sem resultados',
        loading: 'Carregando',
        placeholder: 'Selecione'
      },
      pagination: {
        goto: 'Ir para',
        pagesize: '/página',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Mensagem',
        confirm: 'Confirmar',
        cancel: 'Cancelar',
        error: 'Erro!'
      },
      upload: {
        deleteTip: 'aperte delete para apagar',
        delete: 'Apagar',
        preview: 'Pré-visualizar',
        continue: 'Continuar'
      },
      table: {
        emptyText: 'Sem dados',
        confirmFilter: 'Confirmar',
        resetFilter: 'Limpar',
        clearFilter: 'Todos',
        sumText: 'Total'
      },
      tree: {
        emptyText: 'Sem dados'
      },
      transfer: {
        noMatch: 'Sem resultados',
        noData: 'Sem dados',
        titles: ['Lista 1', 'Lista 2'],
        filterPlaceholder: 'Digite uma palavra-chave',
        noCheckedFormat: '{total} itens',
        hasCheckedFormat: '{checked}/{total} selecionados'
      },
      image: {
        error: 'FAILED' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});