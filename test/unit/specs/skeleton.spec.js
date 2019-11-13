import { createTest, destroyVM } from '../util';
import Skeleton from 'packages/skeleton';

describe('Skeleton', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Skeleton, true);
    expect(vm.$el).to.exist;
  });

  describe('avatar', () => {
    it('size small', () => {
      vm = createTest(Skeleton, { avatar: { size: 'small' } }, true);
      expect(vm.$el.classList.contains('el-skeleton-with-avatar')).to.true;
      expect(vm.$children[0].$el.classList.contains('el-skeleton-avatar-sm')).to.true;
    });
    it('size large', () => {
      vm = createTest(Skeleton, { avatar: { size: 'large' } }, true);
      expect(vm.$el.classList.contains('el-skeleton-with-avatar')).to.true;
      expect(vm.$children[0].$el.classList.contains('el-skeleton-avatar-lg')).to.true;
    });

    it('shape circle', () => {
      vm = createTest(Skeleton, { avatar: { shape: 'circle' } }, true);
      expect(vm.$children[0].$el.classList.contains('el-skeleton-avatar-circle')).to.true;
    });

    it('shape square', () => {
      vm = createTest(Skeleton, { avatar: { shape: 'square' } }, true);
      expect(vm.$children[0].$el.classList.contains('el-skeleton-avatar-square')).to.true;
    });
  });

  describe('title', () => {
    it('width', () => {
      vm = createTest(Skeleton, { title: { width: '93%' } }, true);
      expect(vm.$children[0].$el.style.width).to.equal('93%');
    });
  });

  describe('paragraph', () => {
    it('rows', () => {
      vm = createTest(Skeleton, { paragraph: { rows: 5 } }, true);
      expect(vm.$el.querySelector('.el-skeleton-paragraph').children.length).to.equal(5);
    });
    it('width 93%', () => {
      vm = createTest(Skeleton, { paragraph: { width: '93%' } }, true);
      const childrenList = vm.$el.querySelector('.el-skeleton-paragraph').children;
      expect(childrenList[childrenList.length - 1].style.width).to.equal('93%');
    });
    it('width 28% 93%', () => {
      vm = createTest(Skeleton, { paragraph: { width: ['28%', '93%'] } }, true);
      const childrenList = vm.$el.querySelector('.el-skeleton-paragraph').children;
      expect(childrenList[0].style.width).to.equal('28%');
      expect(childrenList[1].style.width).to.equal('93%');
    });
  });
});
