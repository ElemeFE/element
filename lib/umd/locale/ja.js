(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/ja', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ja = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'クリア'
      },
      datepicker: {
        now: '現在',
        today: '今日',
        cancel: 'キャンセル',
        clear: 'クリア',
        confirm: 'OK',
        selectDate: '日付を選択',
        selectTime: '時間を選択',
        startDate: '開始日',
        startTime: '開始時間',
        endDate: '終了日',
        endTime: '終了時間',
        prevYear: '前年',
        nextYear: '翌年',
        prevMonth: '前月',
        nextMonth: '翌月',
        year: '年',
        month1: '1月',
        month2: '2月',
        month3: '3月',
        month4: '4月',
        month5: '5月',
        month6: '6月',
        month7: '7月',
        month8: '8月',
        month9: '9月',
        month10: '10月',
        month11: '11月',
        month12: '12月',
        // week: '週次',
        weeks: {
          sun: '日',
          mon: '月',
          tue: '火',
          wed: '水',
          thu: '木',
          fri: '金',
          sat: '土'
        },
        months: {
          jan: '1月',
          feb: '2月',
          mar: '3月',
          apr: '4月',
          may: '5月',
          jun: '6月',
          jul: '7月',
          aug: '8月',
          sep: '9月',
          oct: '10月',
          nov: '11月',
          dec: '12月'
        }
      },
      select: {
        loading: 'ロード中',
        noMatch: 'データなし',
        noData: 'データなし',
        placeholder: '選択してください'
      },
      cascader: {
        noMatch: 'データなし',
        loading: 'ロード中',
        placeholder: '選択してください',
        noData: 'データなし'
      },
      pagination: {
        goto: '',
        pagesize: '件/ページ',
        total: '総計 {total} 件',
        pageClassifier: 'ページ目へ'
      },
      messagebox: {
        title: 'メッセージ',
        confirm: 'OK',
        cancel: 'キャンセル',
        error: '正しくない入力'
      },
      upload: {
        deleteTip: 'Delキーを押して削除する',
        delete: '削除する',
        preview: 'プレビュー',
        continue: '続行する'
      },
      table: {
        emptyText: 'データなし',
        confirmFilter: '確認',
        resetFilter: '初期化',
        clearFilter: 'すべて',
        sumText: '合計'
      },
      tree: {
        emptyText: 'データなし'
      },
      transfer: {
        noMatch: 'データなし',
        noData: 'データなし',
        titles: ['リスト 1', 'リスト 2'],
        filterPlaceholder: 'キーワードを入力',
        noCheckedFormat: '総計 {total} 件',
        hasCheckedFormat: '{checked}/{total} を選択した'
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
        description: 'データなし'
      }
    }
  };
  module.exports = exports['default'];
});