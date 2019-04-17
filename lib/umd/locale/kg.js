(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/kg', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.kg = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Мурунку',
        clear: 'ачык'
      },
      datepicker: {
        now: 'азыр',
        today: 'бүгүн',
        cancel: 'жокко чыгарылды',
        clear: 'ачык',
        confirm: 'белгилөө',
        selectDate: 'дата',
        selectTime: 'тандоо убактысы',
        startDate: 'Башталган датасы',
        startTime: 'Start убакыт',
        endDate: 'Бүткөн датасы',
        endTime: 'End убакыт',
        prevYear: 'өткөн жылы',
        nextYear: 'бир жылдан кийин',
        prevMonth: 'Өткөн айда',
        nextMonth: 'Кийинки ай',
        year: 'жыл',
        month1: 'биринчи ай',
        month2: 'Экинчи айда',
        month3: 'Үчүнчү айда',
        month4: 'Төртүнчү айда',
        month5: 'бешинчи айда',
        month6: 'Алгачкы алты ай',
        month7: 'жетинчи айда',
        month8: 'сегизинчи ай',
        month9: 'Алгачкы тогуз ай',
        month10: 'онунчу айда',
        month11: 'он биринчи ай',
        month12: 'он экинчи айда',
        // week: '周次',
        weeks: {
          sun: 'жети жума',
          mon: 'дүйшөмбү',
          tue: 'шейшемби',
          wed: 'шаршемби',
          thu: 'бейшемби',
          fri: 'жума',
          sat: 'ишемби'
        },
        months: {
          jan: 'биринчи ай',
          feb: 'Экинчи айда',
          mar: 'Үчүнчү айда',
          apr: 'Төртүнчү айда',
          may: 'бешинчи айда',
          jun: 'Алгачкы алты ай',
          jul: 'жетинчи айда',
          aug: 'сегизинчи ай',
          sep: 'Алгачкы тогуз ай',
          oct: 'онунчу айда',
          nov: 'он биринчи ай',
          dec: 'он экинчи айда'
        }
      },
      select: {
        loading: 'Жүктөлүүдө',
        noMatch: 'Дал келген маалыматтар',
        noData: 'маалымат жок',
        placeholder: 'тандоо'
      },
      cascader: {
        noMatch: 'Дал келген маалыматтар',
        loading: 'Жүктөлүүдө',
        placeholder: 'тандоо'
      },
      pagination: {
        goto: 'Мурунку',
        pagesize: 'бир',
        total: 'бүтүндөй {total} сан ',
        pageClassifier: 'бет'
      },
      messagebox: {
        title: 'тез',
        confirm: 'белгилөө',
        cancel: 'жокко чыгарылды',
        error: 'Маалыматтарды киргизүү мыйзамдуу эмес!'
      },
      upload: {
        deleteTip: 'Жок кылуу баскычын басуу жок',
        delete: 'жок кылуу',
        preview: 'ЖМКнын картинки',
        continue: 'жүктөп бер'
      },
      table: {
        emptyText: 'маалымат жок',
        confirmFilter: 'чыпка',
        resetFilter: 'кайра орнотуу',
        clearFilter: 'бүткөн',
        sumText: 'Бардыгы болуп'
      },
      tree: {
        emptyText: 'маалымат жок'
      },
      transfer: {
        noMatch: 'Дал келген маалыматтар',
        noData: 'маалымат жок',
        titles: ['1 тизмеси', '2 тизмеси'],
        filterPlaceholder: 'Сураныч, издөө кирет',
        noCheckedFormat: 'бүтүндөй {total} сан',
        hasCheckedFormat: 'Тандалган {checked}/{total} сан'
      }
    }
  };
  module.exports = exports['default'];
});