## ChatMessage

Message component for creating full-fledged chats

### Basic usage

:::demo Use `type` and `size` to define style and size
```html
<el-row :gutter="10">
  <el-chat-message type="primary" size="large" text="Message large size and primary style"/>
  <el-chat-message text="Default message size and style"/>
  <el-chat-message type="success" size="medium" text="Medium size message and style success"/>
  <el-chat-message type="warning" size="small" text="Small size message and warning style"/>
  <el-chat-message type="danger" size="mini" text="Mini size and danger style message"/>
</el-row>

```
:::

### Positioning

:::demo Use `position` to define the side of the correspondence
```html
<el-chat-message text="Hi! How are you?"/>
<el-chat-message type="primary" position="right" text="That's great! How are you?"/>
```
:::

### Personalization

:::demo Use `name` and `avatar` to personalize the message
```html
<el-chat-message
        name="Taylor Otwell"
        avatar="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        text="Hi, when is Vue 4 coming out?"
/>
<el-chat-message
        name="Evan You"
        avatar="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        text="Hi Taylor! When pigs fly"
        type="primary"
        position="right"
/>
```
:::

### Status and time stamp

You can add one of the statuses `sending`, `delivered`, `read` and time to the message 

:::demo Use `status` and` stamp` to set time and status
```html
<el-chat-message
        name="Taylor Otwell"
        avatar="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        text="Hi, when is Vue 4 coming out?"
        stamp="11:36"
/>
<el-chat-message
        name="Evan You"
        avatar="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        text="Hi Taylor! When pigs fly"
        stamp="11:36"
        status="read"
        type="primary"
        position="right"
/>
<el-chat-message
        name="Evan You"
        avatar="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        text="I wanted to ask, when will Laravel 13 pro max come out?"
        stamp="11:36"
        status="delivered"
        type="primary"
        position="right"
/>
<el-chat-message
        name="Evan You"
        avatar="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
        text="Taylor? Answer!"
        status="sending"
        type="primary"
        position="right"
/>
```
:::

### Message Stacks

Consecutive messages from the same person can be displayed in a grouped stack

:::demo Now we pass an array of messages into `text`
```html
<template>
  <el-chat-message
          name="Taylor Otwell"
          avatar="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          text="Hi, when is Vue 4 coming out?"
          stamp="11:36"
  />

  <el-chat-message
          name="Evan You"
          avatar="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          :text="messages"
          type="primary"
          position="right"
  />
</template>

<script>
  export default {
    data() {
      return {
        messages: [
          {
            text: "Hi Taylor! When pigs fly",
            stamp: "11:36",
            status: "read"
          },
          {
            text: "I wanted to ask, when will Laravel 13 pro max come out?",
            stamp: "11:36",
            status: "delivered"
          },
          {
            text: "Taylor? Answer!",
            status: "sending"
          }
        ]
      };
    }
  };
</script>
```
:::

### Slots

Using slots in message elements

:::demo
```html
<template>
  <el-chat-message stamp="11:36" text="Hi!">
    <template slot="avatar">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"/>
    </template>

    <template slot="name">
      <el-link>Taylor Otwell</el-link>
    </template>

    <template slot="text" slot-scope="{ message }">
      {{ message.text }} When will Vue 4 be released?
    </template>

    <template slot="stamp">
      11:36
    </template>
  </el-chat-message>

  <el-chat-message
          name="Evan You"
          avatar="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
          :text="messages"
          type="primary"
          position="right"
  >
    <template slot="text" slot-scope="{ message, $index }">
      <strong>{{ $index }}</strong>: <i>{{ message.text }}</i>
    </template>
  </el-chat-message>
</template>

<script>
  export default {
    data() {
      return {
        messages: [
          {
            text: "Hi Taylor! When pigs fly",
            stamp: "11:36",
            status: "read"
          },
          {
            text: "I wanted to ask, when will Laravel 13 pro max come out?",
            stamp: "11:36",
            status: "delivered"
          },
          {
            text: "Taylor? Answer!",
            status: "sending"
          }
        ]
      };
    }
  };
</script>
```
:::

### Attributes
| Attribute | Description                      | Type           | Accepted values       | Default   |
|-----------|--------------------------------- |--------------- |-----------------------------------------|-------- |
| size      | Message size                     | string         | large / default / medium / small / mini | default |
| type      | Message type                     | string         | primary / success / warning / danger    | —       |
| text      | Message or stack of messages     | string / array | —                                       | —       |
| name      | Username                         | string         | —                                       | —       |
| avatar    | Avatar url                       | string         | —                                       | —       |
| stamp     | Time stamp                       | string         | —                                       | —       |
| status    | Message status                   | string         | none / sending / delivered / read       | none    |
| position  | Side of the message box          | string         | left / right                            | left    |

### Scoped Slot
| Name      | Description                                                     |
|---------- |---------------------------------------------------------------  |
| name      | Username. The scope parameter is { row: { name }, $index }      |
| avatar    | User avatar. The scope parameter is { row: { avatar }, $index } |
| text      | Message Text. The scope parameter is { message, $index }        |
| stamp     | Time stamp. The scope parameter is { message, $index }          |
| status    | Message status. The scope parameter is { message, $index }      |
