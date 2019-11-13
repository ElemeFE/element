import { createTest, destroyVM } from '../util';
import Empty from 'packages/empty';

describe('Empty', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Empty, true);
    expect(vm.$el).to.exist;
  });

  it('description', () => {
    vm = createTest(Empty, {
      description: '我是描述'
    });
    expect(vm.$el.querySelector('.el-empty-description').innerHTML).to.equal('我是描述');
  });

  it('image', () => {
    vm = createTest(Empty, {
      image: 'http://empty.image.com/empty.png'
    });
    expect(vm.$el.querySelector('img').src).to.equal('http://empty.image.com/empty.png');
  });

});
