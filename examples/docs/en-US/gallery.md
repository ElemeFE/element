<script>
  export default {
    data: function () {
      return {
        images: [
        {src: "https://images.aanda.ru/photos/2150/168691.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168692.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168693.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168694.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168695.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168688.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168689.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168690.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166006.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166007.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166008.jpg"},
        {src: "http://images.aanda.ru/photos/4338/92353.jpg"},
        {src: "http://images.aanda.ru/photos/8556/154294.jpg"},
        {src: "http://images.aanda.ru/photos/4387/156427.jpg"},
        {src: "http://images.aanda.ru/photos/5757/55286.jpg"}
        ]
      }
    }
  }
</script>
## Gallery

### Basic usage

:::demo default

```html
<tm-gallery ref="gallery1" :images="images"></tm-gallery>
<div>
  <tm-button type="secondary" cancel @click="() => { this.$refs.gallery1.show() }">Open gallery</tm-button>
</div>

<script>
  export default {
    data: function () {
      return {
        images: [
        {src: "https://images.aanda.ru/photos/2150/168691.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168692.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168693.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168694.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168695.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168688.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168689.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168690.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166006.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166007.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166008.jpg"},
        {src: "http://images.aanda.ru/photos/4338/92353.jpg"},
        {src: "http://images.aanda.ru/photos/8556/154294.jpg"},
        {src: "http://images.aanda.ru/photos/4387/156427.jpg"},
        {src: "http://images.aanda.ru/photos/5757/55286.jpg"}
        ]
      }
    }
  }
</script>

```
:::

### Start at N position

:::demo use `start-at` for start from N position

```html
<tm-gallery ref="gallery2" :images="images" :start-at=2></tm-gallery>
<div>
  <tm-button type="secondary" cancel @click="() => { this.$refs.gallery2.show() }">Open gallery</tm-button>
</div>

<script>
  export default {
    data: function () {
      return {
        images: [
        {src: "https://images.aanda.ru/photos/2150/168691.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168692.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168693.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168694.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168695.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168688.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168689.jpg"},
        {src: "https://images.aanda.ru/photos/2150/168690.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166006.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166007.jpg"},
        {src: "https://images.aanda.ru/photos/2150/166008.jpg"},
        {src: "http://images.aanda.ru/photos/4338/92353.jpg"},
        {src: "http://images.aanda.ru/photos/8556/154294.jpg"},
        {src: "http://images.aanda.ru/photos/4387/156427.jpg"},
        {src: "http://images.aanda.ru/photos/5757/55286.jpg"}
        ]
      }
    }
  }
</script>

```
:::

### Gallery Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| images | images to show | array | — | — |
| start-at | start from N position | number | — | 0 |

### Gallery Methods
| Method | Description | Parameters |
|---------- |-------------- | -- |
| show | show gallery | — |
| hide | hide gallery | — |
| prev | switch to the previous image | — |
| next | switch to the next image | — |
| showImage | switch to N image | number |