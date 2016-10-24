import { createVue } from '../util';

describe('Autocomplete', () => {
  it('create', done => {
    const vm = createVue({
      template: `
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearch"
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
    let elm = vm.$el;
    let inputElm = elm.querySelector('input');
    inputElm.focus();

    expect(inputElm.getAttribute('placeholder')).to.be.equal('请输入内容autocomplete1');

    setTimeout(_ => {
      let suggestionsList = elm.querySelector('.el-autocomplete__suggestions');
      expect(suggestionsList).to.exist;
      expect(suggestionsList.children.length).to.be.equal(4);
      document.body.click();
      setTimeout(_ => {
        expect(elm.querySelector('.el-autocomplete__suggestions')).to.not.exist;
        done();
      }, 500);
    }, 500);
  });
  it('select', done => {
    const vm = createVue({
      template: `
        <el-autocomplete
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容autocomplete2"
          @select="handleSelect"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: '',
          onceSelected: false
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
        },
        handleSelect() {
          this.onceSelected = true;
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    let elm = vm.$el;
    let inputElm = elm.querySelector('input');
    inputElm.focus();

    setTimeout(_ => {
      let suggestionsList = elm.querySelector('.el-autocomplete__suggestions');
      suggestionsList.children[1].click();
      setTimeout(_ => {
        expect(inputElm.value).to.be.equal('Hot honey 首尔炸鸡（仙霞路）');
        expect(vm.state).to.be.equal('Hot honey 首尔炸鸡（仙霞路）');
        expect(vm.onceSelected).to.be.true;
        expect(elm.querySelector('.el-autocomplete__suggestions')).to.not.exist;
        done();
      }, 500);
    }, 500);
  });
  it('highlight', done => {
    const vm = createVue({
      template: `
        <el-autocomplete
          ref="autocomplete"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容autocomplete3"
          @select="handleSelect"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: '',
          onceSelected: false
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
        },
        handleSelect() {
          this.onceSelected = true;
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    let elm = vm.$el;
    let inputElm = elm.querySelector('input');
    inputElm.focus();

    setTimeout(_ => {
      vm.$refs.autocomplete.highlight(8);
      vm.$nextTick(_ => {
        let suggestionsList = elm.querySelector('.el-autocomplete__suggestions');
        let highlightedItem = suggestionsList.children[8];
        expect(highlightedItem.className).to.be.equal('highlighted');
        expect(suggestionsList.scrollTop === highlightedItem.scrollHeight).to.be.true;

        vm.$refs.autocomplete.highlight(8);
        done();
      });
    }, 500);
  });
  it('highlight out of bounds', done => {
    const vm = createVue({
      template: `
        <el-autocomplete
          ref="autocomplete"
          v-model="state"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容autocomplete3"
          @select="handleSelect"
        ></el-autocomplete>
      `,
      data() {
        return {
          restaurants: [],
          state: '',
          onceSelected: false
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
        },
        handleSelect() {
          this.onceSelected = true;
        }
      },
      mounted() {
        this.restaurants = this.loadAll();
      }
    }, true);
    let elm = vm.$el;
    let inputElm = elm.querySelector('input');
    inputElm.focus();

    setTimeout(_ => {
      vm.$refs.autocomplete.highlight(15);
      vm.$nextTick(_ => {
        let suggestionsList = elm.querySelector('.el-autocomplete__suggestions');
        let highlightedItem = suggestionsList.children[11];
        expect(highlightedItem.className).to.be.equal('highlighted');

        vm.$refs.autocomplete.highlight(-5);
        vm.$nextTick(_ => {
          let highlightedItem = suggestionsList.children[0];
          expect(highlightedItem.className).to.be.equal('highlighted');
        });
        done();
      });
    }, 500);
  });
});
