<template>
  <div class="masters">
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
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
  }

</style>