import {createTest, createVue, destroyVM} from '../util';
import Avatar from 'packages/avatar';

describe('Avatar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Avatar);
    expect(vm.$el).to.exist;
  });

  it('size is number', () => {
    vm = createVue({
      template: `
        <el-avatar :size="50">
        </el-avatar>
      `
    }, true);
    const avatarElm = vm.$el;
    expect(avatarElm.style.height).to.equal('50px');
  });

  it('size is string', () => {
    vm = createVue({
      template: `
        <el-avatar size="small">
          user
        </el-avatar>
      `
    }, true);
    const avatarElm = vm.$el;
    expect(avatarElm.classList.contains('el-avatar--small')).to.be.true;
  });

  it('shape', () => {
    vm = createVue({
      template: `
        <el-avatar size="small" shape="square">
          user
        </el-avatar>
      `
    }, true);
    const avatarElm = vm.$el;
    expect(avatarElm.classList.contains('el-avatar--square')).to.be.true;
  });

  it('icon avatar', () => {
    vm = createVue({
      template: `
        <el-avatar icon="el-icon-user-solid">
        </el-avatar>
      `
    }, true);
    const avatarElm = vm.$el;
    const iconELm = avatarElm.children[0];
    expect(avatarElm.classList.contains('el-avatar--icon')).to.be.true;
    expect(iconELm.classList.contains('el-icon-user-solid')).to.be.true;
  });

  it('image avatar', () => {
    vm = createVue({
      template: `
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      `
    }, true);
    const imgElm = vm.$el.children[0];
    expect(imgElm.tagName.toUpperCase()).to.equal('IMG');
    expect(imgElm.src).to.equal('https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png');
  });

  it('image fallback', (done) => {
    vm = createVue({
      template: `
        <el-avatar src="https://empty" @error="errorHandler">
          fallback
        </el-avatar>
      `,
      methods: {
        errorHandler() {
          return true;
        }
      }
    }, true);
    setTimeout(() => {
      const avatarElm = vm.$el;
      expect(avatarElm.textContent.trim()).to.equal('fallback');
      done();
    }, 3000);
  });

  it('image fit', (done) => {
    vm = createVue({
      template: `
        <div>
          <el-avatar :src="url"></el-avatar>
          <el-avatar :src="url" v-for="fit in fits" :fit="fit" :key="fit"></el-avatar>
        </div>
        
      `,
      data() {
        return {
          fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        };
      }
    }, true);
    setTimeout(() => {
      const containerElm = vm.$el;
      expect(containerElm.children[0].children[0].style.objectFit).to.equal('cover');
      expect(containerElm.children[1].children[0].style.objectFit).to.equal('fill');
      expect(containerElm.children[2].children[0].style.objectFit).to.equal('contain');
      expect(containerElm.children[3].children[0].style.objectFit).to.equal('cover');
      expect(containerElm.children[4].children[0].style.objectFit).to.equal('none');
      expect(containerElm.children[5].children[0].style.objectFit).to.equal('scale-down');

      done();
    }, 3000);
  });
});

