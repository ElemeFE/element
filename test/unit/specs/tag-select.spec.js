import { createVue, destroyVM } from '../util';

describe('TagSelect', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <el-tag-select v-model="value">
            <el-tag-select-item
                v-for="option in options"
                :key="option.value"
                :value="option.value"
                :label="option.label">
            </el-tag-select-item>
        </el-tag-select>
      `,
      data() {
        return {
          value: 'mi',
          options: [
            {
              value: 'mi',
              label: '小米'
            },
            {
              value: 'apple',
              label: '苹果'
            }
          ]
        };
      }
    }, true);
    const itemElements = vm.$el.querySelectorAll('.el-tag-select__item');
    itemElements.forEach((item, index) => {
      expect(item.innerText).to.equal(vm.options[index].label);
    });
  });

  it('multiple', () => {
    vm = createVue({
      template: `
        <el-tag-select multiple v-model="value">
            <el-tag-select-item
                v-for="option in options"
                :key="option.value"
                :value="option.value"
                :label="option.label">
            </el-tag-select-item>
        </el-tag-select>
      `,
      data() {
        return {
          value: ['mi', 'apple'],
          options: [
            {
              value: 'mi',
              label: '小米'
            },
            {
              value: 'apple',
              label: '苹果'
            }
          ]
        };
      }
    }, true);
    const itemElements = vm.$el.querySelectorAll('.el-tag-select__item');
    itemElements.forEach(item => {
      expect(item.classList.contains('active')).to.true;
    });
  });

  it('size', () => {
    vm = createVue({
      template: `
        <el-tag-select v-model="value" size="medium">
            <el-tag-select-item
                value="mi"
                label="小米">
            </el-tag-select-item>
        </el-tag-select>
      `
    }, true);
    expect(vm.$el.classList.contains('el-tag-select--medium')).to.true;
  });

  it('disabled', () => {
    vm = createVue({
      template: `
        <el-tag-select v-model="value" size="medium">
            <el-tag-select-item
                disabled
                value="mi"
                label="小米">
            </el-tag-select-item>
        </el-tag-select>
      `
    }, true);
    const itemElement = vm.$el.querySelector('.el-tag-select__item');
    expect(itemElement.classList.contains('is-disabled')).to.true;
  });
});

