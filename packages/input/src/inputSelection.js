export function getSelection(input) {
  if ('selectionStart' in input) {
    return {
      start: input.selectionStart,
      end: input.selectionEnd
    };
  }

  return null;
}

export function setSelection(input, offsets) {
  const start = offsets.start;
  let end = offsets.end;
  if (end === undefined) {
    end = start;
  }

  if ('selectionStart' in input) {
    input.selectionStart = start;
    input.selectionEnd = Math.min(end, input.value.length);
  }
}

export function getSelectionInformation(input) {
  return {
    ele: input,
    selectionRange: getSelection(input)
  };
}

export function restoreSelection(selectionInformation) {
  const {ele, selectionRange} = selectionInformation || {};
  if (selectionRange) {
    setSelection(ele, selectionRange);
  }
}

