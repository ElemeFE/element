import { createVue, destroyVM } from '../util';

describe('EntityCounter', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('should create', done => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="Без детей (до 12 лет)"
            :declination="['взрослый', 'взрослых', 'взрослых']"></tm-entity-counter>
      `
    }, true);
    let component = vm.$refs.entityCounter;
    let $el = component.$el;
    setTimeout(() => {
      let cont = $el.querySelectorAll('.tm-entity-counter');
      let buttons = $el.querySelectorAll('.tm-entity-counter__button');
      let label = $el.querySelectorAll('.tm-entity-counter__label');
      expect(entityCounter).to.be.true;
      expect(cont.length === 1).to.be.true;
      expect(buttons.length === 2).to.be.true;
      expect(label.length === 1).to.be.true;
      done();
    }, 100);
  });

  it('default label should be visible', done => {
    vm = createVue({
      template: `
        <tm-entity-counter placeholder="testPlaceholder"
            min="0"
            value="0"
            :declination="['взрослый', 'взрослых', 'взрослых']"></tm-entity-counter>
      `
    }, true);
    let component = vm.$refs.entityCounter;
    let $el = component.$el;
    setTimeout(() => {
      let label = $el.querySelectorAll('.tm-entity-counter__label');
      expect(label.textContent === 'testPlaceholder').to.be.true;
      done();
    }, 100);
  });

});
