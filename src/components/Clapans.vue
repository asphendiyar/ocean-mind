<template>
  <div class="clapans">      
    <b-table responsive striped head-row-variant="dark"  hover ref="my-table" :items="items" :fields="fields">
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
              <b-col sm="2" class="text-sm-right"
              >Статус: {{ row.item[detail] }}
              </b-col>

              <b-button  size="sm-3" class="mr-2" @click="rowOn(row.item)" >Включить</b-button>
              <b-button  size="sm-3" class="mr-2" @click="rowOff(row.item)" >Отключить</b-button>
              <b-button  size="sm-3" class="mr-2">Поменять</b-button>
              </b-row>
              <b-form-textarea
                    id="textarea"
                
                    placeholder="Комментировать..."
                    size="sm-2"
                    rows="2"
                    max-rows="4"
                  ></b-form-textarea>
                  <b-button  size="sm-3" class="mr-2">Добавить комментарий</b-button>
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
          { _rowVariant: 'success', isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'danger', isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'danger', isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'danger', isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Алматы", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1521544',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"}
      
        ]
  }
  },
  methods: {
    toggleRowDetails(row, data) {
      this.detailsMask = data.split(', ')
      row.toggleDetails()
    },
    rowOn(item) {
      this.$set(item, "_rowVariant", "success");
      this.items.status
    },
    rowOff(item) {
      this.$set(item, "_rowVariant", "danger");
    },
  
  }

  }
</script>

<style scoped>

  .clapans{
    margin-top: 1rem;
    border-style: solid;
    border-width: medium;
  }



  .table-striped>tr:nth-child(odd){
   color: brown;
}


</style>