import {triggerEvent} from '../util';
import ImagePreview from 'packages/image-preview';

describe('ImagePreview', () => {
  let vm;
  const url = 'https://camo.githubusercontent.com/462f24153b8e8739c8ea71f7102585c4cb0e1575/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667';
  const wideThanLongerImage = 'http://img.zcool.cn/community/01dc195951d604a8012193a3a885a2.jpg@1280w_1l_2o_100sh.jpg';
  const longerThanWideImage = url;

  afterEach(() => {
    if (vm) {
      vm.closePreview();
    }
  });

  it('create', () => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4
    });
    expect(vm.$el).to.exist;
    expect(vm.visible).to.be.true;
  });

  it('close', done => {
    let vm1 = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4
    });

    setTimeout(() => {
      vm1.closePreview();
      expect(vm1.$el).to.be.notExists;
      done();
    }, 300);
  });

  it('image url', () => {

    vm = ImagePreview({
      url: url
    });
    expect(document.getElementsByClassName('preview-image')[0].getAttribute('src')).to.equal(url);
  });

  it('zoomIn', (done) => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let zoomInBtn = previewContainer.getElementsByClassName('el-icon-zoom-in')[0];
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];
      triggerEvent(zoomInBtn, 'click', true);
      expect(imageDom.style.transform.indexOf('scale(1.2)') !== -1).to.be.true;
      triggerEvent(zoomInBtn, 'click', true);
      expect(imageDom.style.transform.indexOf('scale(1.4)') !== -1).to.be.true;
      triggerEvent(zoomInBtn, 'click', true);
      expect(imageDom.style.transform.indexOf('scale(1.6)') !== -1).to.be.true;
      vm.zoomIn(0.3);
      expect(imageDom.style.transform.indexOf('scale(1.9)') !== -1).to.be.true;
      vm.zoomIn(10);
      expect(imageDom.style.transform.indexOf('scale(2)') !== -1).to.be.true;
      done();
    }, 300);
  });

  it('zoomOut', (done) => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let zoomOutBtn = previewContainer.getElementsByClassName('el-icon-zoom-out')[0];
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];
      triggerEvent(zoomOutBtn, 'click', true);
      expect(imageDom.style.transform.indexOf('scale(0.8)') !== -1).to.be.true;
      triggerEvent(zoomOutBtn, 'click', true);
      expect(imageDom.style.transform.indexOf('scale(0.6)') !== -1).to.be.true;
      vm.zoomOut(0.1);
      expect(imageDom.style.transform.indexOf('scale(0.5)') !== -1).to.be.true;
      vm.zoomOut(10);
      expect(imageDom.style.transform.indexOf('scale(0.4)') !== -1).to.be.true;
      done();
    }, 300);
  });

  it('zoomTo', (done) => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 5,
      minZoomValue: 0.6,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];

      vm.zoomTo(2.1);
      expect(imageDom.style.transform.indexOf('scale(2.1)') !== -1).to.be.true;
      vm.zoomTo(10);
      expect(imageDom.style.transform.indexOf('scale(5)') !== -1).to.be.true;
      vm.zoomTo(0.1);
      expect(imageDom.style.transform.indexOf('scale(0.6)') !== -1).to.be.true;
      done();
    }, 300);
  });

  it('rotate', (done) => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let rotateBtn = previewContainer.getElementsByClassName('el-icon-refresh')[0];
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];

      triggerEvent(rotateBtn, 'click', true);
      expect(imageDom.style.transform.indexOf('rotate(90deg)') !== -1).to.be.true;
      triggerEvent(rotateBtn, 'click', true);
      expect(imageDom.style.transform.indexOf('rotate(180deg)') !== -1).to.be.true;
      triggerEvent(rotateBtn, 'click', true);
      triggerEvent(rotateBtn, 'click', true);
      expect(imageDom.style.transform.indexOf('rotate(360deg)') !== -1).to.be.true;
      vm.rotateImage(270);
      expect(imageDom.style.transform.indexOf('rotate(630deg)') !== -1).to.be.true;
      vm.rotateImage(164);
      expect(imageDom.style.transform.indexOf('rotate(884deg)') !== -1).to.be.true;
      done();
    }, 300);
  });

  it('maxZoomValue', done => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let zoomInBtn = previewContainer.getElementsByClassName('el-icon-zoom-in')[0];
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];
      let i = 0;

      while (i < 20) {
        i++;
        triggerEvent(zoomInBtn, 'click', true);
      }

      expect(imageDom.style.transform.indexOf('scale(2)') !== -1).to.be.true;
      done();
    }, 300);
  });

  it('minZoomValue', done => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let zoomOutBtn = previewContainer.getElementsByClassName('el-icon-zoom-out')[0];
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];
      let i = 0;

      while (i < 20) {
        i++;
        triggerEvent(zoomOutBtn, 'click', true);
      }

      expect(imageDom.style.transform.indexOf('scale(0.4)') !== -1).to.be.true;
      done();
    }, 300);
  });

  it('zoom by mousewheel', done => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];

      triggerEvent(imageDom, 'mousewheel');
      expect(imageDom.style.transform.indexOf('scale(0.8)') !== -1).to.be.true;
      triggerEvent(imageDom, 'mousewheel');
      triggerEvent(imageDom, 'mousewheel');
      expect(imageDom.style.transform.indexOf('scale(0.4)') !== -1).to.be.true;
      done();
    }, 300);
  });

  it('translate', done => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];

      triggerEvent(imageDom, 'mousedown');
      expect(vm.isMouseDown).to.be.true;
      triggerEvent(imageDom, 'mousemove', true);
      expect(imageDom.style.transform.indexOf('translateX(0px) translateY(0px)') !== -1).to.be.true;
      triggerEvent(imageDom, 'mouseup', true);
      expect(vm.isMouseDown).to.be.false;
      done();
    }, 300);
  });

  it("image class is 'by-width'", done => {
    vm = ImagePreview({
      url: longerThanWideImage,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];

      expect(imageDom.classList.contains('by-width')).to.be.true;
      done();
    }, 300);
  });

  it("image class is 'by-height'", done => {
    vm = ImagePreview({
      url: wideThanLongerImage,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const previewContainer = vm.$el;
      let imageDom = previewContainer.getElementsByClassName('preview-image')[0];

      expect(imageDom.classList.contains('by-height')).to.be.true;
      done();
    }, 300);
  });

  it('single instance', done => {
    vm = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    let vm1 = ImagePreview({
      url: url,
      height: 400,
      width: '60%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      let vmList = document.getElementsByClassName('el-image-preview');

      expect(vmList.length === 1).to.be.true;
      vm1.closePreview();
      done();
    }, 300);
  });

  it('preview container style property', done => {
    vm = ImagePreview({
      url: url,
      height: 600,
      width: '40%',
      maxZoomValue: 2,
      minZoomValue: 0.4,
      zoomValue: 0.2
    });

    setTimeout(() => {
      const preview = vm.$el;
      const previewContainer = preview.getElementsByClassName('el-image-preview__container')[0];
      const perviewWrapper = preview.getElementsByClassName('el-image-preview__wrapper')[0];
      expect(previewContainer.style.height === '600px').to.be.true;
      expect(previewContainer.style.lineHeight === '560px').to.be.true;
      expect(perviewWrapper.style.width === '40%').to.be.true;
      done();
    }, 300);
  });
});

