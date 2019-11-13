import { createTest, createVue, destroyVM } from '../util';
import DataMapper from 'packages/data-mapper';

describe('DataMapper', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(DataMapper, true);
    let dataMapperEle = vm.$el;
    expect(dataMapperEle.classList.contains('el-data-mapper')).to.be.true;
  });

  it('formatter', done => {
    let data = {
      name: '韩梅梅',
      grade: '女',
      age: '18'
    };
    vm = createVue({
      methods: {
        formatter(data, col, index) {
          return `[${data.name}]`;
        }
      }
    }, true);
    vm.$el.querySelectorAll('.el-data-mapper-col .el-col .el-data-mapper-col-title .el-data-mapper-col-content');
    setTimeout(() =>{
      expect(`[${data.name}]`).to.exist;
      done();
    }, 10);
  });

  it('renderCol', done => {
    vm = createVue({
      template: `
        <el-data-mapper :data="data" :columns="columns" placeholder="-"></el-data-mapper>
      `,
      data() {
        return {
          data: {},
          columns: []
        };
      }
    }, true);
    const colEle = vm.$el.children[0];
    setTimeout(() =>{
      expect(colEle.querySelectorAll('.el-data-mapper-col .el-col .el-data-mapper-col-title .el-data-mapper-col-content .mapper-content')).to.exist;
      done();
    }, 10);
  });

  it('contentRows', () => {
    vm = createVue({
      template: `
        <el-data-mapper :data="data" :columns="columns" placeholder="-" :contentRows="contentRows"></el-data-mapper>
      `,
      data() {
        return {
          data: {
            name: '韩梅梅',
            grade: '女',
            age: '18',
            adress: '中国广东省广州市海珠区大塘'
          },
          columns: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'grade'
            },
            {
              label: '年龄',
              prop: 'age'
            },
            {
              label: '地址',
              prop: 'adress'
            }
          ],
          contentRows: 4
        };
      }
    }, true);
    let contentRowsElm = vm.$el.children[0].children[0].children[1].children[0];
    expect(contentRowsElm.style.webkitLineClamp).to.equal('4');
  });
  it('contentRows', () => {
    vm = createVue({
      template: `
        <el-data-mapper :data="data" :columns="columns" placeholder="-" :contentRows="contentRows"></el-data-mapper>
      `,
      data() {
        return {
          data: {
            name: '韩梅梅',
            grade: '女',
            age: '18',
            adress: '中国广东省广州市海珠区大塘'
          },
          columns: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'grade'
            },
            {
              label: '年龄',
              prop: 'age'
            },
            {
              label: '地址',
              prop: 'adress'
            }
          ],
          contentRows: 4
        };
      }
    }, true);
    let contentRowsElm = vm.$el.children[0].children[0].children[1].children[0];
    expect(contentRowsElm.style.webkitLineClamp).to.equal('4');
  });

  it('inline', () => {
    vm = createVue({
      template: `
        <el-data-mapper :inline='inline' :data="data" :columns="columns" placeholder="-" :contentRows="contentRows"></el-data-mapper>
      `,
      data() {
        return {
          inline: false,
          data: {
            name: '韩梅梅',
            grade: '女',
            age: '18',
            adress: '中国广东省广州市海珠区大塘'
          },
          columns: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'grade'
            },
            {
              label: '年龄',
              prop: 'age'
            },
            {
              label: '地址',
              prop: 'adress'
            }
          ],
          contentRows: 4
        };
      }
    }, true);
    let contentRowsElm = vm.$el.children[0].children[0];
    expect(contentRowsElm.classList.contains('el-data-mapper-col-vertical')).to.true;
  });

  it('labelWidth', () => {
    vm = createVue({
      template: `
        <el-data-mapper labelWidth="900px" :data="data" :columns="columns"></el-data-mapper>
      `,
      data() {
        return {
          data: {
            name: '韩梅梅',
            grade: '女'
          },
          columns: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'grade'
            }
          ]
        };
      }
    }, true);
    let contentRowsElm = vm.$el.children[0].children[0].children[0];
    expect(contentRowsElm.style.width === '900px').to.true;
  });

  it('labelPosition to be left', () => {
    vm = createVue({
      template: `
        <el-data-mapper labelPosition="left" :data="data" :columns="columns"></el-data-mapper>
      `,
      data() {
        return {
          data: {
            name: '韩梅梅',
            grade: '女'
          },
          columns: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'grade'
            }
          ]
        };
      }
    }, true);
    let contentRowsElm = vm.$el.children[0].children[0].children[0];
    expect(contentRowsElm.classList.contains('el-data-mapper-col-title-left')).to.true;
  });

  it('labelPosition to be right', () => {
    vm = createVue({
      template: `
        <el-data-mapper labelPosition="right" :data="data" :columns="columns"></el-data-mapper>
      `,
      data() {
        return {
          data: {
            name: '韩梅梅',
            grade: '女'
          },
          columns: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'grade'
            }
          ]
        };
      }
    }, true);
    let contentRowsElm = vm.$el.children[0].children[0].children[0];
    expect(contentRowsElm.classList.contains('el-data-mapper-col-title-right')).to.true;
  });

  it('labelPosition to be top', () => {
    vm = createVue({
      template: `
        <el-data-mapper labelPosition="top" :data="data" :columns="columns"></el-data-mapper>
      `,
      data() {
        return {
          data: {
            name: '韩梅梅',
            grade: '女'
          },
          columns: [
            {
              label: '姓名',
              prop: 'name'
            },
            {
              label: '性别',
              prop: 'grade'
            }
          ]
        };
      }
    }, true);
    const parentContent = vm.$el.children[0].children[0];
    let contentRowsElm = parentContent.children[0];
    expect(parentContent.classList.contains('el-data-mapper-col-top')).to.true;
    expect(contentRowsElm.classList.contains('el-data-mapper-col-title-top')).to.true;
  });
});
