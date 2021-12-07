<script>
  export default {
    name: 'cascaderLi',
    props: {
      index: { // index of current item
        type: Number
      },
      source: { // here is: {uid: 'unique_1', text: 'abc'}
        type: Object,
        default() {
          return {};
        }
      },
      isForceUpdate: {
        type: Boolean,
        default() {
          return false;
        }
      }
    },

    inject: ['cascader'],

    render(h) {
      const { source, LiClick } = this;
      return (
        <li
          key={source.uid}
          class={{
            'el-cascader__suggestion-item': true,
            'is-checked': source.checked
          }}
          tabindex="-1"
          onClick={LiClick}>
          <span>{ source.text }</span>
          {source.checked && <i class="el-icon-check"></i>}
        </li>
      );
    },
    methods: {
      LiClick() {
        this.cascader.handleSuggestionClick(this.index);
      }
    },
    watch: {
      isForceUpdate() {
        this.$$forceUpdate();
      }
    }
  };
</script>