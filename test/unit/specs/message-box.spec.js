import MessageBox from 'packages/message-box';

describe('MessageBox', () => {
  let hasPromise = true;
  before(() => {
    if (!window.Promise) {
      hasPromise = false;
      window.Promise = require('es6-promise').Promise;
    }
  });

  after(() => {
    if (!hasPromise) {
      window.Promise = undefined;
    }
  });

  afterEach(() => {
    const el = document.querySelector('.el-message-box__wrapper');
    if (!el) return;
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
    MessageBox.close();
  });

  it('create and close', done => {
    MessageBox({
      type: 'success',
      title: '消息',
      message: '这是一段内容'
    });
    setTimeout(() => {
      const msgbox = document.querySelector('.el-message-box__wrapper');
      expect(msgbox.__vue__.$parent.visible).to.true;
      expect(msgbox.querySelector('.el-message-box__title').textContent).to.equal('消息');
      expect(msgbox.querySelector('.el-message-box__message')
        .querySelector('p').textContent).to.equal('这是一段内容');
      MessageBox.close();
      expect(msgbox.__vue__.$parent.visible).to.false;
      done();
    }, 300);
  });

  it('invoke with strings', done => {
    MessageBox('消息', '这是一段内容', 'success');
    setTimeout(() => {
      expect(document.querySelector('.el-message-box__wrapper')).to.exist;
      done();
    }, 300);
  });

  it('alert', done => {
    MessageBox.alert('这是一段内容', {
      title: '标题名称',
      type: 'warning'
    });
    setTimeout(() => {
      document.querySelector('.v-modal').click();
      expect(document.querySelector('.el-message-box__wrapper')
        .__vue__.$parent.visible).to.true;
      expect(document.querySelector('.el-message-box__wrapper')
        .__vue__.$parent.type).to.equal('warning');
      done();
    }, 300);
  });

  it('confirm', done => {
    MessageBox.confirm('这是一段内容', {
      title: '标题名称',
      type: 'warning'
    });
    setTimeout(() => {
      document.querySelector('.el-message-box__wrapper')
        .querySelector('.el-button--primary').click();
      expect(document.querySelector('.el-message-box__wrapper')
        .__vue__.$parent.visible).to.false;
      done();
    }, 200);
  });

  it('prompt', done => {
    MessageBox.prompt('这是一段内容', {
      title: '标题名称',
      inputPattern: /test/,
      inputErrorMessage: 'validation failed'
    });
    setTimeout(() => {
      expect(document.querySelector('.el-message-box__input')).to.exist;
      const messageBox = document.querySelector('.el-message-box__wrapper').__vue__.$parent;
      messageBox.inputValue = 'no';
      setTimeout(() => {
        expect(document.querySelector('.el-message-box__errormsg')
          .textContent).to.equal('validation failed');
        done();
      }, 100);
    }, 200);
  });

  describe('custom validator', () => {
    it('returns a string', done => {
      const validator = value => {
        if (value !== 'test') return 'wrong';
        return true;
      };
      MessageBox.prompt('这是一段内容', {
        title: '标题名称',
        inputValidator: validator
      });
      setTimeout(() => {
        const messageBox = document.querySelector('.el-message-box__wrapper').__vue__.$parent;
        messageBox.inputValue = 'no';
        setTimeout(() => {
          expect(document.querySelector('.el-message-box__errormsg')
            .textContent).to.equal('wrong');
          messageBox.inputValue = 'test';
          setTimeout(() => {
            expect(document.querySelector('.el-message-box__errormsg')
              .textContent).to.equal('');
            done();
          }, 100);
        }, 100);
      }, 200);
    });

    it('returns false', done => {
      const validator = value => false;
      MessageBox.prompt('这是一段内容', {
        title: '标题名称',
        inputValidator: validator
      });
      setTimeout(() => {
        const messageBox = document.querySelector('.el-message-box__wrapper').__vue__.$parent;
        messageBox.inputValue = 'no';
        setTimeout(() => {
          expect(document.querySelector('.el-message-box__errormsg')
            .textContent).to.equal('输入的数据不合法!');
          done();
        }, 100);
      }, 200);
    });
  });

  it('callback', done => {
    let msgAction = '';
    MessageBox({
      title: '消息',
      message: '这是一段内容'
    }, action => {
      msgAction = action;
    });
    setTimeout(() => {
      document.querySelector('.el-message-box__close').click();
      expect(msgAction).to.equal('cancel');
      done();
    }, 50);
  });

  it('beforeClose', done => {
    let msgAction = '';
    MessageBox({
      title: '消息',
      message: '这是一段内容',
      beforeClose: (action, instance) => {
        instance.close();
      }
    }, action => {
      msgAction = action;
    });
    setTimeout(() => {
      document.querySelector('.el-message-box__wrapper .el-button--primary').click();
      setTimeout(() => {
        expect(msgAction).to.equal('confirm');
        done();
      }, 10);
    }, 10);
  });

  describe('promise', () => {
    it('resolve', done => {
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示')
        .then(action => {
          expect(action).to.equal('confirm');
          done();
        });
      setTimeout(() => {
        document.querySelector('.el-message-box__wrapper .el-button--primary').click();
      }, 50);
    });

    it('reject', done => {
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示')
        .catch(action => {
          expect(action).to.equal('cancel');
          done();
        });
      setTimeout(() => {
        document.querySelector('.el-message-box__wrapper .el-button').click();
      }, 50);
    });
  });
});
