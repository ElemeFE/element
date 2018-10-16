import { createTest, createVue, triggerEvent, destroyVM } from '../util';
import Pagination from 'packages/pagination';

describe('Pagination', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', () => {
    vm = createTest(Pagination);
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
  });

  it('set layout', () => {
    vm = createTest(Pagination, {
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

  it('layout: all in right, need clear float', () => {
    vm = createTest(Pagination, {
      layout: '->, prev, pager, next',
      total: 100
    }, true);
    const elm = vm.$el;
    let right_div = elm.querySelector('.el-pagination__rightwrapper');
    expect(elm.clientHeight > 0 && right_div.clientHeight > 0).to.equal(true);
    // elm 将来 padding 可能会变化, 所以使用 >= 来判定
    expect(elm.clientHeight >= right_div.clientHeight).to.equal(true);
  });

  it('custom slot', () => {
    vm = createVue({
      template: `
        <el-pagination
          layout="slot, prev, pager, next"
          :page-size="25"
          :total="100">
          <span class="slot-test">slot test</span>
        </el-pagination>
      `
    });
    expect(vm.$el.querySelector('.slot-test')).to.exist;
  });

  it('small', () => {
    vm = createTest(Pagination, {
      small: true
    });
    expect(vm.$el.classList.contains('el-pagination--small')).to.true;
  });

  it('pageSize', () => {
    vm = createTest(Pagination, {
      pageSize: 25,
      total: 100
    });

    expect(vm.$el.querySelectorAll('li.number')).to.length(4);
  });

  it('pageSize: NaN', () => {
    vm = createTest(Pagination, {
      pageSize: NaN,
      total: 100
    });

    const pagers = vm.$el.querySelectorAll('li.number');
    expect(pagers).to.length(7);
  });

  it('pageCount', () => {
    const vm = createTest(Pagination, {
      pageSize: 25,
      pageCount: 4
    });

    expect(vm.$el.querySelectorAll('li.number')).to.length(4);
  });

  it('pagerCount', () => {
    const vm = createTest(Pagination, {
      pageSize: 25,
      total: 1000,
      pagerCount: 21
    });

    expect(vm.$el.querySelectorAll('li.number')).to.length(21);
  });

  it('will work without total & page-count', (done) => {
    const vm = createTest(Pagination, {
      pageSize: 25,
      currentPage: 2
    });

    vm.$el.querySelector('.btn-prev').click();

    setTimeout(() => {
      vm.internalCurrentPage.should.be.equal(1);

      vm.$el.querySelector('.btn-prev').click();
      vm.internalCurrentPage.should.be.equal(1);

      done();
    }, 20);
  });

  it('currentPage', () => {
    vm = createTest(Pagination, {
      pageSize: 20,
      total: 200,
      currentPage: 3
    });

    expect(vm.$el.querySelector('li.number.active')).to.have.property('textContent').to.equal('3');
  });

  it('currentPage: NaN', () => {
    vm = createTest(Pagination, {
      pageSize: 20,
      total: 200,
      currentPage: NaN
    });

    expect(vm.$el.querySelector('li.number.active')).to.have.property('textContent').to.equal('1');
    expect(vm.$el.querySelectorAll('li.number')).to.length(7);
  });

  it('set currentPage & total', (done) => {
    vm = createVue({
      template: `
        <el-pagination
          @current-change="handleChange"
          :current-page="currentPage"
          :page-size="10"
          :total="100" />
      `,

      methods: {
        handleChange(val) {
          this.currentPage = val;
          this.page = val;
        },
        resetTotal() {
          this.total = 30;
          this.currentPage = 1;
        }
      },

      data() {
        return {
          currentPage: 10
        };
      }
    }, true);

    expect(vm.$el.querySelector('li.number.active')).to.have.property('textContent').to.equal('10');
    vm.resetTotal();
    setTimeout(() => {
      expect(vm.$el.querySelector('li.number.active')).to.have.property('textContent').to.equal('1');
      done();
    }, 50);
  });

  it('pageSizes', () => {
    vm = createTest(Pagination, {
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
    vm = createTest(Pagination, {
      pageSizes: [10, 15, 35, 50],
      pageSize: 24,
      total: 1000,
      layout: 'sizes, prev, pager, next'
    });

    expect(vm.$el.querySelector('.el-select-dropdown__item.selected')).to.property('textContent').include('10');
  });

  it('layout is empty', () => {
    vm = createTest(Pagination, {
      layout: ''
    });

    expect(vm.$el.textContent).to.empty;
  });

  it('jumper: change value', (done) => {
    vm = createVue({
      template: `
        <el-pagination
          @current-change="handleChange"
          :page-size="10"
          layout="pager, jumper"
          :total="100" />
      `,

      methods: {
        handleChange(val) {
          this.page = val;
        }
      },

      data() {
        return {
          page: 1,
          inputer: null
        };
      },

      mounted() {
        this.inputer = this.$children[0].$children[1].$children[0];
      }
    }, true);
    const input = vm.inputer;
    const changeValue = (value) => {
      input.$emit('input', value);
      input.setCurrentValue(value);
      input.$emit('change', value);
    };

    changeValue(1);
    setTimeout(() => {
      expect(input.value).to.equal(1);
      // 多次输入不在min-max区间内的数字
      changeValue(0);
      setTimeout(() => {
        expect(input.value).to.equal(1);
        changeValue(0);
        setTimeout(() => {
          expect(input.value).to.equal(1);
          changeValue(1000);
          setTimeout(() => {
            expect(input.value).to.equal(10);
            changeValue(1000);
            setTimeout(() => {
              expect(input.value).to.equal(10);
              done();
            }, 50);
          }, 50);
        }, 50);
      }, 50);
    }, 50);
  });

  it('event:current-change', (done) => {
    vm = createVue({
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
    setTimeout(() => {
      expect(vm.change).to.true;
      done();
    }, 50);
  });

  it('event:current-change after current page is manually updated', (done) => {
    vm = createVue({
      template: `
        <el-pagination
          :total="15"
          :current-page.sync="currentPage"
          @current-change="emitCount++" />
      `,

      data() {
        return {
          emitCount: 0,
          currentPage: 1
        };
      }
    });
    const next = vm.$el.querySelector('button.btn-next');
    next.click();
    setTimeout(() => {
      expect(vm.emitCount).to.equal(1);
      vm.currentPage = 1;
      setTimeout(() => {
        expect(vm.emitCount).to.equal(1);
        next.click();
        setTimeout(() => {
          expect(vm.emitCount).to.equal(2);
          done();
        }, 50);
      }, 50);
    }, 50);
  });

  it('event:size-change', done => {
    vm = createVue({
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
    }, true);

    expect(vm.trigger).to.false;

    setTimeout(_ => {
      vm.$el.querySelectorAll('li.el-select-dropdown__item')[1].click();
      setTimeout(_ => {
        expect(vm.trigger).to.true;
        done();
      }, 50);
    }, 50);
  });

  it('event: prev and next click', done => {
    vm = createVue({
      template: `
        <el-pagination
          :total="100"
          layout="sizes, prev, pager, next"
          @prev-click="trigger = true"
          @next-click="trigger = true"
          :pageSize="10" />
      `,

      data() {
        return { trigger: false };
      }
    }, true);
    const prev = vm.$el.querySelector('.btn-prev');
    const next = vm.$el.querySelector('.btn-next');
    prev.click();
    setTimeout(_ => {
      expect(vm.trigger).to.false;
      next.click();
      setTimeout(_ => {
        expect(vm.trigger).to.true;
        done();
      }, 50);
    }, 50);
  });

  it('pageSize > total', () => {
    vm = createVue({
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
        return { page: 1 };
      }
    });
    const input = vm.$el.querySelector('.el-pagination__jump input');

    input.value = 2;
    triggerEvent(input, 'change');
    expect(vm.page).to.equal(1);

    input.value = '我好帅';
    triggerEvent(input, 'change');
    expect(vm.page).to.equal(1);
  });

  describe('click pager', () => {
    it('click ul', () => {
      vm = createTest(Pagination, {
        total: 1000
      }, true);

      vm.$el.querySelector('.el-pager').click();
      expect(vm.internalCurrentPage).to.equal(1);
    });

    it('click li', () => {
      vm = createTest(Pagination, {
        total: 1000
      }, true);

      vm.$el.querySelectorAll('.el-pager li.number')[1].click();
      expect(vm.internalCurrentPage).to.equal(2);
    });

    it('click next icon-more', () => {
      vm = createTest(Pagination, {
        total: 1000
      }, true);

      vm.$el.querySelector('.el-pager .more').click();
      expect(vm.internalCurrentPage).to.equal(6);
    });

    it('click prev icon-more', done => {
      vm = createTest(Pagination, {
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
      vm = createTest(Pagination, {
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
