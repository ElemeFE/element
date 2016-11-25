import { createVue, triggerEvent, destroyVM } from '../util';

const DELAY = 10;
const testDataArr = [];
const toArray = function(obj) {
  return [].slice.call(obj);
};

const getTestData = function() {
  return [
    { name: 'Toy Story', release: '1995-11-22', director: 'John Lasseter', runtime: 80 },
    { name: 'A Bug\'s Life', release: '1998-11-25', director: 'John Lasseter', runtime: 95 },
    { name: 'Toy Story 2', release: '1999-11-24', director: 'John Lasseter', runtime: 92 },
    { name: 'Monsters, Inc.', release: '2001-11-2', director: 'Peter Docter', runtime: 92 },
    { name: 'Finding Nemo', release: '2003-5-30', director: 'Andrew Stanton', runtime: 100 }
  ];
};

getTestData().forEach(cur => {
  Object.keys(cur).forEach(prop => {
    testDataArr.push(cur[prop].toString());
  });
});

describe('Table', () => {
  describe('rendering data is correct', () => {
    const vm = createVue({
      template: `
        <el-table :data="testData">
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" />
        </el-table>
      `,

      created() {
        this.testData = getTestData();
      }
    });

    it('head', done => {
      setTimeout(_ => {
        const ths = toArray(vm.$el.querySelectorAll('thead th'));

        expect(ths.map(node => node.textContent).filter(o => o))
        .to.eql(['片名', '发行日期', '导演', '时长（分）']);
        done();
      }, DELAY);
    });

    it('row length', () => {
      expect(vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')).to.length(getTestData().length);
    });

    it('row data', () => {
      const cells = toArray(vm.$el.querySelectorAll('td .cell'))
        .map(node => node.textContent);

      expect(cells).to.eql(testDataArr);
      destroyVM(vm);
    });
  });

  describe('attributes', () => {
    const createTable = function(props, opts) {
      return createVue(Object.assign({
        template: `
          <el-table :data="testData" ${props}>
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column prop="director" label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,

        created() {
          this.testData = getTestData();
        }
      }, opts));
    };

    it('height', done => {
      const vm = createTable('height="134"');
      setTimeout(_ => {
        expect(vm.$el.style.height).to.equal('134px');
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('stripe', done => {
      const vm = createTable('stripe');
      setTimeout(_ => {
        expect(vm.$el.classList.contains('el-table--striped')).to.true;
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('border', done => {
      const vm = createTable('border');
      setTimeout(_ => {
        expect(vm.$el.classList.contains('el-table--border')).to.true;
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('fit', done => {
      const vm = createTable(':fit="false"');
      setTimeout(_ => {
        expect(vm.$el.classList.contains('el-table--fit')).to.false;
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('show-header', done => {
      const vm = createTable(':show-header="false"');
      setTimeout(_ => {
        expect(vm.$el.querySelectorAll('.el-table__header-wrapper').length).to.equal(0);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('tableRowClassName', done => {
      const vm = createTable(':row-class-name="tableRowClassName"', {
        methods: {
          tableRowClassName(row, index) {
            if (index === 1) {
              return 'info-row';
            } else if (index === 3) {
              return 'positive-row';
            }

            return '';
          }
        }
      });

      setTimeout(_ => {
        expect(vm.$el.querySelectorAll('.info-row')).to.length(1);
        expect(vm.$el.querySelectorAll('.positive-row')).to.length(1);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('tableRowStyle[Object]', done => {
      const vm = createTable(':row-style="{ height: \'60px\' }"', {});

      setTimeout(_ => {
        expect(vm.$el.querySelector('.el-table__body tr').style.height).to.equal('60px');
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('tableRowStyle[Function]', done => {
      const vm = createTable(':row-style="tableRowStyle"', {
        methods: {
          tableRowStyle(row, index) {
            if (index === 1) {
              return { height: '60px' };
            }

            return null;
          }
        }
      });

      setTimeout(_ => {
        expect(vm.$el.querySelector('.el-table__body tr:nth-child(1)').style.height).to.equal('');
        expect(vm.$el.querySelector('.el-table__body tr:nth-child(2)').style.height).to.equal('60px');
        destroyVM(vm);
        done();
      }, DELAY);
    });
  });

  describe('filter', () => {
    let vm;

    beforeEach(done => {
      vm = createVue({
        template: `
          <el-table ref="table" :data="testData">
            <el-table-column prop="name" label="片名" />
            <el-table-column prop="release" label="发行日期" />
            <el-table-column
              prop="director"
              :filters="[
                { text: 'John Lasseter', value: 'John Lasseter' },
                { text: 'Peter Docter', value: 'Peter Docter' },
                { text: 'Andrew Stanton', value: 'Andrew Stanton' }
              ]"
              :filter-method="filterMethod"
              label="导演" />
            <el-table-column prop="runtime" label="时长（分）" />
          </el-table>
        `,

        created() {
          this.testData = getTestData();
        },

        methods: {
          filterMethod(value, row) {
            return value === row.director;
          }
        }
      }, true);

      setTimeout(done, DELAY);
    });

    afterEach(() => destroyVM(vm));

    it('render', () => {
      expect(vm.$el.querySelector('.el-table__column-filter-trigger')).to.exist;
    });

    it('click dropdown', done => {
      const btn = vm.$el.querySelector('.el-table__column-filter-trigger');
      triggerEvent(btn, 'click', true, false);
      setTimeout(_ => {
        const filter = document.body.querySelector('.el-table-filter');
        expect(filter).to.exist;
        document.body.removeChild(filter);
        done();
      }, 100);
    });

    it('click filter', done => {
      const btn = vm.$el.querySelector('.el-table__column-filter-trigger');

      triggerEvent(btn, 'click', true, false);
      setTimeout(_ => {
        const filter = document.body.querySelector('.el-table-filter');

        // John Lasseter
        triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false);
        // confrim button
        setTimeout(_ => {
          triggerEvent(filter.querySelector('.el-table-filter__bottom button'), 'click', true, false);
          setTimeout(_ => {
            expect(vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr')).to.length(3);
            document.body.removeChild(filter);
            done();
          }, DELAY);
        }, 100);
      }, 100);
    });

    it('click reset', done => {
      const btn = vm.$el.querySelector('.el-table__column-filter-trigger');

      triggerEvent(btn, 'click', true, false);
      setTimeout(_ => {
        const filter = document.body.querySelector('.el-table-filter');

        // John Lasseter
        triggerEvent(filter.querySelector('.el-checkbox'), 'click', true, false);
        setTimeout(_ => {
          // reset button
          triggerEvent(filter.querySelectorAll('.el-table-filter__bottom button')[1], 'click', true, false);
          setTimeout(_ => {
            expect(filter.querySelector('.el-table-filter__bottom button').classList.contains('is-disabled')).to.true;
            document.body.removeChild(filter);
            destroyVM(vm);
            done();
          }, DELAY);
        }, 100);
      }, 100);
    });
  });

  describe('events', () => {
    const createTable = function(prop = '', opts) {
      return createVue({
        template: `
          <el-table :data="testData" @${prop}="handleEvent">
            <el-table-column type="selection" />
            <el-table-column prop="name" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        methods: {
          handleEvent(...args) {
            this.result = args;
          }
        },

        created() {
          this.testData = getTestData();
        },

        data() {
          return { result: '', testData: this.testData };
        }
      }, true);
    };

    it('select', done => {
      const vm = createTable('select');

      setTimeout(_ => {
        vm.$el.querySelectorAll('.el-checkbox')[1].click();
        expect(vm.result).to.length(2);
        expect(vm.result[1]).to.have.property('name').to.equal(getTestData()[0].name);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('select-all', done => {
      const vm = createTable('select-all');

      setTimeout(_ => {
        vm.$el.querySelector('.el-checkbox').click();
        setTimeout(_ => {
          expect(vm.result).to.length(1);
          expect(vm.result[0]).to.length(getTestData().length);
          destroyVM(vm);
          done();
        }, DELAY);
      }, DELAY);
    });

    it('selection-change', done => {
      const vm = createTable('selection-change');
      setTimeout(_ => {
        vm.$el.querySelectorAll('.el-checkbox')[1].click();
        expect(vm.result).to.length(1);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('cell-mouse-enter', done => {
      const vm = createTable('cell-mouse-enter');

      setTimeout(_ => {
        const cell = vm.$el.querySelectorAll('.el-table__body .cell')[2]; // first row
        triggerEvent(cell.parentNode, 'mouseenter');
        expect(vm.result).to.length(4); // row, column, cell, event
        expect(vm.result[0]).to.have.property('name').to.equal(getTestData()[0].name);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('cell-mouse-leave', done => {
      const vm = createTable('cell-mouse-leave');

      setTimeout(_ => {
        const cell = vm.$el.querySelectorAll('.el-table__body .cell')[7]; // second row
        const cell2 = vm.$el.querySelectorAll('.el-table__body .cell')[2]; // first row

        triggerEvent(cell2.parentNode, 'mouseenter');
        triggerEvent(cell.parentNode, 'mouseleave');
        expect(vm.result).to.length(4); // row, column, cell, event
        expect(vm.result[0]).to.have.property('name').to.equal(getTestData()[0].name);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('cell-click', done => {
      const vm = createTable('cell-click');

      setTimeout(_ => {
        const cell = vm.$el.querySelectorAll('.el-table__body .cell')[2]; // first row

        cell.parentNode.click();
        expect(vm.result).to.length(4); // row, column, cell, event
        expect(vm.result[0]).to.have.property('name').to.equal(getTestData()[0].name);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('row-click', done => {
      const vm = createTable('row-click');

      setTimeout(_ => {
        const cell = vm.$el.querySelectorAll('.el-table__body .cell')[2]; // first row

        triggerEvent(cell.parentNode.parentNode, 'click');
        expect(vm.result).to.length(2); // row, event
        expect(vm.result[0]).to.have.property('name').to.equal(getTestData()[0].name);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('current-change', done => {
      const vm = createTable('current-change');

      setTimeout(_ => {
        const cell = vm.$el.querySelectorAll('.el-table__body .cell')[2]; // first row

        triggerEvent(cell.parentNode.parentNode, 'click');
        expect(vm.result).to.length(2); // currentRow, oldCurrentRow
        expect(vm.result[0]).to.have.property('name').to.equal(getTestData()[0].name);
        expect(vm.result[1]).to.equal(null);

        // clear data => current-change should fire again.
        const oldRow = vm.result[0];
        vm.testData = [];

        setTimeout(() => {
          expect(vm.result).to.length(2); // currentRow, oldCurrentRow
          expect(vm.result[0]).to.equal(null);
          expect(vm.result[1]).to.equal(oldRow);

          destroyVM(vm);
          done();
        }, DELAY);
      }, DELAY);
    });

    it('header-click', done => {
      const vm = createTable('header-click');

      setTimeout(_ => {
        const cell = vm.$el.querySelectorAll('.el-table__header th')[1]; // header[prop='name']

        triggerEvent(cell, 'click');
        expect(vm.result).to.length(2); // column, event
        expect(vm.result[0]).to.have.property('property').to.equal('name');
        destroyVM(vm);
        done();
      }, DELAY);
    });
  });

  describe('column attributes', () => {
    const createTable = function(props1, props2, props3, props4, opts, tableProps) {
      return createVue(Object.assign({
        template: `
          <el-table :data="testData" ${tableProps || ''}>
            <el-table-column prop="name" ${props1 || ''} />
            <el-table-column prop="release" ${props2 || ''} />
            <el-table-column prop="director" ${props3 || ''} />
            <el-table-column prop="runtime" ${props4 || ''} />
          </el-table>
        `,

        created() {
          this.testData = getTestData();
        }
      }, opts));
    };

    it('label', done => {
      const vm = createTable('label="啊哈哈哈"', 'label="啊啦啦啦"');
      setTimeout(_ => {
        const ths = toArray(vm.$el.querySelectorAll('thead th'))
          .map(node => node.textContent).filter(o => o);

        expect(ths).to.eql(['啊哈哈哈', '啊啦啦啦']);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('width', done => {
      const vm = createTable('width="123px"', ':width="102"', 'width="39"');
      setTimeout(_ => {
        const ths = toArray(vm.$el.querySelectorAll('.el-table__header-wrapper col'))
          .map(node => node.width).filter(o => o);

        expect(ths).to.include('123').include('102').include('39');
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('fixed', done => {
      const vm = createTable(
        'fixed label="test1"',
        'fixed="right" label="test2"',
        'fixed="left" label="test3"');
      setTimeout(_ => {
        expect(toArray(vm.$el.querySelectorAll('.el-table__fixed th:not(.is-hidden)'))
          .map(node => node.textContent))
          .to.eql(['test1', 'test3']);

        expect(toArray(vm.$el.querySelectorAll('.el-table__fixed-right th:not(.is-hidden)'))
          .map(node => node.textContent))
          .to.eql(['test2']);
        expect(vm.$el.querySelector('.el-table__body-wrapper').style.height).to.equal('');
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('resizable', done => {
      const vm = createTable(
        'resizable',
        ':resizable="false"',
        '',
        '',
        {},
        'border');

      setTimeout(_ => {
        const firstCol = vm.$el.querySelector('thead th');
        triggerEvent(firstCol, 'mousemove');
        triggerEvent(firstCol, 'mousedown');
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('formatter', done => {
      const vm = createTable(
        ':formatter="renderCell"', '', '', '', {
          methods: {
            renderCell(row, column) {
              return `[${row.name}]`;
            }
          }
        });

      setTimeout(_ => {
        const cells = toArray(vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr td:first-child'));
        expect(cells.map(n => n.textContent)).to.eql(getTestData().map(o => `[${o.name}]`));
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('show-overflow-tooltip', done => {
      const vm = createTable('show-overflow-tooltip');
      setTimeout(_ => {
        expect(vm.$el.querySelectorAll('.el-tooltip')).to.length(5);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('show-tooltip-when-overflow', done => { // old version prop name
      const vm = createTable('show-tooltip-when-overflow');
      setTimeout(_ => {
        expect(vm.$el.querySelectorAll('.el-tooltip')).to.length(5);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('inline-template', done => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" inline-template>
              <span>[{{ row.name }}]</span>
            </el-table-column>
            <el-table-column prop="release"/>
            <el-table-column prop="director"/>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        created() {
          this.testData = getTestData();
        }
      });

      setTimeout(_ => {
        const cells = toArray(vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr td:first-child'));
        expect(cells.map(n => n.textContent)).to.eql(getTestData().map(o => `[${o.name}]`));
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('render-header', done => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" :render-header="renderHeader" label="name">
            </el-table-column>
            <el-table-column prop="release"/>
            <el-table-column prop="director"/>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        methods: {
          renderHeader(h, { column, $index }) {
            return '' + $index + ':' + column.label;
          }
        },

        created() {
          this.testData = getTestData();
        }
      });

      setTimeout(_ => {
        const headerCell = vm.$el.querySelector('.el-table__header-wrapper thead tr th:first-child .cell');
        expect(headerCell.textContent).to.equal('0:name');
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('align', done => {
      const vm = createTable('align="left"', 'align="right"', 'align="center"');
      setTimeout(_ => {
        var len = getTestData().length + 1;
        expect(vm.$el.querySelectorAll('.is-left')).to.length(len);
        expect(vm.$el.querySelectorAll('.is-right')).to.length(len);
        expect(vm.$el.querySelectorAll('.is-center')).to.length(len);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('class-name', done => {
      const vm = createTable('class-name="column-1"', 'class-name="column-2 column-class-a"', 'class-name="column-class-a"');
      setTimeout(_ => {
        var len = getTestData().length + 1;
        expect(vm.$el.querySelectorAll('.column-1')).to.length(len);
        expect(vm.$el.querySelectorAll('.column-2')).to.length(len);
        expect(vm.$el.querySelectorAll('.column-class-a')).to.length(len * 2);
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('selectable', done => {
      const vm = createVue({
        template: `
          <el-table :data="testData" @selection-change="change">
            <el-table-column type="selection" :selectable="filterSelect" />
            <el-table-column prop="name" label="name" />
            <el-table-column prop="release" label="release" />
            <el-table-column prop="director" label="director" />
            <el-table-column prop="runtime" label="runtime" />
          </el-table>
        `,

        created() {
          this.testData = getTestData();
        },

        data() {
          return { selected: [] };
        },

        methods: {
          change(rows) {
            this.selected = rows;
          },

          filterSelect(row, index) {
            return index > 2;
          }
        }
      }, true);

      setTimeout(_ => {
        vm.$el.querySelector('.el-checkbox').click();
        setTimeout(_ => {
          expect(vm.selected).to.length(2);
          destroyVM(vm);
          done();
        }, DELAY);
      }, DELAY);
    });

    it('selectable === false & check selectAll status', done => {
      const vm = createVue({
        template: `
          <el-table :data="testData" @selection-change="change">
            <el-table-column type="selection" :selectable="filterSelect" />
            <el-table-column prop="name" label="name" />
            <el-table-column prop="release" label="release" />
            <el-table-column prop="director" label="director" />
            <el-table-column prop="runtime" label="runtime" />
          </el-table>
        `,

        created() {
        },

        data() {
          return { selected: [], testData: null };
        },

        methods: {
          change(rows) {
            this.selected = rows;
          },

          filterSelect(row, index) {
            return false;
          }
        }
      }, true);

      vm.testData = getTestData();

      setTimeout(_ => {
        expect(vm.$el.querySelector('.el-checkbox').__vue__.checked).to.be.false;
        setTimeout(_ => {
          expect(vm.selected).to.length(0);
          destroyVM(vm);
          done();
        }, DELAY);
      }, DELAY);
    });

    it('emit selection-change after row has been removed', done => {
      const vm = createVue({
        template: `
          <el-table :data="testData" @selection-change="change">
            <el-table-column type="selection" />
            <el-table-column prop="name" label="name" />
            <el-table-column prop="release" label="release" />
            <el-table-column prop="director" label="director" />
            <el-table-column prop="runtime" label="runtime" />
          </el-table>
        `,

        created() {
          this.testData = getTestData();
        },

        data() {
          return { selected: [], testData: null };
        },

        methods: {
          change(rows) {
            this.selected = rows;
          },

          filterSelect(row, index) {
            return index > 2;
          }
        }
      }, true);

      setTimeout(_ => {
        vm.$el.querySelector('.el-checkbox').click();
        setTimeout(_ => {
          expect(vm.selected).to.length(5);
          vm.testData.splice(0, 1);
          setTimeout(_ => {
            expect(vm.selected).to.length(4);
            destroyVM(vm);
            done();
          });
        }, DELAY);
      }, DELAY);
    });

    it('reserve-selection', done => {
      const getData = function(page = 0) {
        let id = 0;
        const rows = [];
        const row = () => {
          return {
            id: ++id + page * 10,
            date: new Date().getTime()
          };
        };
        let count = 10;

        while (--count) {
          rows.push(row());
        }
        return rows;
      };
      const vm = createVue({
        template: `
          <el-table ref="table" :row-key="rowKey" :data="testData" @selection-change="change">
            <el-table-column type="selection" reserve-selection />
            <el-table-column prop="id" label="id" />
            <el-table-column prop="date" label="date" />
          </el-table>
        `,

        created() {
          this.testData = getData();
        },

        data() {
          return { selected: [], testData: [] };
        },

        methods: {
          rowKey(row) {
            return row.id;
          },

          change(rows) {
            this.selected = rows;
          }
        }
      }, true);

      setTimeout(_ => {
        // click first
        vm.$el.querySelectorAll('.el-checkbox')[1].click();

        setTimeout(_ => {
          expect(vm.$el.querySelectorAll('.el-checkbox__inner.is-checked')).to.length(1);
          // go to second page
          vm.testData = getData(1);
          setTimeout(_ => {
             // expect no checked
            expect(vm.$el.querySelectorAll('.el-checkbox__inner.is-checked')).to.length(0);
            // click first checkbox
            vm.$el.querySelectorAll('.el-checkbox')[1].click();
            vm.$el.querySelectorAll('.el-checkbox')[2].click();
            setTimeout(_ => {
              // back first page
              vm.testData = getData();
              setTimeout(_ => {
                expect(vm.$el.querySelectorAll('.el-checkbox__inner.is-checked')).to.length(1);
                // clear
                vm.$refs.table.clearSelection();
                setTimeout(_ => {
                  expect(vm.$el.querySelectorAll('.el-checkbox__inner.is-checked')).to.length(0);
                  destroyVM(vm);
                  done();
                }, DELAY);
              }, DELAY);
            }, DELAY);
          }, DELAY);
        }, DELAY);
      }, DELAY);
    });

    describe('type', () => {
      const createTable = function(type) {
        return createVue({
          template: `
            <el-table :data="testData" @selection-change="change">
              <el-table-column type="${type}" />
              <el-table-column prop="name" label="name" />
              <el-table-column prop="release" label="release" />
              <el-table-column prop="director" label="director" />
              <el-table-column prop="runtime" label="runtime" />
            </el-table>
          `,

          created() {
            this.testData = getTestData();
          },

          data() {
            return { selected: [] };
          },

          methods: {
            change(rows) {
              this.selected = rows;
            }
          }
        }, true);
      };

      describe('= selection', () => {
        const vm = createTable('selection');

        it('render', done => {
          setTimeout(_ => {
            expect(vm.$el.querySelectorAll('.el-checkbox')).to.length(getTestData().length + 1);
            done();
          }, DELAY);
        });

        it('select all', done => {
          vm.$el.querySelector('.el-checkbox').click();

          setTimeout(_ => {
            expect(vm.selected).to.length(getTestData().length);
            done();
          }, DELAY);
        });

        it('cancel all', done => {
          vm.$el.querySelector('.el-checkbox').click();

          setTimeout(_ => {
            expect(vm.selected).to.length(0);
            destroyVM(vm);
            done();
          }, DELAY);
        });

        it('select one', done => {
          const vm2 = createTable('selection');

          setTimeout(_ => {
            vm2.$el.querySelectorAll('.el-checkbox')[1].click();

            setTimeout(_ => {
              expect(vm2.selected).to.length(1);
              expect(vm2.selected[0].name).to.equal(getTestData()[0].name);
              destroyVM(vm2);
              done();
            }, DELAY);
          }, DELAY);
        });
      });

      describe('= index', () => {
        const vm = createTable('index');

        it('render', done => {
          setTimeout(_ => {
            expect(toArray(vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr td:first-child'))
              .map(node => node.textContent)).to.eql(['1', '2', '3', '4', '5']);
            destroyVM(vm);
            done();
          }, DELAY);
        });
      });
    });

    describe('sortable', () => {

      it('render', done => {
        const vm = createTable('', '', '', 'sortable');
        setTimeout(_ => {
          expect(vm.$el.querySelectorAll('.caret-wrapper')).to.length(1);
          destroyVM(vm);
          done();
        }, DELAY);
      });

      it('sortable method', done => {
        const vm = createTable(
          'sortable :sort-method="sortMethod"', '', '', '', {
            methods: {
              sortMethod(a, b) {
                return a.runtime < b.runtime;
              }
            }
          });

        setTimeout(_ => {
          const elm = vm.$el.querySelector('.caret-wrapper');

          elm.click();
          setTimeout(_ => {
            const lastCells = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr td:last-child');
            expect(toArray(lastCells).map(node => node.textContent)).to.eql(['100', '95', '92', '92', '80']);
            destroyVM(vm);
            done();
          }, DELAY);
        }, DELAY);
      });

      it('sort-change', done => {
        let result;
        const vm = createTable('sortable="custom"', '', '', '', {
          methods: {
            sortChange(...args) {
              result = args;
            }
          }
        }, '@sort-change="sortChange"');
        setTimeout(_ => {
          const elm = vm.$el.querySelector('.caret-wrapper');

          elm.click();
          setTimeout(_ => {
            expect(result).to.exist;
            destroyVM(vm);
            done();
          }, DELAY);
        }, DELAY);
      });
    });

    describe('click sortable column', () => {
      const vm = createTable('', '', '', 'sortable');

      it('ascending', done => {
        const elm = vm.$el.querySelector('.caret-wrapper');

        elm.click();
        setTimeout(_ => {
          const lastCells = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr td:last-child');
          expect(toArray(lastCells).map(node => node.textContent))
          .to.eql(['80', '92', '92', '95', '100']);
          done();
        }, DELAY);
      });

      it('descending', done => {
        const elm = vm.$el.querySelector('.caret-wrapper');

        elm.click();
        setTimeout(_ => {
          const lastCells = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr td:last-child');
          expect(toArray(lastCells).map(node => node.textContent))
            .to.eql(['100', '95', '92', '92', '80']);
          destroyVM(vm);
          done();
        }, DELAY);
      });
    });
  });

  describe('multi level column', () => {
    it('should works', done => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" />
            <el-table-column label="group">
              <el-table-column prop="release"/>
              <el-table-column prop="director"/>
            </el-table-column>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        created() {
          this.testData = null;
        }
      }, true);

      setTimeout(_ => {
        const trs = vm.$el.querySelectorAll('.el-table__header tr');
        expect(trs.length).equal(2);
        const firstRowHeader = trs[0].querySelectorAll('th .cell').length;
        const secondRowHeader = trs[1].querySelectorAll('th .cell').length;
        expect(firstRowHeader).to.equal(3);
        expect(secondRowHeader).to.equal(2);

        expect(trs[0].querySelector('th:first-child').getAttribute('rowspan')).to.equal('2');
        expect(trs[0].querySelector('th:nth-child(2)').getAttribute('colspan')).to.equal('2');
        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('should works', done => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" />
            <el-table-column label="group">
              <el-table-column label="group's group">
                <el-table-column prop="release" />
                <el-table-column prop="runtime"/>
              </el-table-column>
              <el-table-column prop="director" />
            </el-table-column>
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        created() {
          this.testData = null;
        }
      }, true);

      setTimeout(_ => {
        const trs = vm.$el.querySelectorAll('.el-table__header tr');
        expect(trs.length).equal(3);
        const firstRowHeader = trs[0].querySelectorAll('th .cell').length;
        const secondRowHeader = trs[1].querySelectorAll('th .cell').length;
        const thirdRowHeader = trs[2].querySelectorAll('th .cell').length;
        expect(firstRowHeader).to.equal(3);
        expect(secondRowHeader).to.equal(2);
        expect(thirdRowHeader).to.equal(2);

        expect(trs[0].querySelector('th:first-child').getAttribute('rowspan')).to.equal('3');
        expect(trs[0].querySelector('th:nth-child(2)').getAttribute('colspan')).to.equal('3');
        expect(trs[1].querySelector('th:first-child').getAttribute('colspan')).to.equal('2');
        expect(trs[1].querySelector('th:nth-child(2)').getAttribute('rowspan')).to.equal('2');

        destroyVM(vm);
        done();
      }, DELAY);
    });

    it('should work in one column', done => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column label="group">
              <el-table-column prop="release"/>
            </el-table-column>
          </el-table>
        `,

        created() {
          this.testData = null;
        }
      }, true);

      setTimeout(_ => {
        const trs = vm.$el.querySelectorAll('.el-table__header tr');
        expect(trs.length).equal(2);
        const firstRowLength = trs[0].querySelectorAll('th .cell').length;
        const secondRowLength = trs[1].querySelectorAll('th .cell').length;
        expect(firstRowLength).to.equal(1);
        expect(secondRowLength).to.equal(1);

        expect(trs[0].querySelector('th:first-child').getAttribute('rowspan')).to.equal('1');
        expect(trs[0].querySelector('th:first-child').getAttribute('colspan')).to.equal('1');
        destroyVM(vm);
        done();
      }, DELAY);
    });
  });

  describe('dynamic column attribtes', () => {
    const DELAY = 50;

    it('label', (done) => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" :label="label"/>
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime" />
          </el-table>
        `,

        data() {
          return {
            label: 'name'
          };
        },

        created() {
          this.testData = getTestData();
        }
      }, true);

      setTimeout(() => {
        expect(vm.$el.querySelector('.el-table__header th .cell').textContent).to.equal('name');
        vm.label = 'NAME';
        vm.$nextTick(() => {
          expect(vm.$el.querySelector('.el-table__header th .cell').textContent).to.equal('NAME');
        });
        done();
      }, DELAY);
    });

    it('align', (done) => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column prop="name" :align="align"/>
          </el-table>
        `,

        data() {
          return {
            align: 'left'
          };
        },

        created() {
          this.testData = getTestData();
        }
      }, true);

      setTimeout(() => {
        expect(vm.$el.querySelectorAll('.el-table__body td.is-right').length === 0).to.be.true;
        vm.align = 'right';
        vm.$nextTick(() => {
          expect(vm.$el.querySelectorAll('.el-table__body td.is-right').length > 0).to.be.true;
        });
        done();
      }, DELAY);
    });

    it('width', (done) => {
      const vm = createVue({
        template: `
          <el-table :data="testData" :fit="false">
            <el-table-column prop="name" :width="width"/>
          </el-table>
        `,

        data() {
          return {
            width: 100
          };
        },

        created() {
          this.testData = getTestData();
        }
      }, true);

      setTimeout(() => {
        expect(vm.$el.querySelector('.el-table__body col').getAttribute('width')).to.equal('100');
        vm.width = 200;
        vm.$nextTick(() => {
          expect(vm.$el.querySelector('.el-table__body col').getAttribute('width')).to.equal('200');
        });
        done();
      }, DELAY);
    });

    it('min-width', (done) => {
      const vm = createVue({
        template: `
          <el-table :data="testData" :fit="false">
            <el-table-column prop="name" :min-width="width"/>
          </el-table>
        `,

        data() {
          return {
            width: 100
          };
        },

        created() {
          this.testData = getTestData();
        }
      }, true);

      setTimeout(() => {
        expect(vm.$el.querySelector('.el-table__body col').getAttribute('width')).to.equal('100');
        vm.width = 200;
        vm.$nextTick(() => {
          expect(vm.$el.querySelector('.el-table__body col').getAttribute('width')).to.equal('200');
        });
        done();
      }, DELAY);
    });

    it('fixed', (done) => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column :fixed="fixed" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime" />
          </el-table>
        `,

        data() {
          return {
            fixed: false
          };
        },

        created() {
          this.testData = getTestData();
        }
      }, true);

      setTimeout(() => {
        expect(!vm.$el.querySelector('.el-table__fixed')).to.be.true;
        vm.fixed = true;
        vm.$nextTick(() => {
          expect(!!vm.$el.querySelector('.el-table__fixed')).to.be.true;
        });
        done();
      }, DELAY);
    });

    it('prop', (done) => {
      const vm = createVue({
        template: `
          <el-table :data="testData">
            <el-table-column :prop="name" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime" />
          </el-table>
        `,

        data() {
          return {
            prop: 'name'
          };
        },

        created() {
          this.testData = getTestData();
        }
      }, true);

      setTimeout(() => {
        let firstColumnContent = vm.$el.querySelector('.el-table__body td .cell').textContent;
        let secondColumnContent = vm.$el.querySelector('.el-table__body td:nth-child(2) .cell').textContent;
        expect(firstColumnContent !== secondColumnContent).to.be.true;
        vm.prop = 'release';
        vm.property = 'release';
        vm.$nextTick(() => {
          firstColumnContent = vm.$el.querySelector('.el-table__body td .cell').textContent;
          secondColumnContent = vm.$el.querySelector('.el-table__body td:nth-child(2) .cell').textContent;
          expect(firstColumnContent === secondColumnContent).to.be.true;
        });
        done();
      }, DELAY);
    });
  });

  describe('methods', () => {
    const createTable = function(prop = '', opts) {
      return createVue({
        template: `
          <el-table ref="table" :data="testData" @${prop}="handleEvent">
            <el-table-column type="selection" />
            <el-table-column prop="name" />
            <el-table-column prop="release" />
            <el-table-column prop="director" />
            <el-table-column prop="runtime"/>
          </el-table>
        `,

        methods: {
          handleEvent(selection) {
            this.fireCount++;
            this.selection = selection;
          }
        },

        created() {
          this.testData = getTestData();
        },

        data() {
          return { selection: null, testData: this.testData, fireCount: 0 };
        }
      }, true);
    };

    it('toggleRowSelection', () => {
      const vm = createTable('selection-change');
      vm.$refs.table.toggleRowSelection(vm.testData[0]);
      expect(vm.selection).to.length(1);
      expect(vm.fireCount).to.equal(1);

      // test use second parameter
      vm.$refs.table.toggleRowSelection(vm.testData[0], true);
      expect(vm.fireCount).to.equal(1);

      vm.$refs.table.toggleRowSelection(vm.testData[0], false);
      expect(vm.fireCount).to.equal(2);
      expect(vm.selection).to.length(0);

      destroyVM(vm);
    });

    it('clearSelection', () => {
      const vm = createTable('selection-change');
      vm.$refs.table.toggleRowSelection(vm.testData[0]);
      expect(vm.selection).to.length(1);
      expect(vm.fireCount).to.equal(1);

      // clear selection
      vm.$refs.table.clearSelection();
      expect(vm.fireCount).to.equal(2);
      expect(vm.selection).to.length(0);

      vm.$refs.table.clearSelection();
      expect(vm.fireCount).to.equal(2);

      destroyVM(vm);
    });
  });

  it('hover', done => {
    const vm = createVue({
      template: `
        <el-table :data="testData">
          <el-table-column prop="name" label="片名" fixed />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" />
        </el-table>
      `,

      created() {
        this.testData = getTestData();
      }
    }, true);
    setTimeout(_ => {
      const tr = vm.$el.querySelector('.el-table__body-wrapper tbody tr');
      triggerEvent(tr, 'mouseenter', true, false);
      setTimeout(_ => {
        expect(tr.classList.contains('hover-row')).to.true;
        triggerEvent(tr, 'mouseleave', true, false);
        setTimeout(_ => {
          expect(tr.classList.contains('hover-row')).to.false;
          destroyVM(vm);
          done();
        }, DELAY);
      }, DELAY);
    }, DELAY);
  });

  it('highlight-current-row', done => {
    const vm = createVue({
      template: `
        <el-table :data="testData" highlight-current-row>
          <el-table-column prop="name" label="片名" />
          <el-table-column prop="release" label="发行日期" />
          <el-table-column prop="director" label="导演" />
          <el-table-column prop="runtime" label="时长（分）" />
        </el-table>
      `,

      created() {
        this.testData = getTestData();
      }
    }, true);
    setTimeout(_ => {
      const tr = vm.$el.querySelector('.el-table__body-wrapper tbody tr');
      triggerEvent(tr, 'click', true, false);
      setTimeout(_ => {
        expect(tr.classList.contains('current-row')).to.be.true;
        const rows = vm.$el.querySelectorAll('.el-table__body-wrapper tbody tr');

        triggerEvent(rows[2], 'click', true, false);
        setTimeout(_ => {
          expect(tr.classList.contains('current-row')).to.be.false;
          expect(rows[2].classList.contains('current-row')).to.be.true;
          destroyVM(vm);
          done();
        }, DELAY);
      }, DELAY);
    }, DELAY);
  });
});
