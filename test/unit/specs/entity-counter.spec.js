import {
  createVue,
  destroyVM,
  triggerEvent,
  triggerClick
} from '../util';

describe('EntityCounter', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('should create', () => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="Без детей (до 12 лет)"
            :declination="['взрослый', 'взрослых', 'взрослых']"></tm-entity-counter>
      `
    }, true);
    let $el = vm.$el;
    let buttons = $el.querySelectorAll('.tm-entity-counter__button');
    let label = $el.querySelectorAll('.tm-entity-counter__label');
    expect(buttons.length).to.be.equal(2);
    expect(label.length).to.be.equal(1);
  });

  it('default label should be visible', () => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="testPlaceholder"
            :min="0"
            :value="0"
            :declination="['взрослый', 'взрослых', 'взрослых']"></tm-entity-counter>
      `
    }, true);
    let $el = vm.$el;
    let label = $el.querySelector('.tm-entity-counter__label');
    expect(label.textContent.includes('testPlaceholder')).to.be.true;
    expect($el.classList.contains('tm-entity-counter--empty')).to.be.true;
  });

  it('declination for 1 works correctly', () => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="testPlaceholder"
            :value="1"
            :declination="['test1', 'test2', 'test3']"></tm-entity-counter>
      `
    }, true);
    let $el = vm.$el;
    let label = $el.querySelector('.tm-entity-counter__label');
    expect(label.textContent.includes('1 test1')).to.be.true;
  });

  it('declination for 2-4 works correctly', () => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="testPlaceholder"
            :value="4"
            :declination="['test1', 'test2', 'test3']"></tm-entity-counter>
      `
    }, true);
    let $el = vm.$el;
    let label = $el.querySelector('.tm-entity-counter__label');
    expect(label.textContent.includes('4 test2')).to.be.true;
  });

  it('declination for 5-20 works correctly', () => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="testPlaceholder"
            :value="20"
            :declination="['test1', 'test2', 'test3']"></tm-entity-counter>
      `
    }, true);
    let $el = vm.$el;
    let label = $el.querySelector('.tm-entity-counter__label');
    expect(label.textContent.includes('20 test3')).to.be.true;
  });

  it('declination for 21+ works correctly', () => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="testPlaceholder"
            :value="21"
            :declination="['test1', 'test2', 'test3']"></tm-entity-counter>
      `
    }, true);
    let $el = vm.$el;
    let label = $el.querySelector('.tm-entity-counter__label');
    expect(label.textContent.includes('21 test1')).to.be.true;
  });

  it('navigation next works correctly', done => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="testPlaceholder"
            :value="1"
            :declination="['test1', 'test2', 'test3']"></tm-entity-counter>
      `
    }, true);
    let $el = vm.$el;
    let next = $el.querySelector('.tm-entity-counter__button--right');
    let label = $el.querySelector('.tm-entity-counter__label');

    next.click();

    setTimeout(() => {
      expect(label.textContent.includes('2 test2')).to.be.true;
      done();
    }, 400);
  });

  it('navigation prev works correctly', done => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="testPlaceholder"
            :value="2"
            :declination="['test1', 'test2', 'test3']"></tm-entity-counter>
      `
    }, true);
    let $el = vm.$el;
    let prev = $el.querySelector('.tm-entity-counter__button--left');
    let label = $el.querySelector('.tm-entity-counter__label');

    prev.click();

    setTimeout(() => {
      expect(label.textContent.includes('1 test1')).to.be.true;
      done();
    }, 400);
  });

});
