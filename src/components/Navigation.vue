<template>
    <div class="navigation">
    
        <b-navbar class="mx-auto">
            <b-navbar-nav >

            <b-nav-item-dropdown  text="Город">
                <b-dropdown-item href="#">Алматы</b-dropdown-item>
                <b-dropdown-item href="#">Нурсултан</b-dropdown-item>
                <b-dropdown-item href="#">Шымкент</b-dropdown-item>
                <b-dropdown-item href="#">Павлодар</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown  text="Район" >
                <b-dropdown-item href="#">Есиль</b-dropdown-item>
                <b-dropdown-item href="#">Абай</b-dropdown-item>
                <b-dropdown-item href="#">Алатау</b-dropdown-item>
                <b-dropdown-item href="#">Медеу</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown  text="Улица" >
                <b-dropdown-item href="#">Абай</b-dropdown-item>
                <b-dropdown-item href="#">Кабанбай</b-dropdown-item>
                <b-dropdown-item href="#">Сатпаев</b-dropdown-item>
                <b-dropdown-item href="#">Республика</b-dropdown-item>
            </b-nav-item-dropdown>
            
            <b-nav-item-dropdown  text="Дом" >   
                <b-dropdown-item href="#">1</b-dropdown-item>
                <b-dropdown-item href="#">2</b-dropdown-item>
            </b-nav-item-dropdown>
            
            <b-button size="sm" class="my-1" type="submit">Включить все</b-button>

            <b-button v-b-modal.modal-xl size="sm" class="my-1" type="submit">Добавить</b-button>
        
            <b-nav-form>
                <b-nav-item-dropdown  text="Все" >   
                    <b-dropdown-item href="#"> Все </b-dropdown-item>
                    <b-dropdown-item href="#"> Город </b-dropdown-item>
                    <b-dropdown-item href="#">Район</b-dropdown-item>
                    <b-dropdown-item href="#"> Улица </b-dropdown-item>
                    <b-dropdown-item href="#">Дом</b-dropdown-item>
                </b-nav-item-dropdown>
                
                <b-form-input  placeholder="Search"></b-form-input>
            </b-nav-form>
            
            
            </b-navbar-nav>
        </b-navbar>
        <b-modal id="modal-xl" size="xl" title="Добавить">
            <div class="content">
                <div>
                    <h1>Мастер Хаб</h1>
                    <b-form-select  :options="city">Город</b-form-select>
                    <b-form-select  :options="raion"></b-form-select>
                    <b-form-select  :options="street"></b-form-select>
                    <b-form-select  :options="house"></b-form-select>
                    <b-form-select  :options="podezd"></b-form-select>
                    <b-form-select  :options="id_masterhub"></b-form-select>
                    <b-button>Добавить Мастер Хаб</b-button>
                </div>
                <div>
                    <h1>Мастер</h1>
                    <b-form-select  :options="city"></b-form-select>
                    <b-form-select  :options="raion"></b-form-select>
                    <b-button>Добавить Мастер</b-button>
                </div>
                <div>
                    <h1>Клапан</h1>
                    <b-button>Добавить Клапан</b-button>
                </div>
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
          { value: null,selected: true, text: 'Алматы' },
          { value: 'a', text: 'Нурсултан' },
          { value: 'b', text: 'Шымкент' },
          { value: 'c', text: 'Павлодар' },
        ]
    }
    }
}
</script>

<style scoped>

.content{
    display: flex;
    justify-content: space-evenly;
}

button{
    margin-top: 1rem;
    background-color: #0e3c53;
    color: white;
}

.content div{
    padding: 3rem;
}
.navigation{
    margin-top: 3rem;
}
footer{
    display: none;
}
select{
    margin-top: 1rem;
}
nav ul{
    width: 100%;
    display: flex;
    justify-content: space-between
}
input{
    width: 25%;
}

nav>ul>li{
    background-color: #e0d8c2;
    color: black;
    font-weight: 500;
    border-radius: 5px;
}

</style>