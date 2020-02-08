<template>
  <el-autocomplete
    v-model="query"
    size="small"
    :popper-class="`algolia-search${ isEmpty ? ' is-empty' : '' }`"
    :fetch-suggestions="querySearch"
    :placeholder="placeholder"
    :trigger-on-focus="false"
    @select="handleSelect"
    highlight-first-item>
    <template slot-scope="props">
      <p class="algolia-search-title" v-if="props.item.title">
        <span v-html="props.item.highlightedCompo"></span>
        <span class="algolia-search-separator"></span>
        <span v-html="props.item.title"></span>
      </p>
      <p
        class="algolia-search-content"
        v-if="props.item.content"
        v-html="props.item.content"></p>
      <a
        class="algolia-search-link"
        v-if="props.item.img"
        target="_blank"
        href="https://www.algolia.com/docsearch">
        <img
          class="algolia-search-logo"
          src="../assets/images/search-by-algolia.svg"
          alt="algolia-logo">
      </a>
      <p
        class="algolia-search-empty"
        v-if="props.item.isEmpty">{{ emptyText }}</p>
    </template>
  </el-autocomplete>
</template>

<style lang="scss">
  .algolia-search {
    width: 450px !important;

    &.is-empty {
      .el-autocomplete-suggestion__list {
        padding-bottom: 0;
      }
    }

    .el-autocomplete-suggestion__list {
      position: static !important;
      padding-bottom: 28px;
    }

    li {
      border-bottom: solid 1px #ebebeb;

      &:last-child {
         border-bottom: none;
       }
    }

    .algolia-highlight {
      color: #409EFF;
      font-weight: bold;
    }

    .algolia-search-title {
      font-size: 14px;
      margin: 6px 0;
      line-height: 1.8;
    }

    .algolia-search-separator {
      padding: 0 6px;
    }

    .algolia-search-content {
      font-size: 12px;
      margin: 6px 0;
      line-height: 2.4;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .algolia-search-link {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding-right: 20px;
      background-color: #e4e7ed;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-sizing: border-box;
      text-align: right;

      &:hover {
         background-color: #e4e7ed;
       }

      img {
        display: inline-block;
        height: 17px;
        margin-top: 10px;
      }
    }

    .algolia-search-empty {
      margin: 5px 0;
      text-align: center;
      color: #999;
    }
  }
</style>

<script>
  import algoliasearch from 'algoliasearch';

  export default {
    data() {
      return {
        index: null,
        query: '',
        isEmpty: false,
        langs: {
          'zh-CN': {
            search: '搜索文档',
            empty: '无匹配结果',
            index: 'zh'
          },
          'en-US': {
            search: 'Search',
            empty: 'No results',
            index: 'en'
          },
          'es': {
            search: 'Buscar',
            empty: 'No hay datos que coincidan',
            index: 'es'
          },
          'fr-FR': {
            search: 'Rechercher',
            empty: 'Aucun résultat',
            index: 'fr'
          }
        }
      };
    },

    computed: {
      lang() {
        return this.$route.meta.lang;
      },

      placeholder() {
        return this.lang ? this.langs[this.lang].search : '';
      },

      emptyText() {
        return this.lang ? this.langs[this.lang].empty : '';
      }
    },

    watch: {
      lang() {
        this.initIndex();
      }
    },

    methods: {
      initIndex() {
        const client = algoliasearch('4C63BTGP6S', '0729c3c7f4dc8db7395ad0b19c0748d2');
        this.index = client.initIndex(`element-${ this.lang ? this.langs[this.lang].index : 'zh' }`);
      },

      querySearch(query, cb) {
        if (!query) return;
        this.index.search({ query, hitsPerPage: 6 }, (err, res) => {
          if (err) {
            console.error(err);
            return;
          }
          if (res.hits.length > 0) {
            this.isEmpty = false;
            cb(res.hits.map(hit => {
              let content = hit._highlightResult.content.value.replace(/\s+/g, ' ');
              const highlightStart = content.indexOf('<span class="algolia-highlight">');
              if (highlightStart > -1) {
                const startEllipsis = highlightStart - 15 > 0;
                content = (startEllipsis ? '...' : '') +
                  content.slice(Math.max(0, highlightStart - 15), content.length);
              } else if (content.indexOf('|') > -1) {
                content = '';
              }
              return {
                anchor: hit.anchor,
                component: hit.component,
                highlightedCompo: hit._highlightResult.component.value,
                title: hit._highlightResult.title.value,
                content
              };
            }).concat({ img: true }));
          } else {
            this.isEmpty = true;
            cb([{ isEmpty: true }]);
          }
        });
      },

      handleSelect(val) {
        if (val.img || val.isEmpty) return;
        const component = val.component || '';
        const anchor = val.anchor;
        this.$router.push(`/${ this.lang }/component/${ component }${ anchor ? `#${ anchor }` : '' }`);
      }
    },

    mounted() {
      this.initIndex();
    }
  };
</script>
