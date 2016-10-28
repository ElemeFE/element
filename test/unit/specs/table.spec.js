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
          return { result: '' };
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
        const ths = toArray(vm.$el.querySelectorAll('.el-table__header-wrapper colgroup'))
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
        expect(toArray(vm.$el.querySelectorAll('.el-table__fixed th:not(.hidden)'))
          .map(node => node.textContent))
          .to.eql(['test1', 'test3']);

        expect(toArray(vm.$el.querySelectorAll('.el-table__fixed-right th:not(.hidden)'))
          .map(node => node.textContent))
          .to.eql(['test2']);
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

    it('show-tooltip-when-overflow', done => {
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

  it('hover', done => {
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
});
