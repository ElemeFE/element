let preActiveElement;
window.addEventListener('blur', function() {
  preActiveElement = document.activeElement;
});

export function setActiveElement(el) {
  preActiveElement = el;
}

export function getActiveElement() {
  return preActiveElement;
}
