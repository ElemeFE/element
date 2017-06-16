(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ru-RU', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ruRU = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Очистить'
      },
      datepicker: {
        now: 'Сейчас',
        today: 'Сегодня',
        cancel: 'Отмена',
        clear: 'Очистить',
        confirm: 'OK',
        selectDate: 'Выбрать дату',
        selectTime: 'Выбрать время',
        startDate: 'Дата начала',
        startTime: 'Время начала',
        endDate: 'Дата окончания',
        endTime: 'Время окончания',
        year: '',
        month1: 'Январь',
        month2: 'Февраль',
        month3: 'Март',
        month4: 'Апрель',
        month5: 'Май',
        month6: 'Июнь',
        month7: 'Июль',
        month8: 'Август',
        month9: 'Сентябрь',
        month10: 'Октябрь',
        month11: 'Ноябрь',
        month12: 'Декабрь',
        // week: 'week',
        weeks: {
          sun: 'Вс',
          mon: 'Пн',
          tue: 'Вт',
          wed: 'Ср',
          thu: 'Чт',
          fri: 'Пт',
          sat: 'Сб'
        },
        months: {
          jan: 'Янв',
          feb: 'Фев',
          mar: 'Мар',
          apr: 'Апр',
          may: 'Май',
          jun: 'Июн',
          jul: 'Июл',
          aug: 'Авг',
          sep: 'Сен',
          oct: 'Окт',
          nov: 'Ноя',
          dec: 'Дек'
        }
      },
      select: {
        loading: 'Загрузка',
        noMatch: 'Совпадений не найдено',
        noData: 'Нет данных',
        placeholder: 'Выбрать'
      },
      cascader: {
        noMatch: 'Совпадений не найдено',
        loading: 'Загрузка',
        placeholder: 'Выбрать'
      },
      pagination: {
        goto: 'Перейти',
        pagesize: 'на странице',
        total: 'Всего {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Сообщение',
        confirm: 'OK',
        cancel: 'Отмена',
        error: 'Недопустимый ввод данных'
      },
      upload: {
        delete: 'Удалить',
        preview: 'Превью',
        continue: 'Продолжить'
      },
      table: {
        emptyText: 'Нет данных',
        confirmFilter: 'Подтвердить',
        resetFilter: 'Сбросить',
        clearFilter: 'Все',
        sumText: 'Sum' // to be translated
      },
      tree: {
        emptyText: 'Нет данных'
      },
      transfer: {
        noMatch: 'Совпадений не найдено',
        noData: 'Нет данных',
        titles: ['List 1', 'List 2'], // to be translated
        filterPlaceholder: 'Enter keyword', // to be translated
        noCheckedFormat: '{total} items', // to be translated
        hasCheckedFormat: '{checked}/{total} checked' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});