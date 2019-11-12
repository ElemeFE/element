module.exports = {
  dataSource: 'prs',
  prefix: '',
  ignoreLabels: ['duplicate', 'help wanted', 'invalid', 'question', 'wontfix'],
  ignoreIssuesWith: [
    'duplicate',
    'help wanted',
    'invalid',
    'question',
    'wontfix'
  ],
  onlyMilestones: false,
  changelogFilename: 'CHANGELOG.md',
  template: {
    issue: '- {{name}} [{{text}}]({{url}})',
    group: '\n### {{heading}}\n'
  },
  // https://github.com/nuxt/nuxt.js/releases
  // https://gitmoji.carloscuesta.me
  groupBy: {
    '✨ New Features:': ['enhancement'],
    '🐛 Bug Fixes:': ['bug'],
    '📖 Documentation:': ['documentation'],
    '💅 Refactors:': ['refactor'],
    '♻️ Tests:': ['test'],
    '🚀 Performance:': ['performance'],
    '⚓ Dependency upgrades:': ['dependencies'],
    '🏡 Chore:': ['chore'],
    '💄 Style:': ['style'],
    '🎩 Hack': ['hack']
  }
}
