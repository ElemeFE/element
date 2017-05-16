import { createTest, createVue, destroyVM } from '../util';
import Transfer from 'packages/transfer';

describe('Transfer', () => {
  let vm;
  const getTestData = () => {
    const data = [];
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${ i }`,
        disabled: i % 4 === 0
      });
    }
    return data;
  };
  const createTransfer = (props, opts) => {
    return createVue(Object.assign({
      template: `
        <el-transfer :data="testData" ref="transfer" ${props}>
        </el-transfer>
      `,

      created() {
        this.testData = getTestData();
      }
    }, opts));
  };

  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Transfer, true);
    expect(vm.$el).to.exist;
  });

  it('default target list', () => {
    vm = createTransfer('v-model="value"', {
      data() {
        return {
          value: [1, 4]
        };
      }
    });
    expect(vm.$refs.transfer.sourceData.length).to.equal(13);
  });

  it('filterable', done => {
    vm = createTransfer('v-model="value" filterable :filter-method="method"', {
      data() {
        return {
          value: [],
          method(query, option) {
            return option.key === Number(query);
          }
        };
      }
    });
    const transfer = vm.$refs.transfer;
    const leftList = transfer.$el.querySelector('.el-transfer-panel').__vue__;
    leftList.query = '1';
    setTimeout(_ => {
      expect(leftList.filteredData.length).to.equal(1);
      done();
    }, 50);
  });

  it('transfer', done => {
    vm = createTransfer('v-model="value" :left-default-checked="[2, 3]" :right-default-checked="[1]"', {
      data() {
        return {
          value: [1, 4]
        };
      }
    });
    const transfer = vm.$refs.transfer;

    setTimeout(_ => {
      transfer.addToLeft();
      setTimeout(_ => {
        expect(transfer.sourceData.length).to.equal(14);
        transfer.addToRight();
        setTimeout(_ => {
          expect(transfer.sourceData.length).to.equal(12);
          done();
        }, 50);
      }, 50);
    }, 50);
  });

  it('customize', () => {
    vm = createTransfer('v-model="value" :titles="titles" :render-content="renderFunc" :footer-format="format"', {
      data() {
        return {
          value: [2],
          titles: ['1', '2'],
          format: { noChecked: 'no', hasChecked: 'has' },
          renderFunc(h, option) {
            return <span>{ option.key } - { option.label }</span>;
          }
        };
      }
    });
    const transfer = vm.$refs.transfer.$el;
    expect(transfer.querySelector('.el-transfer-panel__header').innerText).to.equal('1');
    expect(transfer.querySelector('.el-checkbox__label span').innerText).to.equal('1 - 备选项 1');
    expect(transfer.querySelector('.el-transfer-panel__footer .el-checkbox__label').innerText).to.equal('no');
  });

  it('check', () => {
    vm = createTransfer('v-model="value"', {
      data() {
        return {
          value: []
        };
      }
    });
    const leftList = vm.$refs.transfer.$el.querySelector('.el-transfer-panel').__vue__;
    leftList.handleAllCheckedChange({ target: { checked: true } });
    expect(leftList.checked.length).to.equal(12);
  });
});
