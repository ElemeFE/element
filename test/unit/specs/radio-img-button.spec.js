import { createVue, destroyVM } from '../util';

describe('RadioImgButton', () => {
  let vm;
  const imgUrl = 'http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg';
  const text = 'radio-img-button';
  const description = '我是radio1';
  const name = 'nameStr';
  const basicVm = createVue({
    template: `
        <el-radio-img-button 
          v-model="value" 
          :imgUrl= "imgUrl"
          label="1" 
          :text="text" 
          vertical
          :name="name"
          width="310" 
          description="description">
        </el-radio-img-button>
      `,
    data() {
      return {
        value: '',
        imgUrl,
        text,
        description,
        name
      };
    }
  }, true);
  afterEach(() => {
    if (vm) {
      destroyVM(vm);
    }
    destroyVM(basicVm);
  });

  it('create', done => {
    let radioElm = basicVm.$el;
    expect(radioElm.classList.contains('el-radio-img-button')).to.be.true;
    radioElm.click();
    setTimeout(_ => {
      expect(radioElm.querySelector('.is-checked')).to.be.ok;
      done();
    }, 10);
  });

  it('disabled', done => {
    vm = createVue({
      template: `
        <el-radio-img-button 
          v-model="value" 
          imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" 
          label="1" text="radio-img-button" 
          vertical 
          disabled
          description="我是radio1">
        </el-radio-img-button>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    let radioElm = vm.$el;
    radioElm.click();
    setTimeout(_ => {
      expect(vm.value === '').to.be.true;
      expect(radioElm.querySelector('.is-disabled')).to.be.ok;
      done();
    }, 10);
  });

  it('name', () => {
    const inputDom = basicVm.$el.getElementsByClassName('el-radio-img-button__original')[0];
    expect(inputDom.name === name).to.be.true;
  });

  it('width', () => {
    const elm = basicVm.$el;
    expect(elm.style.width === '310px').to.be.true;
  });

  it('imgUrl', () => {
    const imgDom = basicVm.$el.getElementsByClassName('el-radio-img-button__img')[0];
    expect(imgDom.src === imgUrl).to.be.true;
  });

  it('text', () => {
    const textDom = basicVm.$el.getElementsByClassName('el-radio-img-button__text')[0];
    expect(textDom.title === text && textDom.innerText === text).to.be.true;
  });

  it('description', () => {
    vm = createVue({
      template: `
        <el-radio-img-button 
          v-model="value" 
          imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" 
          label="1" text="radio-img-button" 
          disabled
          description="我是radio1">
        </el-radio-img-button>
      `,
      data() {
        return {
          value: ''
        };
      }
    }, true);
    const descriptionDom = vm.$el.getElementsByClassName('el-radio-img-button__description')[0];
    expect(
      descriptionDom.title === '我是radio1' &&
        descriptionDom.innerText === '我是radio1'
    ).to.be.true;
  });

  it('change event', done => {
    vm = createVue({
      template: `
        <el-radio-img-button 
          v-model="value" 
          imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" 
          label="1" text="radio-img-button" 
          @change="handleChange"
          description="">
        </el-radio-img-button>
      `,
      data() {
        return {
          value: '',
          data: ''
        };
      },
      methods: {
        handleChange(val) {
          this.data = val;
        }
      }
    }, true);
    let radioElm = vm.$el;
    radioElm.click();
    setTimeout(_ => {
      expect(vm.data).to.equal('1');
      done();
    }, 10);
  });

  describe('Radio group', () => {
    it('create', done => {
      vm = createVue({
        template: `
          <el-radio-group v-model="value">
            <el-radio-img-button 
              imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" 
              label="1" text="radio-img-button" 
              ref="radio1"
              description="备选项">
            </el-radio-img-button>
            <el-radio-img-button 
              imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" 
              label="2" text="radio-img-button" 
              ref="radio2"
              description="备选项">
            </el-radio-img-button>
            <el-radio-img-button 
              imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg" 
              label="3" text="radio-img-button" 
              ref="radio3"
              description="备选项">
            </el-radio-img-button>
          </el-radio-group>
        `,
        data() {
          return {
            value: '3'
          };
        }
      }, true);
      setTimeout(_ => {
        expect(vm.$refs.radio3.$el.querySelector('.is-checked')).to.be.ok;
        let radioElm = vm.$refs.radio2.$el;
        radioElm.click();
        setTimeout(_ => {
          expect(radioElm.querySelector('.is-checked')).to.be.ok;
          expect(vm.value).to.equal('2');
          done();
        }, 10);
      }, 50);
    });
  });
});
