export default function debounce(callback, timeout = 100) {
  let timer;
  return function debounced() {
    clearTimeout(timer);
    timer = setTimeout(callback, timeout);
  };
}
