<script>
  export default {
    name: 'FilterDropdown',
    props: {
      renderDropdown: Function,
      setFilterValues: Function,
      hideDropdown: Function
    },
    methods: {
      resetFilter() {
        this.setFilterValues([]);
      }
    },
    render(h) {
      const { renderDropdown, setFilterValues, resetFilter, hideDropdown } = this;
      return renderDropdown({ setFilterValues, resetFilter, hideDropdown });

    }
  };
</script>
