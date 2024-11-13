<template>
  <div
      @click="handleClick"
      :class="[
        'el-chat-message', `is-${position}`,
        'el-chat-message--' + messageSize,
        type ? 'el-chat-message--' + type : ''
      ]"
  >
    <div class="el-chat-message__list">

      <div v-for="(message, index) in stackMessages" :key="`message-${index}`" class="el-chat-message__box">
        <slot name="avatar" v-bind:row="{ avatar }" v-bind:$index="index">
          <div class="el-chat-message__avatar" v-if="avatar">
            <el-avatar v-if="index === 0" :src="avatar"/>
          </div>
        </slot>

        <div class="el-chat-message__body">
          <div class="el-chat-message__name" v-if="index === 0">
            <slot name="name" v-bind:row="{ name }" v-bind:$index="index">
              {{ name }}
            </slot>
          </div>
          <slot name="text" v-bind:message="message" v-bind:$index="index">
            {{ message.text }}
          </slot>

          <div class="el-chat-message__footer">
            <slot name="stamp" v-bind:message="message" v-bind:$index="index">
              <div class="stamp" v-if="message.stamp">
                {{ message.stamp }}
              </div>
            </slot>
            <slot name="status" v-bind:message="message" v-bind:$index="index">
              <div class="status" v-if="message.status !== 'none'">
                <i class="el-icon-loading" v-if="message.status === 'sending'"></i>
                <i class="el-icon-check" v-if="message.status === 'delivered'"></i>
                <div class="el-chat-message__check-icon" v-if="message.status === 'read'">
                  <i class="el-icon-check"></i>
                  <i class="el-icon-check second"></i>
                </div>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElChatMessage',
  props: {
    name: String,
    stamp: String,
    text: Array | String,
    avatar: String,
    size: {
      type: String,
      default: 'default',
      validator: (value) => {
        return ['default', 'large', 'medium', 'small', 'mini'].indexOf(value) !== -1;
      }
    },
    position: {
      type: String,
      default: 'left',
      validator: (value) => {
        return ['left', 'right'].indexOf(value) !== -1;
      }
    },
    status: {
      type: String,
      default: 'none',
      validator: (value) => {
        return ['none', 'sending', 'delivered', 'read'].indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      validator: (value) => {
        return ['primary', 'success', 'warning', 'danger'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    messageSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
    stackMessages() {
      if (Array.isArray(this.text)) {
        return this.text;
      }

      return [{
        text: this.text,
        stamp: this.stamp,
        status: this.status
      }];
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
