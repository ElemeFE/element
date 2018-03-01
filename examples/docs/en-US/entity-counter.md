<style>
  .demo-box {
    .tm-dropdown {
      vertical-align: top;

      & + .tm-dropdown {
        margin-left: 15px;
      }
    }
    .tm-dropdown-link {
      cursor: pointer;
      color: #409EFF;
    }
    .tm-icon-arrow-down {
      font-size: 12px;
    }
  }

  .block-col-2 {
    margin: -24px;

    .tm-col {
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;

      &:last-child {
        border-right: 0;
      }
    }
  }

 .demo-dropdown .demonstration {
   display: block;
   color: #8492a6;
   font-size: 14px;
   margin-bottom: 20px;
 }
</style>

<script>
  export default {
    methods: {
      handleClick() {
        alert('button click');
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>
## Entity Counter

### Basic usage
ghjdgfjhgfj

:::demo

```html
<tm-dropdown>
  <span class="tm-dropdown-link">
    Dropdown List <tm-icon name="arrow-down" class="tm-dropdown__icon"></tm-icon>
  </span>
  <tm-dropdown-menu slot="dropdown">
    <tm-dropdown-item>
      <tm-icon name="pencil" class="tm-dropdown-menu__icon"></tm-icon>
      Action 1
    </tm-dropdown-item>
    <tm-dropdown-item>Action 2</tm-dropdown-item>
    <tm-dropdown-item>Action 3</tm-dropdown-item>
    <tm-dropdown-item disabled>Action 4</tm-dropdown-item>
    <tm-dropdown-item divided>Action 5</tm-dropdown-item>
  </tm-dropdown-menu>
</tm-dropdown>

<style>
  .tm-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .tm-icon-arrow-down {
    font-size: 12px;
  }
</style>

```

:::

