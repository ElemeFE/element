<style lang="scss">
.component-preview {
  padding-right: 10px;
  &:last-of-type {
    padding-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }
  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .el-avatar:not(:last-child) {
    margin-right: 20px;
  }

  .avatar-demo {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <el-row class="demo-line">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
    <el-row class="demo-line">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>
    <el-row class="demo-line">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>
    <el-row class="demo-line">
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <el-row class="demo-line">
      <el-button>Default</el-button>
      <el-button size="medium">Medium</el-button>
      <el-button size="small">Small</el-button>
      <el-button size="mini">Mini</el-button>
    </el-row>
    <h4>Radio</h4>
    <el-row class="demo-line">
      <el-radio v-model="radio" label="1">Option A</el-radio>
      <el-radio v-model="radio" label="2">Option B</el-radio>
    </el-row>
    <el-row class="demo-line">
      <el-radio-group v-model="radio1">
        <el-radio-button label="New York"></el-radio-button>
        <el-radio-button label="Washington"></el-radio-button>
        <el-radio-button label="Los Angeles"></el-radio-button>
        <el-radio-button label="Chicago"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row class="demo-line">
      <el-radio v-model="radio2" label="1" border>Option A</el-radio>
      <el-radio v-model="radio2" label="2" border>Option B</el-radio>
    </el-row>
    <h4>Checkbox</h4>
    <el-row class="demo-line">
      <el-checkbox v-model="checked">Option</el-checkbox>
    </el-row>
    <el-row class="demo-line">
      <el-checkbox-group v-model="checked1">
        <el-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </el-row>
    <el-row class="demo-line">
      <el-checkbox v-model="checked2" label="Option1" border></el-checkbox>
    </el-row>
    <h4>Input</h4>
    <el-row style="width: 180px">
      <el-input placeholder="Please input" v-model="input"></el-input>
    </el-row>
    <h4>InputNumber</h4>
    <el-row>
      <el-input-number v-model="inputNumber" :min="1" :max="10"></el-input-number>
    </el-row>
    <h4>Select</h4>
    <el-row>
      <el-select v-model="selectValue" placeholder="Select">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </el-row>
    <h4>Cascader</h4>
    <el-row>
      <el-cascader :options="cascadeOptions" v-model="cascaderValue"></el-cascader>
    </el-row>
    <h4>Switch</h4>
    <el-row>
      <el-switch v-model="switchValue"></el-switch>
      <el-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </el-switch>
    </el-row>
    <h4>Slider</h4>
    <el-row style="width: 380px">
      <el-slider v-model="slider"></el-slider>
    </el-row>
    <h4>DatePicker</h4>
    <el-row>
      <el-date-picker v-model="datePicker" type="date"></el-date-picker>
    </el-row>
    <h4>Rate</h4>
    <el-row>
      <el-rate class="demo-line" v-model="rate"></el-rate>
      <el-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </el-rate>
    </el-row>
    <h4>Transfer</h4>
    <el-row>
      <el-transfer v-model="transfer" filterable :data="transferData">
        <el-button class="transfer-footer" slot="left-footer" size="small">Operation</el-button>
        <el-button class="transfer-footer" slot="right-footer" size="small">Operation</el-button>
      </el-transfer>
    </el-row>
    <h4>Table</h4>
    <el-row>
      <el-table :data="tableData" style="width: 70%">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </el-row>
    <h4>Tag</h4>
    <el-row>
      <el-tag class="demo-item" closable>Tag One</el-tag>
      <el-tag class="demo-item" closable type="success">Tag Two</el-tag>
      <el-tag class="demo-item" closable type="info">Tag Three</el-tag>
      <el-tag class="demo-item" closable type="warning">Tag Four</el-tag>
      <el-tag class="demo-item" closable type="danger">Tag Five</el-tag>
    </el-row>
    <h4>Progress</h4>
    <el-row style="width: 380px">
      <el-progress :percentage="20"></el-progress>
      <el-progress :percentage="60" status="exception"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
    </el-row>
    <h4>Tree</h4>
    <el-row style="width: 380px">
      <el-tree :data="treeData" :props="defaultTreeProps" ></el-tree>
    </el-row>
    <h4>Pagination</h4>
    <el-row>
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </el-row>
    <h4>Badge</h4>
    <el-row>
      <el-badge :value="12" class="demo-item">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge :value="3" class="demo-item">
        <el-button size="small">replies</el-button>
      </el-badge>
      <el-badge :value="1" class="demo-item" type="primary">
        <el-button size="small">comments</el-button>
      </el-badge>
      <el-badge :value="2" class="demo-item" type="warning">
        <el-button size="small">replies</el-button>
      </el-badge>
    </el-row>
    <h4>Alert</h4>
    <el-row style="width: 380px;">
      <el-alert class="demo-item" title="success alert" type="success" show-icon></el-alert>
      <el-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></el-alert>
      <el-alert class="demo-item" title="warning alert" type="warning" show-icon></el-alert>
      <el-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </el-alert>
    </el-row>
    <h4>Loading</h4>
    <el-row>
      <el-table :data="tableData" style="width: 90%" v-loading="true">
        <el-table-column prop="date" label="Date" width="180"></el-table-column>
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
      </el-table>
    </el-row>
    <h4>Message</h4>
    <el-row>
      <div role="alert" class="demo-item el-message el-message--success el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-success"></i><p class="el-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--warning el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-warning"></i><p class="el-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--info el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-info"></i><p class="el-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item el-message el-message--error is-closable el-message-fade-leave-active el-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="el-message__icon el-icon-error"></i><p class="el-message__content">Oops, this is a error message.</p><i class="el-message__closeBtn el-icon-close"></i></div>
    </el-row>
    <h4>MessageBox</h4>
    <el-row>
      <div class="el-message-box"><div class="el-message-box__header"><div class="el-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="el-message-box__headerbtn"><i class="el-message-box__close el-icon-close"></i></button></div><div class="el-message-box__content"><div class="el-message-box__status el-icon-warning"></div><div class="el-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="el-message-box__input" style="display: none;"><div class="el-input"><!----><input type="text" autocomplete="off" placeholder="" class="el-input__inner"><!----><!----><!----></div><div class="el-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="el-message-box__btns"><button type="button" class="el-button el-button--default el-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="el-button el-button--default el-button--small el-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </el-row>
    <h4>Notification</h4>
    <el-row>
      <div role="alert" class="el-notification right" style="position: relative; left: 0;"><!----><div class="el-notification__group"><span class="el-notification__title">Notification</span><div class="el-notification__content"><div>This is a message </div></div><div class="el-notification__closeBtn el-icon-close"></div></div></div>
    </el-row>
    <h4>Menu</h4>
    <el-row>
      <el-menu :default-active="menu" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">Processing Center</el-menu-item>
        <el-submenu index="2">
          <template slot="title">Workspace</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">item four</template>
            <el-menu-item index="2-4-1">item one</el-menu-item>
            <el-menu-item index="2-4-2">item two</el-menu-item>
            <el-menu-item index="2-4-3">item three</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>Info</el-menu-item>
        <el-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </el-menu-item>
      </el-menu>
      <el-menu
        default-active="2"
        class="demo-line"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-row>
    <h4>Tabs</h4>
    <el-row>
      <el-tabs v-model="tab" class="demo-item">
        <el-tab-pane label="User" name="first">User</el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
        <el-tab-pane label="Role" name="third">Role</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
      </el-tabs>
      <el-tabs type="card" class="demo-item">
        <el-tab-pane label="User">User</el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
    </el-row>
    <h4>Dialog</h4>
    <el-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="el-dialog" style="margin: 0"><div class="el-dialog__header"><span class="el-dialog__title">Tips</span><button type="button" aria-label="Close" class="el-dialog__headerbtn"><i class="el-dialog__close el-icon el-icon-close"></i></button></div><div class="el-dialog__body"><span>This is a message</span> </div><div class="el-dialog__footer"><span class="dialog-footer"><button type="button" class="el-button el-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="el-button el-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </el-row>
    <h4>Tooltip</h4>
    <el-row>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="el-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </el-row>
    <h4>Popover</h4>
    <el-row>
      <div role="tooltip" x-placement="top" id="el-popover-2936" aria-hidden="true" class="el-popover el-popper el-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="el-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </el-row>
    <h4>Card</h4>
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </el-card>
    </el-row>
    <h4>Carousel</h4>
    <el-row>
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <h4>Collapse</h4>
    <el-row>
      <el-collapse v-model="collapse">
        <el-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </el-collapse-item>
        <el-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </el-collapse-item>
      </el-collapse>
    </el-row>
    <h4>Avatar</h4>
    <el-row class="demo-line avatar-demo">
      <el-avatar icon="el-icon-user-solid"/>
      <el-avatar> avatar </el-avatar>
      <el-avatar shape="square" fit="contain" :src="avatarData.url"></el-avatar>
      <el-avatar size="large"> large </el-avatar>
      <el-avatar size="medium"> medium </el-avatar>
      <el-avatar size="small"> small </el-avatar>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Element',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      },
      avatarData: {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    };
  }
};
</script>
