import { createVue, triggerClick, destroyVM } from '../util';

describe('Autocomplete', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });
  it('create', done => {
    vm = createVue({
      template: `
        <div>
          <button class="btn">a</button>
          <el-autocomplete
            ref="autocomplete"
            v-model="state"
            :fetch-suggestions="querySearch"
            placeholder="请输入内容autocomplete1"
          ></el-autocomplete>
        </div>
      `,
      data() {
        return {
          restaurants: [],
          state: ''
        };
      },
      methods: {
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
            { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
            { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
            { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' }
          ];
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    let elm = vm.$el;
    let inputElm = elm.querySelector('input');
    inputElm.focus();

    expect(inputElm.getAttribute('placeholder')).to.be.equal('请输入内容autocomplete1');

    setTimeout(_ => {
      const suggestions = vm.$refs.autocomplete.$refs.suggestions.$el;
      expect(suggestions.style.display).to.not.equal('none');
      expect(suggestions.querySelectorAll('.el-autocomplete-suggestion__list li').length).to.be.equal(4);

      triggerClick(document);
      setTimeout(_ => {
        expect(suggestions.style.display).to.be.equal('none');
        done();
      }, 500);
    }, 500);
  });
  it('select', done => {
    vm = createVue({
      template: `
        <el-autocomplete
          v-model="state"
          ref="autocomplete"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容autocomplete2"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: ''
        };
      },
      methods: {
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
            { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
            { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
            { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' }
          ];
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    const autocomplete = vm.$refs.autocomplete;
    const elm = vm.$el;
    const inputElm = elm.querySelector('input');
    const spy = sinon.spy();

    autocomplete.$on('select', spy);
    inputElm.focus();

    setTimeout(_ => {
      const suggestions = autocomplete.$refs.suggestions.$el;
      const suggestionList = suggestions.querySelectorAll('.el-autocomplete-suggestion__list li');
      suggestionList[1].click();
      setTimeout(_ => {
        expect(inputElm.value).to.be.equal('Hot honey 首尔炸鸡（仙霞路）');
        expect(vm.state).to.be.equal('Hot honey 首尔炸鸡（仙霞路）');
        expect(spy.withArgs().calledOnce).to.be.true;
        expect(suggestions.style.display).to.be.equal('none');
        done();
      }, 500);
    }, 500);
  });
  it('props', done => {
    vm = createVue({
      template: `
        <el-autocomplete
          v-model="state"
          ref="autocomplete"
          value-key="address"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容autocomplete2"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: ''
        };
      },
      methods: {
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            { 'name': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
            { 'name': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
            { 'name': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
            { 'name': '泷千家(天山西路店)', 'address': '天山西路438号' }
          ];
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    const autocomplete = vm.$refs.autocomplete;
    const elm = vm.$el;
    const inputElm = elm.querySelector('input');
    const spy = sinon.spy();

    autocomplete.$on('select', spy);
    inputElm.focus();

    setTimeout(_ => {
      const suggestions = autocomplete.$refs.suggestions.$el;
      const suggestionList = suggestions.querySelectorAll('.el-autocomplete-suggestion__list li');
      expect(suggestionList[1].innerHTML === '上海市长宁区淞虹路661号');
      suggestionList[1].click();
      setTimeout(_ => {
        expect(inputElm.value).to.be.equal('上海市长宁区淞虹路661号');
        expect(vm.state).to.be.equal('上海市长宁区淞虹路661号');
        expect(spy.withArgs().calledOnce).to.be.true;
        expect(suggestions.style.display).to.be.equal('none');
        done();
      }, 500);
    }, 500);
  });
  it('highlight', done => {
    vm = createVue({
      template: `
        <el-autocomplete
          ref="autocomplete"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容autocomplete3"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: ''
        };
      },
      methods: {
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
            { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
            { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
            { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
            { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
            { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
            { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
            { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
            { 'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107' },
            { 'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号' },
            { 'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号' },
            { 'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号' },
            { 'value': 'Monica摩托主题咖啡店', 'address': '嘉定区江桥镇曹安公路2409号1F，2383弄62号1F' },
            { 'value': '浮生若茶（凌空soho店）', 'address': '上海长宁区金钟路968号9号楼地下一层' },
            { 'value': 'NONO JUICE  鲜榨果汁', 'address': '上海市长宁区天山西路119号' },
            { 'value': 'CoCo都可(北新泾店）', 'address': '上海市长宁区仙霞西路' },
            { 'value': '快乐柠檬（神州智慧店）', 'address': '上海市长宁区天山西路567号1层R117号店铺' },
            { 'value': 'Merci Paul cafe', 'address': '上海市普陀区光复西路丹巴路28弄6号楼819' },
            { 'value': '猫山王（西郊百联店）', 'address': '上海市长宁区仙霞西路88号第一层G05-F01-1-306' },
            { 'value': '枪会山', 'address': '上海市普陀区棕榈路' },
            { 'value': '纵食', 'address': '元丰天山花园(东门) 双流路267号' },
            { 'value': '钱记', 'address': '上海市长宁区天山西路' }
          ];
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    const autocomplete = vm.$refs.autocomplete;
    const inputElm = autocomplete.$el.querySelector('input');

    inputElm.focus();

    setTimeout(_ => {
      autocomplete.highlight(8);
      vm.$nextTick(_ => {
        const suggestions = autocomplete.$refs.suggestions.$el.querySelector('.el-autocomplete-suggestion__wrap');
        let suggestionsList = suggestions.querySelectorAll('.el-autocomplete-suggestion__list li');
        let highlightedItem = suggestionsList[8];
        expect(highlightedItem.classList.contains('highlighted')).to.be.true;
        expect(suggestions.scrollTop === highlightedItem.scrollHeight).to.be.true;
        done();
      });
    }, 500);
  });
  it('highlight out of bounds', done => {
    vm = createVue({
      template: `
        <el-autocomplete
          ref="autocomplete"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容autocomplete3"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: ''
        };
      },
      methods: {
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
            { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
            { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
            { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' },
            { 'value': '胖仙女纸杯蛋糕（上海凌空店）', 'address': '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
            { 'value': '贡茶', 'address': '上海市长宁区金钟路633号' },
            { 'value': '豪大大香鸡排超级奶爸', 'address': '上海市嘉定区曹安公路曹安路1685号' },
            { 'value': '茶芝兰（奶茶，手抓饼）', 'address': '上海市普陀区同普路1435号' },
            { 'value': '十二泷町', 'address': '上海市北翟路1444弄81号B幢-107' },
            { 'value': '星移浓缩咖啡', 'address': '上海市嘉定区新郁路817号' },
            { 'value': '阿姨奶茶/豪大大', 'address': '嘉定区曹安路1611号' },
            { 'value': '新麦甜四季甜品炸鸡', 'address': '嘉定区曹安公路2383弄55号' }
          ];
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    const autocomplete = vm.$refs.autocomplete;
    let inputElm = vm.$el.querySelector('input');
    inputElm.focus();

    setTimeout(_ => {
      autocomplete.highlight(15);
      vm.$nextTick(_ => {
        const suggestions = autocomplete.$refs.suggestions.$el;
        const suggestionsList = suggestions.querySelectorAll('.el-autocomplete-suggestion__list li');
        let highlightedItem = suggestionsList[11];
        expect(highlightedItem.className).to.be.equal('highlighted');
        done();
      });
    }, 500);
  });
  it('triggerOnFocus', done => {
    vm = createVue({
      template: `
        <el-autocomplete
          ref="autocomplete"
          v-model="state"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          placeholder="请输入内容autocomplete1"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: ''
        };
      },
      methods: {
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
            { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
            { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
            { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' }
          ];
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    let inputElm = vm.$el.querySelector('input');
    inputElm.focus();

    setTimeout(_ => {
      let suggestions = vm.$refs.autocomplete.$refs.suggestions.$el;
      expect(suggestions.style.display).to.be.equal('none');
      done();
    }, 500);
  });
  it('event:focus & blur', done => {
    vm = createVue({
      template: `
        <el-autocomplete
          ref="input"
          v-model="state"
          :fetch-suggestions="querySearch"
          :trigger-on-focus="false"
          placeholder="请输入内容autocomplete1"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: ''
        };
      },
      methods: {
        querySearch(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
          cb(results);
        },
        createFilter(queryString) {
          return (restaurant) => {
            return (restaurant.value.indexOf(queryString.toLowerCase()) === 0);
          };
        },
        loadAll() {
          return [
            { 'value': '三全鲜食（北新泾店）', 'address': '长宁区新渔路144号' },
            { 'value': 'Hot honey 首尔炸鸡（仙霞路）', 'address': '上海市长宁区淞虹路661号' },
            { 'value': '新旺角茶餐厅', 'address': '上海市普陀区真北路988号创邑金沙谷6号楼113' },
            { 'value': '泷千家(天山西路店)', 'address': '天山西路438号' }
          ];
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);

    const spyFocus = sinon.spy();
    const spyBlur = sinon.spy();

    vm.$refs.input.$on('focus', spyFocus);
    vm.$refs.input.$on('blur', spyBlur);
    vm.$el.querySelector('input').focus();
    vm.$el.querySelector('input').blur();

    vm.$nextTick(_ => {
      expect(spyFocus.calledOnce).to.be.true;
      expect(spyBlur.calledOnce).to.be.true;
      done();
    });
  });
});
