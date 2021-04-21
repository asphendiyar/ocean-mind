<template>
    <div class="navigation">
    
        <b-navbar class="mx-auto">
            <b-navbar-nav >

            
            <b-nav-item-dropdown text="Действия" class="actions" >   
                <b-dropdown-item v-b-modal.modalOn>Включить все</b-dropdown-item>
                <b-dropdown-item v-b-modal.modalOff>Выключить все</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-modal id="modalOn" size="md" hide-footer >
                <div>
                    <h5>Вы действительно хотите включить все?</h5>
                    <div class="knopki">
                        <b-button size="md"  @click="$bvModal.hide('modalOn')"> Отмена </b-button>
                        <b-button size="md"  @click="$bvModal.hide('modalOn')" v-b-modal.modalPinOn>Да</b-button>
                    </div>
                </div>
            </b-modal>
            <b-modal id="modalOff" size="md" hide-footer >
                <div>
                    <h5>Вы действительно хотите выключить все?</h5>
                    <div class="knopki">
                        <b-button size="md"  @click="$bvModal.hide('modalOff')"> Отмена </b-button>
                        <b-button size="md" v-b-modal.modalPinOff  @click="$bvModal.hide('modalOff')">Да</b-button>
                    </div>
                </div>
            </b-modal>
            <!-- Modal to Pin Code -->
            <b-modal id="modalPinOn" hide-header size="md" hide-footer >
                <div>
                    <div class="knopki">
                        <b-form-input placeholder="Введите код подтверждения"></b-form-input>
                        <b-button size="md" @click="$bvModal.hide('modalPinOn')">Подтвердить</b-button>
                    </div>
                </div>
            </b-modal>
            <b-modal id="modalPinOff" hide-header size="md" hide-footer >
                <div>
                    <div class="knopki">
                         <b-form-input placeholder="Введите код подтверждения"></b-form-input>
                        <b-button size="md" @click="$bvModal.hide('modalPinOff')" >Подтвердить</b-button>
                    </div>
                </div>
            </b-modal>

            <b-nav-item-dropdown text="Добавить" class="add" >   
                <b-dropdown-item v-b-modal.modal1>Мастер Хаб</b-dropdown-item>
                <b-dropdown-item v-b-modal.modal2>Мастер</b-dropdown-item>
                <b-dropdown-item v-b-modal.modal3>Клапан</b-dropdown-item>
            </b-nav-item-dropdown>
        
            <b-nav-form >
                <b-nav-item-dropdown  text="Все" >   
                    <b-dropdown-item href="#"> Все </b-dropdown-item>
                    <b-dropdown-item href="#"> Город </b-dropdown-item>
                    <b-dropdown-item href="#">Район</b-dropdown-item>
                    <b-dropdown-item href="#"> Улица </b-dropdown-item>
                    <b-dropdown-item href="#">Дом</b-dropdown-item>
                    <b-dropdown-item href="#">ID Клапана</b-dropdown-item>
                    <b-dropdown-item href="#">Наименование строения</b-dropdown-item>
                </b-nav-item-dropdown>
                
                <b-form-input  placeholder="Поиск..."></b-form-input>
            </b-nav-form>
            
            
            </b-navbar-nav>
        </b-navbar>
        <b-modal id="modal1" size="xl" title="Добавить Мастер Хаб" hide-footer>
            <div class="content">
                <div>
                    <div class="select_add">
                        <b-form-select :value="null" :options="city"></b-form-select>
                        <b-form-select :value="null" :options="raion"></b-form-select>
                        <b-form-select :value="null" :options="street"></b-form-select>
                        <b-form-select :value="null" :options="house"></b-form-select>
                        <b-form-select :value="null" :options="podezd"></b-form-select>
                        <b-form-select :value="null" :options="shahta"></b-form-select>
                    </div>
                    
                    <div class="input_add">
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                    </div>
                </div>
                 <b-button squared @click="openModal('Мастер Хаб'); $bvModal.hide('modal1')">Добавить Мастер Хаб</b-button>
            </div>
        </b-modal>
        <b-modal id="modal2" size="xl" title="Добавить Мастер" hide-footer>
            <div class="content">
                <div>
                    <div class="select_add">
                        <b-form-select :value="null" :options="city"></b-form-select>
                        <b-form-select :value="null" :options="street"></b-form-select>
                        <b-form-select :value="null" :options="house"></b-form-select>
                        <b-form-select :value="null" :options="podezd"></b-form-select>
                        <b-form-select :value="null" :options="shahta"></b-form-select>
                        <b-form-select :value="null" :options="etazh"></b-form-select>
                    </div>
                    
                    <div class="input_add">
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                    </div>
                    
                </div>
                <b-button squared @click="$bvModal.hide('modal2')">Добавить Мастер</b-button>
            </div>
        </b-modal>
        <b-modal id="modal3" size="xl" title="Добавить Клапан" hide-footer>
            <div class="content">
                <div>
                    <div class="select_add">
                        <b-form-select :value="null" :options="city"></b-form-select>
                        <b-form-select :value="null" :options="street"></b-form-select>
                        <b-form-select :value="null" :options="house"></b-form-select>
                        <b-form-select :value="null" :options="podezd"></b-form-select>
                        <b-form-select :value="null" :options="shahta"></b-form-select>
                        <b-form-select :value="null" :options="etazh"></b-form-select>
                        <b-form-select :value="null" :options="office"></b-form-select>
                        <b-form-select :value="null" :options="lico"></b-form-select>
                        <b-form-input v-model="text" placeholder="ФИО"></b-form-input>
                        <b-form-input v-model="text" placeholder="Номер договора"></b-form-input>
                        <b-form-input v-model="text" placeholder="ИИН/БИН"></b-form-input>
                        <b-form-select :value="null" :options="payment"></b-form-select>
                    </div>
                    
                    <div class="input_add">
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        <b-form-input v-model="text" placeholder="Свой вариант"></b-form-input>
                        
                        
                    </div>
                   
                </div>
                 <b-button squared @click="$bvModal.hide('modal3')">Добавить Клапан</b-button>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
    data(){
        return{
        city: [
          { value: null, text: 'Город', disabled: true  },
          { value: 'a', text: 'Нурсултан' },
          { value: 'b', text: 'Шымкент' },
          { value: 'c', text: 'Павлодар' },
        ],
        raion: [
          { value: null, text: 'Район', disabled: true  },
          { value: 'a', text: 'Есиль' },
          { value: 'b', text: 'Алматинский' },
          { value: 'c', text: 'Сарыаркинский' },
        ],
        street: [
          { value: null, text: 'Улица', disabled: true  },
          { value: 'a', text: 'Кабанбай батыра' },
          { value: 'b', text: 'Абай' },
          { value: 'c', text: 'Республика' },
        ],
        house: [
          { value: null, text: 'Дом', disabled: true  },
          { value: 'a', text: '51' },
          { value: 'b', text: '32' },
          { value: 'c', text: '33' },
        ],
        podezd: [
          { value: null, text: 'Подъезд', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        shahta: [
          { value: null, text: 'Шахта', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        etazh: [
          { value: null, text: 'Этаж', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        fio: [
          { value: null, text: 'ФИО', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        office: [
          { value: null, text: 'Офис/Квартира', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        lico: [
          { value: null, text: 'Физ/Юр. лицо', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        agreement_number: [
          { value: null, text: 'Номер договора', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        iin: [
          { value: null, text: 'ИИН/БИН', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        payment: [
          { value: null, text: 'Способ оплаты', disabled: true  },
          { value: 'a', text: '5' },
          { value: 'b', text: '6' },
          { value: 'c', text: '7' },
        ],
        id_masterhub: [
          { value: null, text: 'ID Мастер Хаба', disabled: true  },
          { value: 'a', text: '180107066' },
          { value: 'b', text: '180107235' },
          { value: 'c', text: '180156813' },
        ],
        id_master: [
          { value: null, text: 'ID Мастер Хаба', disabled: true  },
          { value: 'a', text: '103258852' },
          { value: 'b', text: '103693693' },
          { value: 'c', text: '103369746' },
        ]
    }
    },
    methods: {
        
    }
}
</script>

<style scoped>

.content>div{
    display: flex;
    justify-content: center;
}

.content{
    display: flex;
    flex-direction: column;
}
.content button{
    align-self: center;
    margin-bottom: 2rem;
}
.content h2{
    margin-top: 1rem;
    font-weight: 0;
}

.select_add input{
    margin-top: 1rem;
}

.onAll{
    margin: 0;
}
h5{
    font-weight: 600;
}

.knopki{
    margin-top: 2rem;
}
.knopki button{
    margin-right: 1rem;
    padding: 0.5rem;
}
button{
    margin-top: 1rem;
    
}

.content div{
    margin: 1rem;
}
.navigation{
    margin-top: 3rem;
}
select{
    margin-top: 1rem;
}
.input_add input{
    margin-top: 1rem;
    margin-right: 1rem;
}

.input_add{
    margin-right: 1rem;
}
nav ul{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}



nav>ul>li{
    font-weight: 500;
    border-radius: 5px;
    color: white;
    background-color: #9fcdff;
    border-style: solid;
    border-width: thin;
    border-color: #6c757d;
}


</style>