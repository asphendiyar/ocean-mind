<template>
<div>
  <Navigation/>
  <div class="masters">
    <b-table responsive  head-row-variant="primary" hover :items="items" :fields="fields"></b-table>
  </div>
</div>
</template>

<script>
import Navigation from './Navigation.vue'
  export default {
    name: 'Masters',
    components: {Navigation},
    data() {
      return {  
        fields: [
          {
            key: 'city',
            label: 'Город',
          },
          {
            key: 'raion',
            label: 'Район',
          },
          {
            key: 'street',
            label: 'Улица',
          },
          {
            key: 'house',
            label: 'Дом',
          },
          {
            key: 'id_master',
            label: 'ID Клапана',
          },
          {
            key: 'status',
            label: 'Статус',
          },

        ],
        items: [
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9',  id_master: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9',  id_master: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9',  id_master: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9',  id_master: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9',  id_master: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9',  id_master: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9',  id_master: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9',  id_master: '1521544',  status: 'включен'}
      
        ]
  }
  }
  }
</script>

<style scoped>

  .masters{
    margin-top: 1rem;
    border-style: solid;
    border-width: medium;
  }

</style>