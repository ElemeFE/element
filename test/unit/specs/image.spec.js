import { createTest, createVue, destroyVM, wait } from '../util';
import Image from 'packages/image';
import { IMAGE_SUCCESS, IMAGE_FAIL } from '../mocks/uri';

const src = IMAGE_SUCCESS;

describe('Image', () => {
  let vm;

  afterEach(() => {
    destroyVM(vm);
  });

  it('create', async() => {
    vm = createTest(Image, {
      src,
      fit: 'fill'
    }, true);
    const placeholder = vm.$el.querySelector('.el-image__placeholder');
    const error = vm.$el.querySelector('.el-image__error');
    let img = vm.$el.querySelector('.el-image__inner');
    expect(placeholder).to.exist;
    expect(error).to.be.null;
    expect(img).to.be.null;

    await wait();
    img = vm.$el.querySelector('.el-image__inner');
    expect(img.style.objectFit).to.equal('fill');
  });

  it('load failed', async() => {
    vm = createTest(Image, {
      src: IMAGE_FAIL
    }, true);
    await wait();
    const error = vm.$el.querySelector('.el-image__error');
    expect(error).to.be.exist;
  });

  it('lazy load', async() => {
    vm = createVue({
      template: `
        <div ref="wrapper" style="height: 200px; overflow: auto;">
          <el-image
            v-for="item in 2"
            :key="item"
            :src="src"
            ref="image"
            style="display: block; height: 200px;"
            lazy></el-image>
        </div>
      `,
      data() {
        return {
          src
        };
      }
    }, true);
    const { image, wrapper } = vm.$refs;
    const [image1, image2] = image;

    await wait();
    expect(image1.loading).to.be.false;
    expect(image2.loading).to.be.true;
    wrapper.scrollTop = 10;

    await wait();
    expect(image2.loading).to.be.false;
  });

  it('$attrs', async() => {
    vm = createVue({
      template: `
        <el-image
          alt="$attrs test"
          referrerpolicy="origin"
          :src="src"></el-image>
      `,
      data() {
        return {
          src
        };
      }
    }, true);

    await wait();
    const $img = vm.$el.querySelector('.el-image__inner');
    expect($img.getAttribute('alt')).to.be.equal('$attrs test');
    expect($img.getAttribute('referrerpolicy')).to.be.equal('origin');
  });

  it('pass event listeners', async() => {
    let result;
    vm = createVue({
      template: `
        <el-image @click="handleClick" :src="src"></el-image>
      `,
      data() {
        return {
          src
        };
      },
      methods: {
        handleClick(e) {
          result = e;
        }
      }
    }, true);
    await wait();
    vm.$el.querySelector('.el-image__inner').click();
    await wait();
    expect(result).to.exist;
  });

  it('big image preview', async() => {
    vm = createVue({
      template: `
        <el-image :src="src" :preview-src-list="srcList"></el-image>
      `,
      data() {
        return {
          src: src,
          srcList: [src]
        };
      }
    }, true);
    await wait();
    vm.$el.querySelector('.el-image__inner').click();
    await wait();

    expect(document.querySelector('.el-image-viewer__wrapper')).to.exist;
    document.querySelector('.el-image-viewer__close').click();
    await wait(1000);
    expect(document.querySelector('.el-image-viewer__wrapper')).to.not.exist;
  });
});

