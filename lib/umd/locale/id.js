(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/id', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.id = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'Pilih',
        clear: 'Kosongkan'
      },
      datepicker: {
        now: 'Sekarang',
        today: 'Hari ini',
        cancel: 'Batal',
        clear: 'Kosongkan',
        confirm: 'Ya',
        selectDate: 'Pilih tanggal',
        selectTime: 'Pilih waktu',
        startDate: 'Tanggal Mulai',
        startTime: 'Waktu Mulai',
        endDate: 'Tanggal Selesai',
        endTime: 'Waktu Selesai',
        prevYear: 'Tahun Sebelumnya',
        nextYear: 'Tahun Selanjutnya',
        prevMonth: 'Bulan Sebelumnya',
        nextMonth: 'Bulan Selanjutnya',
        year: 'Tahun',
        month1: 'Januari',
        month2: 'Februari',
        month3: 'Maret',
        month4: 'April',
        month5: 'Mei',
        month6: 'Juni',
        month7: 'Juli',
        month8: 'Agustus',
        month9: 'September',
        month10: 'Oktober',
        month11: 'November',
        month12: 'Desember',
        // week: 'minggu',
        weeks: {
          sun: 'Min',
          mon: 'Sen',
          tue: 'Sel',
          wed: 'Rab',
          thu: 'Kam',
          fri: 'Jum',
          sat: 'Sab'
        },
        months: {
          jan: 'Jan',
          feb: 'Feb',
          mar: 'Mar',
          apr: 'Apr',
          may: 'Mei',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Agu',
          sep: 'Sep',
          oct: 'Okt',
          nov: 'Nov',
          dec: 'Des'
        }
      },
      select: {
        loading: 'Memuat',
        noMatch: 'Tidak ada data yg cocok',
        noData: 'Tidak ada data',
        placeholder: 'Pilih'
      },
      cascader: {
        noMatch: 'Tidak ada data yg cocok',
        loading: 'Memuat',
        placeholder: 'Pilih',
        noData: 'Tidak ada data'
      },
      pagination: {
        goto: 'Pergi ke',
        pagesize: '/laman',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        title: 'Pesan',
        confirm: 'Ya',
        cancel: 'Batal',
        error: 'Masukan ilegal'
      },
      upload: {
        deleteTip: 'Tekan hapus untuk melanjutkan',
        delete: 'Hapus',
        preview: 'Pratinjau',
        continue: 'Lanjutkan'
      },
      table: {
        emptyText: 'Tidak ada data',
        confirmFilter: 'Konfirmasi',
        resetFilter: 'Atur ulang',
        clearFilter: 'Semua',
        sumText: 'Jml'
      },
      tree: {
        emptyText: 'Tidak ada data'
      },
      transfer: {
        noMatch: 'Tidak ada data yg cocok',
        noData: 'Tidak ada data',
        titles: ['Senarai 1', 'Senarai 2'],
        filterPlaceholder: 'Masukan kata kunci',
        noCheckedFormat: '{total} butir',
        hasCheckedFormat: '{checked}/{total} terpilih'
      },
      image: {
        error: 'GAGAL'
      },
      pageHeader: {
        title: 'Kembali'
      },
      popconfirm: {
        confirmButtonText: 'Ya',
        cancelButtonText: 'Tidak'
      },
      empty: {
        description: 'Tidak ada data'
      }
    }
  };
  module.exports = exports['default'];
});