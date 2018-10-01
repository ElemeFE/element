<template>

  <div style="margin: 30px;">

	<el-row>
		<el-col :span="12">

			<div class="grid-content bg-purple">
			  	
				<h1>Meu h1</h1>

				<h2>Meu h2</h2>

				<h3>Meu h3</h3>

				<h4>Meu h4</h4>

				<h5>Meu h5</h5>

				<h6>Meu h6</h6>

				<p>Body</p>

				<small>Body II</small>

			</div>

			<div class="content-paddingx5"></div>

			<el-row>

			<!-- DROPSELECT -->	
					
				<el-select v-model="value" placeholder="Selecione uma Opção">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>

				<div class="content-padding"></div>

				<el-select v-model="value" placeholder="Desabilitado" disabled>
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>

				<div class="content-padding"></div>

  				<el-select v-model="value9" multiple filterable remote reserve-keyword placeholder="Seleção por pesquisa" :remote-method="remoteMethod" :loading="loading" >
    				<el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value">
    				</el-option>
  				</el-select>

			</el-row>

			<div class="content-paddingx5"></div>

			<el-row>
			
			<!-- MODALS -->

				<el-button type="primary" round @click="open4">MODAL</el-button>

			</el-row>

			<div class="content-paddingx5"></div>

			<el-row>

			<!-- TOOLTIPS -->	
				
				<el-tooltip class="item" effect="dark" content="Tooltip preto? Ou cinza escuro?" placement="top">
      				<el-button>Tooltip dark</el-button>
    			</el-tooltip>

    			<el-tooltip class="item" effect="light" content="Tooltip branco? Ou cinza claro?" placement="top">
      				<el-button>Tooltip light</el-button>
    			</el-tooltip>

			</el-row>

			<div class="content-paddingx5">
				
			<el-row>
				
			<!-- DATEPICKER -->

				<el-date-picker v-model="value_datepicker" type="date" placeholder="Selecione o dia"></el-date-picker>

				<el-date-picker v-model="value_datetimepicker" type="datetime" placeholder="Selecione o dia"></el-date-picker>

			</el-row>

			</div>

		</el-col>

		<el-col :span="12">

			<div class="grid-content bg-purple-light">
				
			<!-- BUTTONS -->

				<el-row>
					<el-button type="primary" round >PRIMÁRIO</el-button>
					<el-button type="secondary" round >SECUNDÁRIO</el-button>
					<el-button disabled round >DESABILITADO</el-button>
				</el-row>

				<div class="content-padding"></div>

				<el-row>
					<el-button icon="el-icon-plus" type="primary" round>PRIMÁRIO</el-button>
					<el-button icon="el-icon-plus" type="secondary" round >SECUNDÁRIO</el-button>
					<el-button icon="el-icon-plus" disabled round>DESABILITADO</el-button>
				</el-row>

				<div class="content-padding"></div>

			<!-- BUTTONS OUTLINE -->	

				<el-row>
					<el-button type="primary-outline" round >PRIMÁRIO</el-button>
					<el-button type="secondary-outline" round >SECUNDÁRIO</el-button>
				</el-row>

				<div class="content-padding"></div>

				<el-row>
					<el-button icon="el-icon-plus" type="primary-outline" round>PRIMÁRIO</el-button>
					<el-button icon="el-icon-plus" type="secondary-outline" round >SECUNDÁRIO</el-button>
				</el-row>

				<div class="content-padding"></div>

			<!-- LINK-BUTTONS -->

				<el-row>
					<el-button type="link-primary">PRIMÁRIO</el-button>
					<el-button type="link-secondary">SECUNDÁRIO</el-button>
				</el-row>

				<div class="content-paddingx5"></div>

			<!-- NOTIFICAÇÕES EM ALERTAS -->	

				<el-alert title="Notificação de Sucesso" type="success" show-icon></el-alert>
				<div class="content-padding"></div>
				<el-alert title="Notificação de Alerta" type="warning" show-icon></el-alert>
				<div class="content-padding"></div>
				<el-alert title="Notificação de Erro" type="error" show-icon></el-alert>
				<div class="content-padding"></div>
				<el-alert title="Notificação de Informação" type="info" show-icon></el-alert>

				<div class="content-paddingx5"></div>

				<el-row>

				<!-- NOTIFICAÇÕES - BUTTONS -->
				  
					<el-button type="success" round @click="open3">Sucesso</el-button>
					<el-button type="warning" round @click="open4">Alerta</el-button>
					<el-button type="info" round @click="open5">Informação</el-button>
					<el-button type="danger" round @click="open6">Erro</el-button>

				</el-row>

				<div class="content-paddingx5"></div>

				<el-row>
					
				<!-- CHECKBOX -->

					<el-checkbox v-model="checked" type="el-checkbox-secondary">Checkbox</el-checkbox>
					<el-checkbox v-model="checked" >Checkbox</el-checkbox> 
					<el-checkbox v-model="checked2" disabled >Checkbox</el-checkbox>

				</el-row>

				<div class="content-padding"></div>

				<el-row>
					
				<!-- RADIO -->

					<el-radio v-model="radio" label="1">Radio A</el-radio>
  					<el-radio v-model="radio" label="2" >Radio B</el-radio>
  					<el-radio v-model="radio" label="3" disabled >Desabilitado</el-radio>

				</el-row>

				<div class="content-padding"></div>

				<el-row>
					
				<!-- TOGGLE -->
				
					<el-switch v-model="value1"></el-switch>
					<div class=".margin-left"></div>
					<el-switch v-model="value2" disabled ></el-switch>	

				</el-row>

				<div class="content-paddingx5"></div>

				<el-row>

				<!-- SLIDER -->	
					
					<div class="block">
						<span class="demonstration"></span>
						<el-slider v-model="slider"></el-slider>
					</div>

				</el-row>

				<div class="content-padding"></div>

				<el-row>

				<!-- SLIDER DESABILITADO -->	
					
					<div class="block">
						<span class="demonstration"></span>
						<el-slider v-model="slider2" disabled></el-slider>
					</div>

				</el-row>

				<div class="content-paddingx5"></div>

				<el-row>

				<!-- BREADCRUMB -->	
					
					<el-breadcrumb separator-class="el-icon-arrow-right">
					    <el-breadcrumb-item>Nível 1</el-breadcrumb-item>
					    <el-breadcrumb-item>Nível 2</el-breadcrumb-item>
					    <el-breadcrumb-item>Nível 3</el-breadcrumb-item>
					    <el-breadcrumb-item :to="{ path: '/' }">Nível 4</el-breadcrumb-item>
					</el-breadcrumb>

				</el-row>

				<div class="content-paddingx5"></div>

				<el-row>
				
				<!-- PAGINATION -->	

					<div class="block">
					    <el-pagination layout="prev, pager, next" :total="100">
					    </el-pagination>
					</div>

				</el-row>

				<div class="content-paddingx5"></div>

				<el-row>
				
				<!-- INPUTS -->

					<el-form>	

						<label class="label-form-input-default" >Formulário</label>
						<el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="top"><i class="el-icon-question"></i></el-tooltip>
						<el-input placeholder="Input Geral" v-model="input"></el-input>

						<div class="content-padding"></div>

						<label class="label-form-input-default" >Formulário Textarea</label>
						<el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="top"><i class="el-icon-question"></i></el-tooltip>
						<el-input type="textarea":rows="2" placeholder="Input Textarea" v-model="textarea"></el-input>

						<div class="content-padding"></div>

						<label class="label-form-input-secondary" >Formulário Secundário</label>
						<el-input placeholder="Input Geral" v-model="input"></el-input>

						<div class="content-padding"></div>

						<label class="label-form-input-secondary" >Formulário Textarea Secundário</label>
						<el-input type="textarea":rows="2" placeholder="Input Textarea" v-model="textarea"></el-input>

						<div class="content-padding"></div>

						<label class="label-form-input-disabled" >Formulário Desabilitado</label>
						<el-input placeholder="Input Desabilitado" v-model="input1":disabled="true"></el-input>


						<div class="content-padding"></div>

						<label class="label-form-input-disabled" >Formulário Textarea Desabilitado</label>
						<el-input type="textarea":rows="3" placeholder="Input Textarea" v-model="textarea" disabled></el-input>

					</el-form>	

				</el-row>	 

			</div>

		</el-col>
	</el-row>


  </div>

</template>

<script>

  export default {

  	methods: {
      open3() {
        this.$notify({
          title: 'Sucesso',
          message: 'Mensagem de Sucesso',
          type: 'success'
        });
      },

      open4() {
        this.$notify({
          title: 'Alerta',
          message: 'Mensagem de Alerta',
          type: 'warning'
        });
      },

      open5() {
        this.$notify.info({
          title: 'Informação',
          message: 'Mensagem de Informação'
        });
      },

      open6() {
        this.$notify.error({
          title: 'Erro',
          message: 'Mensagem de Erro'
        });
      },

      // SELECT SEARCH

      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      },

      // MODAL

      open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: 'Título do Modal',
          message: 'You don’t need to have a full time ecommerce business to earn a little extra money through your website. You don’t even need to be there all the time. All you need to do is wait for the day your advertisers will pay you.',
          center: true,
          roundButton: true,
          showCancelButton: true,
          confirmButtonText: 'BUTTON',
          cancelButtonText: 'CANCEL',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }

    },

    data() {
      return {

      	// RADIO
      	radio:'1',

      	// SWITCH
        value1: true,
        value2: false,

        // SLIDER
        slider:50,
        slider2: 10,

        // DROPSELECT

        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: '',

        // SELECT SEARCH

        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"],

      	// DATEPICKER

      	value_datepicker: '',

      	// DATETIMEPICKER

      	pickerOptions1: {
          shortcuts: [{
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: 'Yesterday',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: 'A week ago',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value_datetimepicker: ''

      }

    },

    mounted() {

   	  // SELECT SEARCH	
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },

  };

</script>

<style lang="scss">

	.content-padding{
		padding-top: 20px;
	}

	.content-paddingx5{
		padding-top: 100px;
	}

	.margin-left{
		margin-left:20px;
	}

</style>
