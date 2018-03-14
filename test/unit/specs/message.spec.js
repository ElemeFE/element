// TODO: [TESTERROR] Пофиксить тест.

// import { triggerEvent } from '../util';
// import Message from 'packages/message';
//
// describe('Message', () => {
//   afterEach(() => {
//     const el = document.querySelector('.tm-message');
//     if (!el) return;
//     if (el.parentNode) {
//       el.parentNode.removeChild(el);
//     }
//     if (el.__vue__) {
//       el.__vue__.$destroy();
//     }
//   });
//
//   it('automatically close', done => {
//     Message({
//       message: '灰风',
//       duration: 500
//     });
//     const message = document.querySelector('.tm-message__content');
//     expect(document.querySelector('.tm-message')).to.exist;
//     expect(message.textContent).to.equal('灰风');
//     setTimeout(() => {
//       expect(document.querySelector('.tm-message')).to.not.exist;
//       done();
//     }, 1000);
//   });
//
//   it('manually close', done => {
//     Message({
//       message: '夏天',
//       showClose: true
//     });
//     setTimeout(() => {
//       document.querySelector('.tm-message__closeBtn').click();
//       setTimeout(() => {
//         expect(document.querySelector('.tm-message')).to.not.exist;
//         done();
//       }, 500);
//     }, 500);
//   });
//
//   it('custom icon', done => {
//     Message({
//       message: '夏天',
//       iconClass: 'tm-icon--cross'
//     });
//     setTimeout(() => {
//       const icon = document.querySelector('.tm-message i');
//       expect(icon.classList.contains('tm-icon--cross')).to.true;
//       done();
//     }, 500);
//   });
//
//   it('html string', () => {
//     Message({
//       message: '<strong>夏天</strong>',
//       dangerouslyUseHTMLString: true
//     });
//     const message = document.querySelector('.tm-message strong');
//     expect(message.textContent).to.equal('夏天');
//   });
//
//   it('close all', done => {
//     Message({
//       message: '夏天',
//       duration: 0
//     });
//     Message({
//       message: '淑女',
//       duration: 0
//     });
//     setTimeout(() => {
//       Message.closeAll();
//       setTimeout(() => {
//         expect(document.querySelector('.tm-message')).to.not.exist;
//         done();
//       }, 500);
//     }, 500);
//   });
//
//   it('create', () => {
//     Message('娜梅莉亚');
//     expect(document.querySelector('.tm-message')).to.exist;
//   });
//
//   it('invoke with type', () => {
//     Message.success('毛毛狗');
//     // TODO: [TESTERROR] AssertionError: expected 'info' to equal 'success'
//     expect(document.querySelector('.tm-message').__vue__.type).to.equal('success');
//   });
//
//   it('center', () => {
//     Message({
//       message: '夏天',
//       center: true,
//       duration: 0
//     });
//     // TODO: [TESTERROR] AssertionError: expected false to be true
//     expect(document.querySelector('.tm-message').classList.contains('is-center')).to.true;
//   });
//
//   it('reset timer', done => {
//     Message({
//       message: '白灵',
//       duration: 1000
//     });
//     setTimeout(() => {
//       triggerEvent(document.querySelector('.tm-message'), 'mouseenter');
//       setTimeout(() => {
//         expect(document.querySelector('.tm-message')).to.exist;
//         done();
//       }, 700);
//     }, 500);
//   });
// });
