<template>
  <div class="clapans">      
    <b-table responsive hover :items="items" :fields="fields">
      <template v-slot:cell(actions)="row">
            <b-button size="sm" @click="toggleRowDetails(row, 'status')" class="mr-2">
              {{ row.detailsShowing ? 'Скрыть' : 'Редактировать'}} 
            </b-button>
          </template>

          <template v-slot:row-details="row">
            <b-card>
              <b-row
                v-for="(detail, i) in detailsMask"
                :key="`detail-${i}`"
                class="mb-2"
              >
              <b-col sm="5" class="text-sm-right"
              >{{ detail }}: {{ row.item[detail] }}
              </b-col>
              </b-row>
            </b-card>
          </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {  
        detailsMask: [],
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
            key: 'etazh',
            label: 'Этаж',
          },
          {
            key: 'flat',
            label: 'Кв./Офис',
            
          },
          {
            key: 'id',
            label: 'ID Клапана',
          },
          {
            key: 'status',
            label: 'Статус',
          },
          {
            key: 'actions',
            label: ''
          },
          {
            key: 'type',
            label: 'Лицо'
          },
          {
            key: 'agreement_number',
            label: 'Номер Договора'
          },
          {
            key: 'snm',
            label: 'ФИО'
          },
          {
            key: 'iin',
            label: 'ИИН'
          },
          {
            key: 'bin',
            label: 'БИН'
          }
        ],
        items: [
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"}
      
        ]
  }
  },
  methods: {
    toggleRowDetails(row, data) {
      this.detailsMask = data.split(', ')
      row.toggleDetails()
    }
  }
  
  }
</script>

<style scoped>

  .clapans{
    margin-top: 1rem;
    border-style: solid;
    border-width: medium;
  }

  table{
    background-color: blue;
    padding: 1rem;
  }

</style>