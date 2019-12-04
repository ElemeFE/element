const defaultError = 'Server Error 500';
const defaultTimeout = 'Request Timeout';
const xhr = (method, url, data = null, cb) => {
  return new window.Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const doReject = (xhr) => {
      reject(xhr.response || xhr.statusText || defaultError);
    };
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.timeout = 10000;
    if (cb) cb(xhr);
    xhr.onload = () => {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          let response = xhr.response;
          const type = xhr.getResponseHeader('Content-Type');
          if (type.indexOf('zip') > -1) {
            let filename = 'style.zip';
            const disposition = xhr.getResponseHeader('content-disposition');
            if (disposition && disposition.indexOf('attachment') !== -1) {
              var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
              var matches = filenameRegex.exec(disposition);
              if (matches != null && matches[1]) {
                filename = matches[1].replace(/['"]/g, '');
              }
            }
            var blob = new Blob([response], { type });
            var zipUrl = URL.createObjectURL(blob);
            var link = document.createElement('a');
            link.href = zipUrl;
            link.download = filename;
            link.click();
            resolve(response);
            return;
          }
          try {
            response = JSON.parse(xhr.response);
          } catch (e) {}
          resolve(response);
        } else {
          doReject(xhr);
        }
      } else {
        doReject(xhr);
      }
    };
    xhr.onerror = () => {
      doReject(xhr);
    };
    xhr.ontimeout = () => {
      xhr.abort();
      reject(defaultTimeout);
    };
    xhr.send(JSON.stringify(data));
  });
};

export const post = (url, data, cb) => {
  return xhr('POST', url, data, cb);
};

export const get = (url) => {
  return xhr('GET', url);
};
