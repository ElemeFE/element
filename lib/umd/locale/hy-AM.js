(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/hy-AM', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.hyAM = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Լաւ',
        clear: 'Մաքրել'
      },
      datepicker: {
        now: 'Հիմա',
        today: 'Այսօր',
        cancel: 'Չեղարկել',
        clear: 'Մաքրել',
        confirm: 'Լաւ',
        selectDate: 'Ընտրեք ամսաթիւը',
        selectTime: 'Ընտրեք ժամանակը',
        startDate: 'Սկզբ. ամսաթիւը',
        startTime: 'Սկզբ. ժամանակը',
        endDate: 'Վերջ. ամսաթիվը',
        endTime: 'Վերջ. ժամանակը',
        prevYear: 'Նախորդ տարի',
        nextYear: 'Յաջորդ տարի',
        prevMonth: 'Նախորդ ամիս',
        nextMonth: 'Յաջորդ ամիս',
        year: 'Տարի',
        month1: 'Յունուար',
        month2: 'Փետրուար',
        month3: 'Մարտ',
        month4: 'Ապրիլ',
        month5: 'Մայիս',
        month6: 'Յունիս',
        month7: 'Յուլիս',
        month8: 'Օգոստոս',
        month9: 'Սեպտեմբեր',
        month10: 'Յոկտեմբեր',
        month11: 'Նոյեմբեր',
        month12: 'Դեկտեմբեր',
        week: 'Շաբաթ',
        weeks: {
          sun: 'Կիր',
          mon: 'Երկ',
          tue: 'Եր',
          wed: 'Չոր',
          thu: 'Հինգ',
          fri: 'Ուրբ',
          sat: 'Շաբ'
        },
        months: {
          jan: 'Յունվ',
          feb: 'Փետ',
          mar: 'Մար',
          apr: 'Ապր',
          may: 'Մայ',
          jun: 'Յուն',
          jul: 'Յուլ',
          aug: 'Օգ',
          sep: 'Սեպտ',
          oct: 'Յոկ',
          nov: 'Նոյ',
          dec: 'Դեկ'
        }
      },
      select: {
        loading: 'Բեռնում',
        noMatch: 'Համապատասխան տուեալներ չկան',
        noData: 'Տվյալներ չկան',
        placeholder: 'Ընտրել'
      },
      cascader: {
        noMatch: 'Համապատասխան տուեալներ չկան',
        loading: 'Բեռնում',
        placeholder: 'Ընտրել',
        noData: 'Տվյալներ չկան'
      },
      pagination: {
        goto: 'Անցնել',
        pagesize: ' էջում',
        total: 'Ընդամենը {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Հաղորդագրութիւն',
        confirm: 'Լաւ',
        cancel: 'Չեղարկել',
        error: 'Անվաւեր տուեալների մուտք'
      },
      upload: {
        deleteTip: 'Սեղմեք [Ջնջել] ջնջելու համար',
        delete: 'Ջնջել',
        preview: 'Նախադիտում',
        continue: 'Շարունակել'
      },
      table: {
        emptyText: 'Տուեալներ չկան',
        confirmFilter: 'Յաստատել',
        resetFilter: 'Վերագործարկել',
        clearFilter: 'Բոլորը',
        sumText: 'Գումարը'
      },
      tree: {
        emptyText: 'Տուեալներ չկան'
      },
      transfer: {
        noMatch: 'Համապատասխան տուեալներ չկան',
        noData: 'Տուեալներ չկան',
        titles: ['Ցուցակ 1', 'Ցուցակ 2'],
        filterPlaceholder: 'Մուտքագրեք բանալի բառ',
        noCheckedFormat: '{total} միաւոր',
        hasCheckedFormat: '{checked}/{total} ընտրուած է'
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
      },
      empty: {
        description: 'Տուեալներ չկան'
      }
    }
  };
  module.exports = exports['default'];
});