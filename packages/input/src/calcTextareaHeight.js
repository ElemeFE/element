let hiddenTextarea;
let hiddenInput;

const HIDDEN_STYLE = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`;

const CONTEXT_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing'
];

function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);

  const boxSizing = style.getPropertyValue('box-sizing');

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-bottom')) +
    parseFloat(style.getPropertyValue('padding-top'))
  );

  const borderSize = (
    parseFloat(style.getPropertyValue('border-bottom-width')) +
    parseFloat(style.getPropertyValue('border-top-width'))
  );

  const contextStyle = CONTEXT_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';');

  return { contextStyle, paddingSize, borderSize, boxSizing };
};

function calcTextareaHeight(targetElement, minRows = 1, maxRows = null) {

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  let {
    paddingSize,
    borderSize,
    boxSizing,
    contextStyle
  } = calculateNodeStyling(targetElement);

  hiddenTextarea.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  let height = hiddenTextarea.scrollHeight;
  const result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  let singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${ minHeight }px`;
  }
  if (maxRows !== null) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${ height }px`;
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
};

function newCalculateNodeStyling(targetElement) {

  const style = window.getComputedStyle(targetElement);

  const boxSizing = style.getPropertyValue('box-sizing');

  const paddingSize = (
    parseFloat(style.getPropertyValue('padding-left')) +
    parseFloat(style.getPropertyValue('padding-right'))
  );

  const borderSize = (
    parseFloat(style.getPropertyValue('border-left-width')) +
    parseFloat(style.getPropertyValue('border-right-width'))
  );

  const contextStyle = CONTEXT_STYLE
    .map(name => `${name}:${style.getPropertyValue(name)}`)
    .join(';');

  return { contextStyle, paddingSize, borderSize, boxSizing };
};

function calcInputWidth(targetElement, minWidth) {
  if (!hiddenInput) {
    hiddenInput = document.createElement('input');
    document.body.appendChild(hiddenInput);
  }

  let {
    paddingSize,
    borderSize,
    boxSizing,
    contextStyle
  } = newCalculateNodeStyling(targetElement);

  hiddenInput.setAttribute('style', `${contextStyle};${HIDDEN_STYLE}`);
  hiddenInput.value = targetElement.value || targetElement.placeholder || '';

  let width = hiddenInput.width;
  if (width < minWidth) {

    width = minWidth;
  }

  if (boxSizing === 'border-box') {
    width = width + borderSize;
  } else if (boxSizing === 'content-box') {
    width = width - paddingSize;
  }

  hiddenInput.value = '';
  hiddenInput.parentNode && hiddenTextarea.parentNode.removeChild(hiddenInput);
  hiddenInput = null;
  return `${ width }px`;
};

export default {

  calcTextareaHeight: calcTextareaHeight,
  calcInputWidth: calcInputWidth
};

