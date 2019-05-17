import { createTest, createVue, destroyVM, wait } from '../util';
import Image from 'packages/image';

const src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFmklEQVR4Xu2ba2wUVRTH/2cWtlaooFQwKpr4CkESTQBNUAkodGeaKFGD2u6WGPyAmmAEEZmpj1VhBghE/KKGBIztDIXAByWBnQ1oQREfARNiDDHiF1+ooBiksVt295hFiqSdxx3KdmcH5uv+z+3//O65c19TwgX+0AWePy4CuFgBISCQ3J6+DFLuVQKmg2k4gK3xuvwr6+9e+Xe57YViCCRttY1ALX2S/asIPLRB1jvLCSEUAFK2egKgYf0T5a6TxdhtmxqXfl8uCBUHMHfP4rqeE0OOeyS4w5T1hsgCmLNTvaWYp299EpxoyvpX5YBQ8QpotlvvkMBfeCbHvMpUjOejCSCjPSYROrySY/B+SzYmRRJA0tZWEfCcJwBGz81yvDZN6eL5hlDxIZCyta8BTPBLjIv5sVbjyp/8dEF/ryiAlL3kJkD6TsQ0STS5vWHZPhFtEE1FAYiUf28yBaZ7OpRle4IkJ6KtGIDZexfU1hyv/QXASBGjBeYpHYrxmYg2iKZiAFIZdSGIVouaLVJx0obE8v2ielFdRQA83pkemc/lDgE0StRopF6CSVuzCGgWTb6ku7T+aHztpLUng8SIaAe9ApJ265MEflvE3P8a/t2UjTHBYsTUgwqgKauOk4p0gAhxMXunVcwfmYpxX6AYQfGgAWjqTNdL3bndRDRe0NsZGYPXWLKxIGiciH5QAJye8r4UWfE5mWbCE1ZCXy+SUFBN2QEo2+fXjKK6zSDcH9Rcr55i0vj2mUsPnmu8V1xZAZxKXhq+G6A7z9U8Mx+zFOOKc433iysbgNKYj3XnNoHoXj8T3r/z+6ZsPDiwNtyjHQE07dTGSAU8QkX4LlSY6Ndh9UfWnT1Ht2QXjeZifC8INw7UOAMfE2MgB6NdhaFo65ih/+bkxRFAMqPuIaK7xM3zu6ZszO3Vt2S1CcwobXPD8TAfoZjU6LSb7AdgWmd6yLW5nqArrm5T1mtDC+A/Y3tNWe/XqY4VkLK1fwBcItp9DGZLNqQwA2DmgiUbQ0Hgs/NyBpBRD4PoqigBKOWSGxuv2XxruscXQNJWDxJoXJQAMPCnJev9XuouQ0D9PMjcXQ1DAIx9pqJP7tupLrOAZhMhEaUKAGOjqehNYgBsdSOBHo0UAOBlU9ZfFwOQUd8honmRAsA8y1SMrWIAbHUFgRZHCUCe6LqNiWU/igHIaCoR9KgAYMZRS9GvFF4Kp7LqU2B6KzoAeKulGLOEASRtrZkAK0IAVEsxlgsDaM6ojRLRtqgAIImntTcYu4UBpLKtU8D8aRQAMJD/uSZeu2t6Oi8MILldHU8SfRMFAG67wN7cHFeCcz5svaZ4koWvosO9FGbdlI1Wt850BNCSXTSMOX4iEhVAaDAT+o5AAEriVEYrgHBmj+8FI7QVwJzLjei+fPOUN0rnG46P66FoMqMdIUK9SBWEGIDvjZIrgFRGOyR6qBlWAMzQLEU3vDrRvQJsdR+BJlZzBYh8VuM1BHYSQehCMpwVwF1mwqjrewYotBk69RK0tS0AHq7eChC7UPEYAto6As6c9VfdLED8tJkwfL9DcH8J2upqgBZWbwXgalPWD/v59wCgvQTgNb8GSr+H7x3AB0zZuF3EuyuA5oz6jET0pkgjYQPAzEstxSh1oO/jVQFzALzn20IIK0CKFa5vm7niBxHvHgsh9QEQfSDSSP8KWDSaOe54GyvS3sA0vMuUjemibbgPgWzrVInZ8RChb+N9AQSdRkXNiul4qikbn4hp4f5/g7N3vDAiXpCOEcj/IwpG0VT02Nl/9NSOshjvGMinMaJJ9OqYeYulGLODxHkml7TVZ8GYT0Q3uDfKXQxaY8n6i06aZnvJDGKaB8JMAo0IYk5UW7r5BbAtNhRz22YYf4jGlXT+vRuktSrUXgRQhZ12Xi1f8BXwL38cy1+mrtJNAAAAAElFTkSuQmCC';

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
    vm = createTest(Image, true);
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
});

