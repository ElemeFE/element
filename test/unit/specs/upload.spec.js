import { createVue, destroyVM } from '../util.js';
import ajax from 'packages/upload/src/ajax';

const noop = () => {};
const option = {
  onSuccess: noop,
  onProgress: noop,
  data: { a: 'abc', b: 'bcd' },
  filename: 'file.png',
  file: new File([JSON.stringify('foo')], {type: 'image/png'}),
  action: '/upload',
  headers: { region: 'shanghai' }
};
let requests, xhr;
describe('ajax', () => {
  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = req => requests.push(req);
    option.onError = noop;
    option.onSuccess = noop;
  });
  afterEach(() => {
    xhr.restore();
  });
  it('request success', done => {
    option.onError = done;
    option.onSuccess = ret => {
      expect(ret).to.eql({ success: true });
      done();
    };
    ajax(option);
    requests[0].respond(200, {}, '{"success": true}');
  });
  it('request width header', done => {
    ajax(option);
    expect(requests[0].requestHeaders).to.eql({
      region: 'shanghai'
    });
    done();
  });
  it('40x code should be error', done => {
    option.onError = e => {
      expect(e.toString()).to.contain('Not found');
      done();
    };

    option.onSuccess = () => done('404 should throw error');
    ajax(option);
    requests[0].respond(404, {}, 'Not found');
  });
  it('2xx code should be success', done => {
    option.onError = done;
    option.onSuccess = ret => {
      expect(ret).to.equal('');
      done();
    };
    ajax(option);
    requests[0].respond(204, {});
  });
});
describe('Upload', () => {
  let requests;
  let xhr;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = req => requests.push(req);
  });

  afterEach(() => {
    xhr.restore();
  });

  describe('ajax upload', () => {

    let uploader;
    let handlers = {};

    const props = {
      props: {
        action: '/upload',
        onSuccess(res, file, fileList) {
          if (handlers.onSuccess) {
            handlers.onSuccess(res, file, fileList);
          }
        },
        onError(err, file, fileList) {
          if (handlers.onError) {
            handlers.onError(err, file, fileList);
          }
        },
        onPreview(file) {
          if (handlers.onPreview) {
            handlers.onPreview(file);
          }
        },
        limit: 2,
        onExceed(files, fileList) {
          if (handlers.onExceed) {
            handlers.onExceed(files, fileList);
          }
        },
        beforeUpload(file) {
          if (handlers.beforeUpload) {
            return handlers.beforeUpload(file);
          } else {
            return true;
          }
        },
        beforeRemove(file, fileList) {
          if (handlers.beforeRemove) {
            return handlers.beforeRemove(file);
          } else {
            return true;
          }
        }
      }
    };

    beforeEach(() => {
      uploader = createVue({
        render(h) {
          return (
            <el-upload {...props} ref="upload">
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          );
        }
      }, true).$refs.upload;
    });

    afterEach(() => {
      destroyVM(uploader);
      handlers = {};
    });

    it('upload success', done => {
      const file = new Blob([JSON.stringify({}, null, 2)], {
        type: 'application/json'
      });
      file.name = 'success.png';
      const files = [file];

      handlers.onSuccess = (res, file, fileList) => {
        expect(file.name).to.equal('success.png');
        expect(fileList.length).to.equal(1);
        expect(res).to.equal('success.png');
        done();
      };

      uploader.$refs['upload-inner'].handleChange({ target: { files }});

      setTimeout(() => {
        requests[0].respond(200, {}, `${files[0].name}`);
      }, 100);
    });

    it('upload fail', done => {
      const file = new Blob([JSON.stringify({}, null, 2)], {
        type: 'application/json'
      });
      file.name = 'fail.png';
      const files = [file];

      handlers.onError = (err, file, fileList) => {
        expect(err instanceof Error).to.equal(true);
        expect(file.name).to.equal('fail.png');
        done();
      };

      uploader.$refs['upload-inner'].handleChange({ target: { files }});

      setTimeout(() => {
        requests[0].respond(400, {}, 'error 400');
      }, 100);
    });
    it('preview file', done => {
      const file = new Blob([JSON.stringify({}, null, 2)], {
        type: 'application/json'
      });
      file.name = 'success.png';
      const files = [file];

      handlers.onPreview = (file) => {
        expect(file.response).to.equal('success.png');
        done();
      };

      handlers.onSuccess = (res, file, fileList) => {
        uploader.$nextTick(_ => {
          uploader.$el.querySelector('.el-upload-list .is-success a').click();
        });
      };

      uploader.$refs['upload-inner'].handleChange({ target: { files }});

      setTimeout(() => {
        requests[0].respond(200, {}, `${files[0].name}`);
      }, 100);
    });
    it('file remove', done => {
      const file = new Blob([JSON.stringify({}, null, 2)], {
        type: 'application/json'
      });
      file.name = 'success.png';
      const files = [file];

      handlers.onSuccess = (res, file, fileList) => {
        uploader.$el.querySelector('.el-upload-list .el-icon-close').click();
        uploader.$nextTick(_ => {
          expect(uploader.fileList.length).to.equal(0);
          done();
        });
      };

      uploader.$refs['upload-inner'].handleChange({ target: { files }});

      setTimeout(() => {
        requests[0].respond(200, {}, `${files[0].name}`);
      }, 100);
    });
    it('clear files', done => {
      const file = new Blob([JSON.stringify({}, null, 2)], {
        type: 'application/json'
      });
      file.name = 'success.png';
      const files = [file];

      handlers.onSuccess = (res, file, fileList) => {
        uploader.clearFiles();
        uploader.$nextTick(_ => {
          expect(uploader.fileList.length).to.equal(0);
          done();
        });
      };

      uploader.$refs['upload-inner'].handleChange({ target: { files }});

      setTimeout(() => {
        requests[0].respond(200, {}, `${files[0].name}`);
      }, 100);
    });
    it('beforeUpload return promise', done => {
      const spy = sinon.spy();
      const file = new Blob([JSON.stringify({}, null, 2)], {
        type: 'application/json'
      });
      const files = [file];
      handlers.onSuccess = () => {
        expect(spy.calledOnce).to.equal(true);
        done();
      };
      handlers.beforeUpload = (file) => {
        return new window.Promise((resolve) => {
          spy();
          resolve(file);
        });
      };
      uploader.$refs['upload-inner'].handleChange({ target: { files }});
      setTimeout(() => {
        requests[0].respond(200, {}, `${files[0].name}`);
      }, 100);
    });
    it('beforeRemove return rejected promise', done => {
      const spy = sinon.spy();
      handlers.beforeRemove = (file) => {
        return new window.Promise((resolve, reject) => {
          spy();
          reject();
        });
      };
      const file = new Blob([JSON.stringify({}, null, 2)], {
        type: 'application/json'
      });
      file.name = 'success.png';
      const files = [file];

      handlers.onSuccess = (res, file, fileList) => {
        uploader.$el.querySelector('.el-upload-list .el-icon-close').click();
        setTimeout(() => {
          expect(spy.calledOnce).to.equal(true);
          expect(uploader.uploadFiles.length).to.equal(1);
          done();
        }, 200);
      };
      uploader.$refs['upload-inner'].handleChange({ target: { files }});
      setTimeout(() => {
        requests[0].respond(200, {}, `${files[0].name}`);
      }, 100);
    });
    it('limit files', done => {
      const files = [{
        name: 'exceed2.png',
        type: 'xml'
      }, {
        name: 'exceed3.png',
        type: 'xml'
      }];

      uploader.uploadFiles = [{
        name: 'exceed1.png',
        type: 'xml'
      }];

      handlers.onExceed = (files, fileList) => {
        uploader.$nextTick(_ => {
          expect(uploader.uploadFiles.length).to.equal(1);
          done();
        });
      };

      uploader.$nextTick(_ => uploader.$refs['upload-inner'].handleChange({ target: { files }}));
    });
  });
});
