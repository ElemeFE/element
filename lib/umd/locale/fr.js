(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('element/locale/fr', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.fr = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = {
    el: {
      colorpicker: {
        confirm: 'OK',
        clear: 'Effacer'
      },
      datepicker: {
        now: 'Maintenant',
        today: 'Auj.',
        cancel: 'Annuler',
        clear: 'Effacer',
        confirm: 'OK',
        selectDate: 'Choisir date',
        selectTime: 'Choisir horaire',
        startDate: 'Date début',
        startTime: 'Horaire début',
        endDate: 'Date fin',
        endTime: 'Horaire fin',
        prevYear: 'Année précédente',
        nextYear: 'Année suivante',
        prevMonth: 'Mois précédent',
        nextMonth: 'Mois suivant',
        year: '', // In french, like in english, we don't say "Année" after the year number.
        month1: 'Janvier',
        month2: 'Février',
        month3: 'Mars',
        month4: 'Avril',
        month5: 'Mai',
        month6: 'Juin',
        month7: 'Juillet',
        month8: 'Août',
        month9: 'Septembre',
        month10: 'Octobre',
        month11: 'Novembre',
        month12: 'Décembre',
        // week: 'Semaine',
        weeks: {
          sun: 'Dim',
          mon: 'Lun',
          tue: 'Mar',
          wed: 'Mer',
          thu: 'Jeu',
          fri: 'Ven',
          sat: 'Sam'
        },
        months: {
          jan: 'Jan',
          feb: 'Fév',
          mar: 'Mar',
          apr: 'Avr',
          may: 'Mai',
          jun: 'Jun',
          jul: 'Jul',
          aug: 'Aoû',
          sep: 'Sep',
          oct: 'Oct',
          nov: 'Nov',
          dec: 'Déc'
        }
      },
      select: {
        loading: 'Chargement',
        noMatch: 'Aucune correspondance',
        noData: 'Aucune donnée',
        placeholder: 'Choisir'
      },
      cascader: {
        noMatch: 'Aucune correspondance',
        loading: 'Chargement',
        placeholder: 'Choisir'
      },
      pagination: {
        goto: 'Aller à',
        pagesize: '/page',
        total: 'Total {total}',
        pageClassifier: ''
      },
      messagebox: {
        confirm: 'Confirmer',
        cancel: 'Annuler',
        error: 'Erreur'
      },
      upload: {
        deleteTip: 'Cliquer sur supprimer pour retirer le fichier',
        delete: 'Supprimer',
        preview: 'Aperçu',
        continue: 'Continuer'
      },
      table: {
        emptyText: 'Aucune donnée',
        confirmFilter: 'Confirmer',
        resetFilter: 'Réinitialiser',
        clearFilter: 'Tous',
        sumText: 'Somme'
      },
      tree: {
        emptyText: 'Aucune donnée'
      },
      transfer: {
        noMatch: 'Aucune correspondance',
        noData: 'Aucune donnée',
        titles: ['Liste 1', 'Liste 2'],
        filterPlaceholder: 'Entrer un mot clef',
        noCheckedFormat: '{total} elements',
        hasCheckedFormat: '{checked}/{total} coché(s)'
      },
      image: {
        error: 'FAILED' // to be translated
      }
    }
  };
  module.exports = exports['default'];
});