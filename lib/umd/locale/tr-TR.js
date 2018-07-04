(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/tr-TR', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.trTR = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Onayla',
        clear: 'Temizle'
      },
      datepicker: {
        now: 'Şimdi',
        today: 'Bugün',
        cancel: 'İptal',
        clear: 'Temizle',
        confirm: 'Onayla',
        selectDate: 'Tarih seç',
        selectTime: 'Saat seç',
        startDate: 'Başlangıç Tarihi',
        startTime: 'Başlangıç Saati',
        endDate: 'Bitiş Tarihi',
        endTime: 'Bitiş Saati',
        prevYear: 'Önceki Yıl',
        nextYear: 'Sonraki Yıl',
        prevMonth: 'Önceki Ay',
        nextMonth: 'Sonraki Ay',
        year: '',
        month1: 'Ocak',
        month2: 'Şubat',
        month3: 'Mart',
        month4: 'Nisan',
        month5: 'Mayıs',
        month6: 'Haziran',
        month7: 'Temmuz',
        month8: 'Ağustos',
        month9: 'Eylül',
        month10: 'Ekim',
        month11: 'Kasım',
        month12: 'Aralık',
        // week: 'week',
        weeks: {
          sun: 'Paz',
          mon: 'Pzt',
          tue: 'Sal',
          wed: 'Çar',
          thu: 'Per',
          fri: 'Cum',
          sat: 'Cmt'
        },
        months: {
          jan: 'Oca',
          feb: 'Şub',
          mar: 'Mar',
          apr: 'Nis',
          may: 'May',
          jun: 'Haz',
          jul: 'Tem',
          aug: 'Ağu',
          sep: 'Eyl',
          oct: 'Eki',
          nov: 'Kas',
          dec: 'Ara'
        }
      },
      select: {
        loading: 'Yükleniyor',
        noMatch: 'Eşleşen veri bulunamadı',
        noData: 'Veri yok',
        placeholder: 'Seç'
      },
      cascader: {
        noMatch: 'Eşleşen veri bulunamadı',
        loading: 'Yükleniyor',
        placeholder: 'Seç'
      },
      pagination: {
        goto: 'Git',
        pagesize: '/sayfa',
        total: 'Toplam {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Mesaj',
        confirm: 'Onayla',
        cancel: 'İptal',
        error: 'İllegal giriş'
      },
      upload: {
        deleteTip: 'kaldırmak için delete tuşuna bas',
        delete: 'Sil',
        preview: 'Görüntüle',
        continue: 'Devam'
      },
      table: {
        emptyText: 'Veri yok',
        confirmFilter: 'Onayla',
        resetFilter: 'Sıfırla',
        clearFilter: 'Hepsi',
        sumText: 'Sum'
      },
      tree: {
        emptyText: 'Veri yok'
      },
      transfer: {
        noMatch: 'Eşleşen veri bulunamadı',
        noData: 'Veri yok',
        titles: ['Liste 1', 'Liste 2'],
        filterPlaceholder: 'Anahtar kelimeleri gir',
        noCheckedFormat: '{total} adet',
        hasCheckedFormat: '{checked}/{total} seçildi'
      }
    }
  };
  module.exports = exports['default'];
});