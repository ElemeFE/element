import { createTest, createVue, triggerEvent } from '../util';
import Pagination from 'packages/pagination';

describe('Pagination', () => {
  it('create', () => {
    const vm = createTest(Pagination);
    const elm = vm.$el;
    // prev
    expect(elm.querySelector('button.btn-prev')).to.exist;
    // pager
    expect(elm.querySelector('ul.el-pager')).to.exist;
    // next
    expect(elm.querySelector('button.btn-next')).to.exist;
    // jumper
    expect(elm.querySelector('.el-pagination__jump')).to.exist;
    // ->
    expect(elm.querySelector('.el-pagination__rightwrapper')).to.exist;
    // total
    expect(elm.querySelector('.el-pagination__total')).to.exist;
  });

  it('set layout', () => {
    const vm = createTest(Pagination, {
      layout: 'prev, pager, next'
    });
    const elm = vm.$el;
    // prev
    expect(elm.querySelector('button.btn-prev')).to.exist;
    // pager
    expect(elm.querySelector('ul.el-pager')).to.exist;
    // next
    expect(elm.querySelector('button.btn-next')).to.exist;
    // not found jumper
    expect(elm.querySelector('.el-pagination__jump')).to.not.exist;
    // not found ->
    expect(elm.querySelector('.el-pagination__rightwrapper')).to.not.exist;
    // not found total
    expect(elm.querySelector('.el-pagination__total')).to.not.exist;
  });

  it('small', () => {
    const vm = createTest(Pagination, {
      small: true
    });
    expect(vm.$el.classList.contains('el-pagination--small')).to.true;
  });

  it('pageSize', () => {
    const vm = createTest(Pagination, {
      pageSize: 25,
      total: 100
    });

    expect(vm.$el.querySelectorAll('li.number')).to.length(4);
  });

  it('currentPage', () => {
    const vm = createTest(Pagination, {
      pageSize: 20,
      total: 200,
      currentPage: 3
    });

    expect(vm.$el.querySelector('li.number.active')).to.have.property('textContent').to.equal('3');
  });

  it('pageSizes', () => {
    const vm = createTest(Pagination, {
      pageSizes: [10, 15, 35, 50],
      pageSize: 35,
      total: 1000,
      layout: 'sizes, prev, pager, next'
    });

    expect(vm.$el.querySelector('.el-select-dropdown__item.selected')).to.property('textContent').include('35');
    expect([].slice.call(vm.$el.querySelectorAll('.el-select-dropdown__item'))
      .map(node => parseInt(node.textContent, 10)))
      .to.deep.equal([10, 15, 35, 50]);
  });

  it('pageSizes:not found pageSize', () => {
    const vm = createTest(Pagination, {
      pageSizes: [10, 15, 35, 50],
      pageSize: 24,
      total: 1000,
      layout: 'sizes, prev, pager, next'
    });

    expect(vm.$el.querySelector('.el-select-dropdown__item.selected')).to.property('textContent').include('10');
  });

  it('layout is empty', () => {
    const vm = createTest(Pagination, {
      layout: ''
    });

    expect(vm.$el.textContent).to.empty;
  });

  it('jumper: change value', () => {
    const vm = createVue({
      template: `
        <el-pagination
          @current-change="handleChange"
          :page-size="10"
          :total="100" />
      `,

      methods: {
        handleChange(val) {
          this.page = val;
        }
      },

      data() {
        return { page: 0 };
      }
    }, true);
    const input = vm.$el.querySelector('.el-pagination__jump input');

    input.focus();
    input.value = -1;
    triggerEvent(input, 'change');
    expect(vm.page).to.equal(1);

    input.value = 10000;
    triggerEvent(input, 'change');
    expect(vm.page).to.equal(10);

    input.value = '我好帅';
    triggerEvent(input, 'change');
    expect(vm.page).to.equal(1);
  });

  it('event:current-change', () => {
    const vm = createVue({
      template: `
        <el-pagination
          :total="1000"
          @current-change="change = true" />
      `,

      data() {
        return { change: false };
      }
    });
    const next = vm.$el.querySelector('button.btn-next');
    const prev = vm.$el.querySelector('button.btn-prev');

    expect(vm.change).to.false;
    // click 9
    let count = 9;
    while (--count) {
      next.click();
    }

    prev.click();
    expect(vm.change).to.true;
  });

  it('event:size-change', done => {
    const vm = createVue({
      template: `
        <el-pagination
          :total="100"
          layout="sizes, prev, pager, next"
          @size-change="trigger = true"
          :pageSize="10" />
      `,

      data() {
        return { trigger: false };
      }
    });

    expect(vm.trigger).to.false;
    vm.$el.querySelectorAll('li.el-select-dropdown__item')[1].click();
    setTimeout(_ => {
      expect(vm.trigger).to.true;
      done();
    }, 50);
  });

  it('pageSize > total', () => {
    const vm = createVue({
      template: `
        <el-pagination
          @current-change="handleChange"
          :page-size="1000"
          :total="0" />
      `,

      methods: {
        handleChange(val) {
          this.page = val;
        }
      },

      data() {
        return { page: 0 };
      }
    });
    const input = vm.$el.querySelector('.el-pagination__jump input');

    input.value = 1;
    triggerEvent(input, 'change');
    expect(vm.page).to.equal(0);

    input.value = '我好帅';
    triggerEvent(input, 'change');
    expect(vm.page).to.equal(0);
  });

  describe('click pager', () => {
    it('click ul', () => {
      const vm = createTest(Pagination, {
        total: 1000
      }, true);

      vm.$el.querySelector('.el-pager').click();
      expect(vm.internalCurrentPage).to.equal(1);
    });

    it('click li', () => {
      const vm = createTest(Pagination, {
        total: 1000
      }, true);

      vm.$el.querySelectorAll('.el-pager li.number')[1].click();
      expect(vm.internalCurrentPage).to.equal(2);
    });

    it('click next icon-more', () => {
      const vm = createTest(Pagination, {
        total: 1000
      }, true);

      vm.$el.querySelector('.el-pager .more').click();
      expect(vm.internalCurrentPage).to.equal(6);
    });

    it('click prev icon-more', done => {
      const vm = createTest(Pagination, {
        total: 1000
      }, true);

      vm.$el.querySelector('.btn-quicknext.more').click();
      setTimeout(_ => {
        expect(vm.$el.querySelector('.btn-quickprev.more')).to.exist;
        vm.$el.querySelector('.btn-quickprev.more').click();
        expect(vm.internalCurrentPage).to.equal(1);
        done();
      }, 50);
    });

    it('click last page', done => {
      const vm = createTest(Pagination, {
        total: 1000
      }, true);
      const nodes = vm.$el.querySelectorAll('li.number');

      nodes[nodes.length - 1].click();
      setTimeout(_ => {
        expect(vm.$el.querySelector('.btn-quickprev.more')).to.exist;
        expect(vm.$el.querySelector('.btn-quicknext.more')).to.not.exist;
        done();
      }, 50);
    });
  });
});
