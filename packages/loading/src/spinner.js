class Spinner {
  constructor() {
    let spinner = document.createElement('div');
    spinner.classList.add('el-loading-spinner');
    [1, 2, 3].forEach(index => {
      let bubble = document.createElement('div');
      bubble.classList.add('el-loading-bubble', `bubble${ index }`);
      spinner.appendChild(bubble);
    });
    this.el = spinner;
  }
}

export default Spinner;
