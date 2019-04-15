import { createTest, createVue, destroyVM, wait } from '../util';
import Image from 'packages/image';

const src = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg';

describe('Image', () => {
  let vm;

  beforeEach(done => {
    fetch(src).then(() => done());
  });

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

    await wait(500);
    img = vm.$el.querySelector('.el-image__inner');
    expect(img.style.objectFit).to.equal('fill');
  });

  it('load failed', async() => {
    vm = createTest(Image, true);
    await wait(500);
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

    await wait(500);
    expect(image1.loading).to.be.false;
    expect(image2.loading).to.be.true;
    wrapper.scrollTop = 10;

    await wait(500);
    expect(image2.loading).to.be.false;
  });
});

