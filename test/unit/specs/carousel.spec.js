import { createVue, destroyVM } from '../util';

describe('Carousel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <div>
          <el-carousel>
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `
    });
    expect(vm.$el.querySelectorAll('.el-carousel__item').length).to.equal(3);
  });

  it('auto play', done => {
    vm = createVue({
      template: `
        <div>
          <el-carousel :interval="50">
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `
    });

    setTimeout(() => {
      const items = vm.$el.querySelectorAll('.el-carousel__item');
      expect(items[0].classList.contains('is-active')).to.true;
      setTimeout(() => {
        expect(items[1].classList.contains('is-active')).to.true;
        done();
      }, 60);
    }, 10);
  });

  it('initial index', done => {
    vm = createVue({
      template: `
        <div>
          <el-carousel :auto-play="false" :initial-index="1">
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `
    });

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.el-carousel__item')[1].classList.contains('is-active')).to.true;
      done();
    }, 10);
  });

  it('reset timer', done => {
    vm = createVue({
      template: `
        <div>
          <el-carousel :interval="20">
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `
    });

    setTimeout(() => {
      const carousel = vm.$children[0];
      const items = vm.$el.querySelectorAll('.el-carousel__item');
      carousel.handleMouseEnter();
      setTimeout(() => {
        expect(items[0].classList.contains('is-active')).to.true;
        carousel.handleMouseLeave();
        setTimeout(() => {
          expect(items[1].classList.contains('is-active')).to.true;
          done();
        }, 30);
      }, 20);
    }, 10);
  });

  it('index change', done => {
    vm = createVue({
      template: `
        <div>
          <el-carousel :interval="50" @index-change="handleIndexChange">
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `,
      data() {
        return {
          val: -1,
          oldVal: -1
        };
      },
      methods: {
        handleIndexChange(val, oldVal) {
          this.val = val;
          this.oldVal = oldVal;
        }
      }
    });

    setTimeout(() => {
      expect(vm.val).to.equal(1);
      expect(vm.oldVal).to.equal(0);
      done();
    }, 100);
  });

  describe('manual control', () => {
    it('hover', done => {
      vm = createVue({
        template: `
        <div>
          <el-carousel :auto-play="false">
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `
      });

      setTimeout(() => {
        vm.$children[0].throttledIndicatorHover(1);
        setTimeout(() => {
          expect(vm.$el.querySelectorAll('.el-carousel__item')[1].classList.contains('is-active')).to.true;
          done();
        }, 10);
      }, 10);
    });

    it('click', done => {
      vm = createVue({
        template: `
        <div>
          <el-carousel :auto-play="false" trigger="click">
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `
      });

      setTimeout(() => {
        const items = vm.$el.querySelectorAll('.el-carousel__item');
        vm.$el.querySelectorAll('.el-carousel__indicator')[2].click();
        setTimeout(() => {
          expect(items[2].classList.contains('is-active')).to.true;
          vm.$el.querySelector('.el-carousel__arrow--right').click();
          setTimeout(() => {
            expect(items[0].classList.contains('is-active')).to.true;
            done();
          }, 10);
        }, 10);
      }, 10);
    });
  });

  describe('methods', () => {
    it('setActiveIndex', done => {
      vm = createVue({
        template: `
        <div>
          <el-carousel :auto-play="false">
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `
      });

      setTimeout(() => {
        vm.$children[0].setActiveIndex(1);
        setTimeout(() => {
          expect(vm.$el.querySelectorAll('.el-carousel__item')[1].classList.contains('is-active')).to.true;
          done();
        }, 10);
      }, 10);
    });

    it('slide', done => {
      vm = createVue({
        template: `
        <div>
          <el-carousel :auto-play="false">
            <el-carousel-item v-for="item in 3"></el-carousel-item>
          </el-carousel>
        </div>
      `
      });

      setTimeout(() => {
        vm.$children[0].slideToPrev(1);
        const items = vm.$el.querySelectorAll('.el-carousel__item');
        setTimeout(() => {
          expect(items[2].classList.contains('is-active')).to.true;
          vm.$children[0].slideToNext(1);
          setTimeout(() => {
            expect(items[0].classList.contains('is-active')).to.true;
            done();
          }, 10);
        }, 10);
      }, 10);
    });
  });

  it('card', done => {
    vm = createVue({
      template: `
        <div>
          <el-carousel :auto-play="false" card>
            <el-carousel-item v-for="item in 7"></el-carousel-item>
          </el-carousel>
        </div>
      `
    });

    setTimeout(() => {
      const items = vm.$el.querySelectorAll('.el-carousel__item');
      expect(items[0].classList.contains('is-active')).to.true;
      expect(items[1].classList.contains('is-in-stage')).to.true;
      expect(items[6].classList.contains('is-in-stage')).to.true;
      items[1].click();
      setTimeout(() => {
        expect(items[1].classList.contains('is-active')).to.true;
        vm.$el.querySelector('.el-carousel__arrow--left').click();
        setTimeout(() => {
          expect(items[0].classList.contains('is-active')).to.true;
          items[6].click();
          setTimeout(() => {
            expect(items[6].classList.contains('is-active')).to.true;
            done();
          }, 10);
        }, 10);
      }, 10);
    }, 10);
  });
});

