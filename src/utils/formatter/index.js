const formatThousand = (num) => {
  if (num === undefined || num === null) return '';
  let source = String(num).split('.');
  source[0] = source[0].replace(new RegExp('(\\d)(?=(\\d{3})+$)', 'ig'), '$1,');
  let _tempResult = '';
  _tempResult = source.join('.');
  if (_tempResult !== '' && _tempResult.indexOf('.') < 0) {
    _tempResult = _tempResult;
  }
  return _tempResult;
};

export {
  formatThousand
};
