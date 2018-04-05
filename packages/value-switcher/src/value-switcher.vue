<template>
  <div class="tm-value-switcher">
    <tm-autocomplete :fetch-suggestions="fetchSuggestions"
                     :placeholder="leftPlaceholder"
                     :suffix-icon="suffixIcon"
                     v-model="labelLeft"
                     @select="onPlaceSelect($event, true)">
      <template scope="props">
        <tm-value-switcher-item :title="props.item.title"></tm-value-switcher-item>
      </template>
    </tm-autocomplete>
    <tm-button>
      <tm-icon name="airplane"
               @click="onSwitch"></tm-icon>
    </tm-button>
    <tm-autocomplete :fetch-suggestions="fetchSuggestions"
                     :placeholder="rightPlaceholder"
                     :suffix-icon="suffixIcon"
                     v-model="labelRight"
                     @select="onPlaceSelect($event, false)">
      <template scope="props">
        <tm-value-switcher-item :title="props.item.title"></tm-value-switcher-item>
      </template>
    </tm-autocomplete>
  </div>
</template>
<script>
  import TmAutocomplete from '../../autocomplete/src/autocomplete';
  import TmValueSwitcherItem from './value-switcher-item';
  import TmFormGroupItem from '../../form/src/form-group-item';
  import TmButton from '../../button/src/button';
  import TmIcon from '../../icon/src/icon';
  export default {
    components: {
      TmIcon,
      TmButton,
      TmFormGroupItem,
      TmValueSwitcherItem,
      TmAutocomplete
    },
    name: 'TmValueSwitcher',
    props: {
      suffixIcon: String,
      leftPlaceholder: String,
      rightPlaceholder: String,
      fetchSuggestions: Function
    },
    data() {
      return {
        modelLeft: null,
        modelRight: null,
        labelLeft: null,
        labelRight: null
      };
    },
    methods: {
      onSwitch() {
        let modelRight = this.modelRight;
        this.modelRight = this.modelLeft;
        this.modelLeft = modelRight;
        let labelRight = this.labelRight;
        this.labelRight = this.labelLeft;
        this.labelLeft = labelRight;
        this.onChange();
      },
      onChange() {
        this.$emit('change', [this.modelLeft, this.modelRight]);
      },
      onPlaceSelect(value, isLeft) {
        if (isLeft) {
          this.modelLeft = value;
          this.labelLeft = value.title;
        } else {
          this.modelRight = value;
          this.labelRight = value.title;
        }
        this.onChange();
      }
    },
    watch: {
      modelA() {
        this.modelLeft = this.modelA;
      },
      modelB() {
        this.modelRight = this.modelB;
      }
    }
  };
</script>