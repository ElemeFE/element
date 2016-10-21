import Clickoutside from 'element-ui/src/utils/clickoutside';
const ctx = '@@clickoutsideContext';

describe('Utils:Clickoutside', () => {
  it('create', () => {
    let count = 0;
    const el = document.createElement('div');
    const vnode = {
      context: {
        handleClick: () => ++count
      }
    };
    const binding = {
      expression: 'handleClick'
    };

    Clickoutside.bind(el, binding, vnode);
    expect(el[ctx]).to.exist;
  });

  it('cotext not exist', () => {
    const el = document.createElement('div');
    const vnode = {};
    const binding = {
      expression: 'handleClick'
    };

    Clickoutside.bind(el, binding, vnode);
    expect(el[ctx]).to.exist;
  });

  it('binding expression', () => {
    const el = document.createElement('div');
    let count = 0;
    const vnode = {
      context: {
        handleClick: () => ++count
      }
    };
    const binding = {
      expression: 'handleClick'
    };

    Clickoutside.bind(el, binding, vnode);
    document.body.click();
    expect(count).to.equal(1);
  });

  it('click inside', () => {
    const el = document.createElement('div');
    const insideElm = document.createElement('div');
    let count = 0;
    const vnode = {
      context: {
        handleClick: () => ++count
      }
    };
    const binding = {
      expression: 'handleClick'
    };

    el.appendChild(insideElm);
    Clickoutside.bind(el, binding, vnode);
    insideElm.click();
    expect(count).to.equal(0);
    document.body.click();
    expect(count).to.equal(1);
  });

  it('tigger event in popperElm', () => {
    const el = document.createElement('div');
    const insideElm = document.createElement('div');
    let count = 0;
    const vnode = {
      context: {
        handleClick: () => ++count,
        popperElm: document.createElement('div')
      }
    };
    const binding = {
      expression: 'handleClick'
    };

    vnode.context.popperElm.appendChild(insideElm);
    Clickoutside.bind(el, binding, vnode);
    insideElm.click();
    expect(count).to.equal(0);
    document.body.click();
    expect(count).to.equal(1);
  });

  it('binding value', () => {
    const el = document.createElement('div');
    let count = 0;
    const vnode = {
      context: {}
    };
    const binding = {
      value: () => ++count
    };

    Clickoutside.bind(el, binding, vnode);
    expect(count).to.equal(0);
    document.body.click();
    expect(count).to.equal(1);
  });

  it('update', () => {
    let count = 0;
    const el = document.createElement('div');
    const vnode = {
      context: {
        abc: () => ++count,
        ddd: () => ++count
      }
    };
    const binding = {
      expression: 'abc'
    };

    const newBinding = {
      expression: 'ddd'
    };

    Clickoutside.bind(el, binding, vnode);
    expect(el[ctx].methodName).to.equal('abc');
    Clickoutside.update(el, newBinding);
    expect(el[ctx].methodName).to.equal('ddd');
  });

  it('unbind', () => {
    const el = document.createElement('div');
    let count = 0;
    const vnode = {
      context: {}
    };
    const binding = {
      value: () => ++count
    };

    Clickoutside.bind(el, binding, vnode);
    document.body.click();
    Clickoutside.unbind(el);
    document.body.click();
    expect(count).to.equal(1);
    expect(el[ctx]).to.not.exist;
  });
});
