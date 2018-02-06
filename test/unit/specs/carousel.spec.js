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
          <tm-carousel>
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
    });
    expect(vm.$el.querySelectorAll('.tm-carousel__item').length).to.equal(3);
  });

  it('auto play', done => {
    vm = createVue({
      template: `
        <div>
          <tm-carousel :interval="50">
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
    });

    setTimeout(() => {
      const items = vm.$el.querySelectorAll('.tm-carousel__item');
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
          <tm-carousel :autoplay="false" :initial-index="1">
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
    });

    setTimeout(() => {
      expect(vm.$el.querySelectorAll('.tm-carousel__item')[1].classList.contains('is-active')).to.true;
      done();
    }, 10);
  });

  it('reset timer', done => {
    vm = createVue({
      template: `
        <div>
          <tm-carousel :interval="20">
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
    });

    setTimeout(() => {
      const carousel = vm.$children[0];
      const items = vm.$el.querySelectorAll('.tm-carousel__item');
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

  it('change', done => {
    vm = createVue({
      template: `
        <div>
          <tm-carousel :interval="50" @change="handleChange">
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `,
      data() {
        return {
          val: -1,
          oldVal: -1
        };
      },
      methods: {
        handleChange(val, oldVal) {
          this.val = val;
          this.oldVal = oldVal;
        }
      }
    });

    setTimeout(() => {
      expect(vm.val).to.equal(1);
      expect(vm.oldVal).to.equal(0);
      done();
    }, 60);
  });

  it('label', done => {
    vm = createVue({
      template: `
        <div>
          <tm-carousel>
            <tm-carousel-item v-for="item in 3" :key="item" :label="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
    });
    setTimeout(_ => {
      expect(vm.$el.querySelector('.tm-carousel__button').innerText).to.equal('1');
      done();
    }, 10);
  });

  describe('manual control', () => {
    it('hover', done => {
      vm = createVue({
        template: `
        <div>
          <tm-carousel :autoplay="false">
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
      });

      setTimeout(() => {
        vm.$children[0].throttledIndicatorHover(1);
        setTimeout(() => {
          expect(vm.$el.querySelectorAll('.tm-carousel__item')[1].classList.contains('is-active')).to.true;
          done();
        }, 10);
      }, 10);
    });

    it('click', done => {
      vm = createVue({
        template: `
        <div>
          <tm-carousel :autoplay="false" trigger="click" ref="carousel">
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
      });

      setTimeout(() => {
        const items = vm.$el.querySelectorAll('.tm-carousel__item');
        const carousel = vm.$refs.carousel;
        vm.$el.querySelectorAll('.tm-carousel__indicator')[2].click();
        setTimeout(() => {
          expect(items[2].classList.contains('is-active')).to.true;
          carousel.handleButtonEnter('right');
          vm.$el.querySelector('.tm-carousel__arrow--right').click();
          setTimeout(() => {
            expect(items[0].classList.contains('is-active')).to.true;
            done();
          }, 10);
        }, 10);
      }, 10);
    });
  });

  describe('methods', () => {
    it('setActiveItem', done => {
      vm = createVue({
        template: `
        <div>
          <tm-carousel :autoplay="false">
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
      });

      setTimeout(() => {
        vm.$children[0].setActiveItem(1);
        setTimeout(() => {
          expect(vm.$el.querySelectorAll('.tm-carousel__item')[1].classList.contains('is-active')).to.true;
          done();
        }, 10);
      }, 10);
    });

    it('slide', done => {
      vm = createVue({
        template: `
        <div>
          <tm-carousel :autoplay="false">
            <tm-carousel-item v-for="item in 3" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
      });

      setTimeout(() => {
        vm.$children[0].prev(1);
        const items = vm.$el.querySelectorAll('.tm-carousel__item');
        setTimeout(() => {
          expect(items[2].classList.contains('is-active')).to.true;
          vm.$children[0].next(1);
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
          <tm-carousel :autoplay="false" type="card">
            <tm-carousel-item v-for="item in 7" :key="item"></tm-carousel-item>
          </tm-carousel>
        </div>
      `
    });

    setTimeout(() => {
      const items = vm.$el.querySelectorAll('.tm-carousel__item');
      expect(items[0].classList.contains('is-active')).to.true;
      expect(items[1].classList.contains('is-in-stage')).to.true;
      expect(items[6].classList.contains('is-in-stage')).to.true;
      items[1].click();
      setTimeout(() => {
        expect(items[1].classList.contains('is-active')).to.true;
        vm.$el.querySelector('.tm-carousel__arrow--left').click();
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

