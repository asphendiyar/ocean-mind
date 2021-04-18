<template>
    <div class="main">
    <div class="settings">

        <ul>
            <li>
                <h3>Город</h3>
            </li>
            <li>
                <h3>Район</h3>
            </li>
            <li>
                <h3>Улица</h3>
            </li>
            <li>
                <h3>Наименование строения</h3>
            </li>
            <li>
                <h3>Дом</h3>
            </li>
            <li>
                <h3>Подъезд</h3>
            </li>
            <li>
                <h3>Время на ТО : </h3>
            </li>
            <li>
                <h3>Дни ТО</h3>
            </li>
        </ul>
        <ul>
            <li>
                <b-form-select v-model="selected" :options="city"></b-form-select>
            </li>
            <li>
                <b-form-select v-model="selected" :options="raion"></b-form-select>
            </li>
            <li>
                <b-form-select v-model="selected" :options="street"></b-form-select>
            </li>
            <li>
                <b-form-select v-model="selected" :options="type_house"></b-form-select>
            </li>
            <li>
                <b-form-select v-model="selected" :options="house"></b-form-select>
            </li>
            <li>
                <b-form-select v-model="selected" :options="podezd"></b-form-select>
            </li>
            <li class="date">
                <h3>с</h3>
                <b-form-select v-model="selected" :options="options"></b-form-select>
                <h3>по</h3>
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </li>
            <li>
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </li>
        </ul>

    </div>
        <b-button squared size="sm-3">Сохранить</b-button>
    </div>
    
</template>

<script>
  export default {
    data() {
      return {
        selected: null,
         city: [
          { value: null, text: 'Город' },
          { value: 'a', text: 'Нурсултан' },
          { value: 'b', text: 'Шымкент' },
          { value: 'c', text: 'Павлодар' },
        ],
        raion: [
          { value: null, text: 'Район' },
          { value: 'a', text: 'Есиль' },
          { value: 'b', text: 'Алматинский' },
          { value: 'c', text: 'Сарыаркинский' },
        ],
        street: [
          { value: null, text: 'Улица' },
          { value: 'a', text: 'Кабанбай батыра' },
          { value: 'b', text: 'Абай' },
          { value: 'c', text: 'Республика' },
        ],
         type_house: [
          { value: null, text: 'Наименование строения' },
          { value: 'a', text: "ЖК 'Есейтай Сити'" },
          { value: 'b', text: "ЖК 'Есейтай Сити'" },
          { value: 'c', text: "ЖК 'Есейтай Сити'" },
        ],
         house: [
          { value: null, text: 'Дом' },
          { value: 'a', text: '1' },
          { value: 'b', text: '2' },
          { value: 'c', text: '3' },
        ],
        podezd: [
          { value: null, text: 'Подъезд' },
          { value: 'a', text: '1' },
          { value: 'b', text: '2' },
          { value: 'c', text: '3' },
        ]
      }
    }
  }
</script>


<style scoped>

    .settings{
        display: flex;
        justify-content: space-evenly;
    }

    h3{
        color: #2e596d;
    }
    div ul li{
        display: flex;
        margin-top: 1rem;
        align-items: center;
    }
    div>ul>li{
        list-style: circle;
    }
    select{
        border-radius: 0;
        
    }
    .date{
        display: flex;
        justify-content: space-between;
    }
    .date select{
        width: 25%;
    }
    button{
        margin-top: 1rem;
        width: 10%;
        align-self: center;
        background-color: #2e596d;
    }
    .main{
        margin-top: 10%;
        display: flex;
        flex-direction: column;
    }
</style>