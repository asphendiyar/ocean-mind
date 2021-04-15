<template>
  <div class="master_hub">
    <b-table responsive striped head-row-variant="dark" hover :items="items" :fields="fields"></b-table>
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
            key: 'id_master_hub',
            label: 'ID МастерХаба',
          },
          {
            key: 'status',
            label: 'Статус',
          },

        ],
        items: [
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', id_master_hub: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', id_master_hub: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', id_master_hub: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', id_master_hub: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', id_master_hub: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', id_master_hub: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', id_master_hub: '1521544',  status: 'включен',},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', id_master_hub: '1521544',  status: 'включен'}
      
        ]
  }
  }
  }
</script>

<style scoped>

  
  .master_hub{
    margin-top: 1rem;
    border-style: solid;
    border-width: medium;
  }
</style>