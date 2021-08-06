<style lang="scss" scoped>
  .select-version {
    display: inline-block;
    background: #F6F6F6;
    border-radius: 14px;
    padding: 3px 16px;
  }
  .nav-dropdown {
    width: 100%;

    span {
      display: block;
      width: 100%;
      font-size: 14px;
      line-height: 22px;
      color: #333;
      transition: .2s;
      user-select: none;
      font-weight: 500;
      display: flex;
      align-items: center;

      i {
        margin-left: auto;
      }

      &:hover {
         cursor: pointer;
       }
    }

    i {
      transition: .2s;
      font-size: 12px;
      color: #979797;
    }

    .is-active {
      span, i {
        color: #006DFF;
      }
      i {
        transform: rotateZ(180deg) translateY(3px);
      }
    }

    &:hover {
      span, i {
        color: #006DFF;
      }
    }
  }
  
  .nav-dropdown-list {
    width: auto;
  }

</style>
<template>
  <div class="select-version">
    <el-dropdown
      trigger="click"
      class="nav-dropdown"
      :class="{ 'is-active': verDropdownVisible }">
      <span>
        {{ version }}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu
        slot="dropdown"
        class="nav-dropdown-list"
        @input="handleVerDropdownToggle">
        <el-dropdown-item
          v-for="item in Object.keys(versions)"
          :key="item"
          @click.native="switchVersion(item)">
          {{ item }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  import Element from 'main/index.js';

  const { version } = Element;

  export default {
    data() {
      return {
        active: '',
        versions: [],
        version,
        verDropdownVisible: true
      };
    },

    methods: {
      switchVersion(version) {
        if (version === this.version) return;
        location.href = `${ location.origin }/${ this.versions[version] }/${ location.hash } `;
      },

      handleVerDropdownToggle(visible) {
        this.verDropdownVisible = visible;
      }

    },

    created() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = _ => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const versions = JSON.parse(xhr.responseText);
          this.versions = Object.keys(versions).reduce((prev, next) => {
            prev[next] = versions[next];
            return prev;
          }, {});
        }
      };
      xhr.open('GET', '/versions.json');
      xhr.send();
    }
  };
</script>
