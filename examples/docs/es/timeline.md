## Timeline

Línea de tiempo visual.

### Uso básico

El Timeline puede ser dividido en múltiples actividades en forma ascendente o descendente. Las marcas de tiempo son características importantes que los distinguen de otros componentes. Observe la diferencia con Steps.

:::demo
```html
<div class="block">
  <div class="radio">
    Order: 
    <el-radio-group v-model="reverse">
      <el-radio :label="true">descending</el-radio>
      <el-radio :label="false">ascending</el-radio>
    </el-radio-group>
  </div>

  <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>

<script>
  export default {
    data() {
      return {
        reverse: true,
        activities: [{
          content: 'Success',
          timestamp: '2018-04-11'
        }, {
          content: 'Approved',
          timestamp: '2018-04-13'
        }, {
          content: 'Event start',
          timestamp: '2018-04-15'
        }]
      };
    }
  };
</script>
```
:::

### Nodo personalizado

El tamaño, el color y los iconos se pueden personalizar en el nodo.

:::demo
```html
<div class="block">
  <el-timeline>
    <el-timeline-item
      v-for="(activity, index) in activities"
      :key="index"
      :icon="activity.icon"
      :type="activity.type"
      :color="activity.color"
      :size="activity.size"
      :timestamp="activity.timestamp">
      {{activity.content}}
    </el-timeline-item>
  </el-timeline>
</div>

<script>
  export default {
    data() {
      return {
        activities: [{
          content: 'Custom icon',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }, {
          content: 'Custom color',
          timestamp: '2018-04-03 20:46',
          color: '#0bbd87'
        }, {
          content: 'Custom size',
          timestamp: '2018-04-03 20:46',
          size: 'large'
        }, {
          content: 'Default node',
          timestamp: '2018-04-03 20:46'
        }]
      };
    }
  };
</script>
```
:::

### Marcas de tiempo personalizadas

Las marcas de tiempo ( timestamp )  puede colocarse encima del contenido cuando éste es demasiado alto.

:::demo
```html
<div class="block">
  <el-timeline>
    <el-timeline-item timestamp="2018/4/12" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/12 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/3" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/3 20:46</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2018/4/2" placement="top">
      <el-card>
        <h4>Update Github template</h4>
        <p>Tom committed 2018/4/2 20:46</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</div>
```
:::

### Timeline Atributos
| Atributo | Descripción | Tipo    | Valores aceptados | Por defecto |
|---------- |-------- |---------- |-------------  |-------- |
| reverse | Si el node es ascendente o descendente. Por defecto es ascendente | boolean | — | false |

### Timeline-item Atributos
| Atributo    | Descripción | Tipo    | Valores aceptados | Por defecto |
|---------- |-------- |---------- |-------------  |-------- |
| timestamp     | Contenido de las marcas de tiempo | string  | - | — |
| hide-timestamp  | Si se muestra o no timestamp | boolean | — | false |
| placement | la posición de timestamp | string | top / bottom | bottom |
| type | tipo de nodo | string | primary / success / warning / danger / info | - |
| color | color de fondo del nodo | string | hsl / hsv / hex / rgb | - |
| size | tamaño del nodo | string | normal / large | normal |
| icon | nombre de la clase del icono | string | — | - |

### Timeline-Item Slot
| Nombre | Descripción |
|------|--------|
| — | Contenido personalizado del ítem del timeline |
| dot | Definición personalizada del nodo |
