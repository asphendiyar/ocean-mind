<template>

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
        ]
      }
    }
  }
</script>


<style scoped>

    .settings{
        margin-top: 10%;
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

    ul{
        padding: 0;
    }
    select{
        border-radius: 0;
        padding: 5px;
        text-align: center;
    }
    .date{
        display: flex;
        justify-content: space-between;
    }
    .date select{
        width: 25%;
    }
</style>