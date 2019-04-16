import { createVue, destroyVM, waitImmediate } from '../util';

describe('Calendar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', async() => {
    vm = createVue({
      template: `
      <el-calendar v-model="value"></el-calendar>
      `,
      data() {
        return {
          value: new Date('2019-04-01')
        };
      }
    }, true);
    const titleEl = vm.$el.querySelector('.el-calendar__title');
    expect(/2019.*4/.test(titleEl.innerText)).to.be.true;
    expect(vm.$el.querySelectorAll('thead th').length).to.equal(7);
    const rows = vm.$el.querySelectorAll('.el-calendar-table__row');
    expect(rows.length).to.equal(6);
    rows[5].firstElementChild.click();

    await waitImmediate();

    expect(/2019.*5/.test(titleEl.innerText)).to.be.true;
    const value = vm.value;
    expect(value.getFullYear()).to.be.equal(2019);
    expect(value.getMonth()).to.be.equal(4);
    expect(vm.$el.querySelector('.is-selected span').innerText).to.be.equal('6');
  });

  it('range', () => {
    vm = createVue({
      template: `
      <el-calendar :range="['2019-03-04', '2019-03-24']"></el-calendar>
      `
    }, true);
    const titleEl = vm.$el.querySelector('.el-calendar__title');
    expect(/2019.*3/.test(titleEl.innerText)).to.be.true;
    const rows = vm.$el.querySelectorAll('.el-calendar-table__row');
    expect(rows.length).to.equal(3);
    expect(vm.$el.querySelector('.el-calendar__button-group')).to.be.a('null');
  });

  it('range tow monthes', async() => {
    vm = createVue({
      template: `
      <el-calendar :range="['2019-04-15', '2019-05-19']"></el-calendar>
      `
    }, true);
    const titleEl = vm.$el.querySelector('.el-calendar__title');
    expect(/2019.*4/.test(titleEl.innerText)).to.be.true;
    const dateTables = vm.$el.querySelectorAll('.el-calendar-table.is-range');
    expect(dateTables.length).to.be.equal(2);
    const rows = vm.$el.querySelectorAll('.el-calendar-table__row');
    expect(rows.length).to.equal(5);
    const cell = rows[rows.length - 1].firstElementChild;
    cell.click();

    await waitImmediate();

    expect(/2019.*5/.test(titleEl.innerText)).to.be.true;
    expect(cell.classList.contains('is-selected')).to.be.true;
  });
});

