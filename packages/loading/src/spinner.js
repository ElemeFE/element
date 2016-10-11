import { addClass } from 'wind-dom/src/class';

class Spinner {
  constructor() {
    let spinner = document.createElement('div');
    addClass(spinner, 'el-loading-spinner');
    [1, 2, 3].forEach(index => {
      let bubble = document.createElement('div');
      addClass(bubble, `el-loading-bubble bubble${ index }`);
      spinner.appendChild(bubble);
    });
    this.el = spinner;
  }
}

export default Spinner;
