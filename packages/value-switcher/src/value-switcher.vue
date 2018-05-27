<template>
  <div class="tm-value-switcher">
    <tm-autocomplete class="tm-value-switcher__autocomplete"
                     :size="size"
                     popper-class="tm-popper__autocomplete"
                     :fetch-suggestions="fetchSuggestions"
                     :placeholder="leftPlaceholder"
                     :suffix-icon="suffixIconLeft"
                     v-model="labelLeft"
                     :clearable="clearable"
                     @select="onPlaceSelect($event, true)">
      <template slot-scope="props">
        <tm-value-switcher-item :title="props.item.title"
                                :icon="props.item.icon"
                                :code="props.item.code"
                                :description="props.item.description"></tm-value-switcher-item>
      </template>
    </tm-autocomplete>
    <tm-button class="tm-value-switcher__btn"
               :size="size"
               icon="arrows-reverse"
               @click="onSwitch"></tm-button>
    <tm-autocomplete class="tm-value-switcher__autocomplete"
                     :size="size"
                     popper-class="tm-popper__autocomplete"
                     :fetch-suggestions="fetchSuggestions"
                     :placeholder="rightPlaceholder"
                     :clearable="clearable"
                     :suffix-icon="suffixIconRight"
                     v-model="labelRight"
                     @select="onPlaceSelect($event, false)">
      <template slot-scope="props">
        <tm-value-switcher-item :title="props.item.title"
                                :icon="props.item.icon"
                                :code="props.item.code"
                                :description="props.item.description"></tm-value-switcher-item>
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
      suffixIconLeft: String,
      suffixIconRight: String,
      leftPlaceholder: String,
      rightPlaceholder: String,
      fetchSuggestions: Function,
      size: {
        type: String,
        default: 'large'
      },
      clearable: {
        type: Boolean,
        default: false
      }
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