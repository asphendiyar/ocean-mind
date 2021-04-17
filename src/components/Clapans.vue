<template>
  <div>
    <h1>{{count}}</h1> 
  <Navigation @turnOnAll="turnOnAllHere" />
  <div class="clapans">     
    <b-table responsive striped sticky-header="800px" no-border-collapse head-row-variant="dark" ref="my-table" :items="items" :fields="fields">
      <template class="info" v-slot:cell(actions)="row">
            <b-button size="sm" @click="toggleRowDetails(row, 'status')">
              {{ row.detailsShowing ? 'Скрыть' : 'Редактировать'}} 
            </b-button>
          </template>

          <template v-slot:row-details="row">
            <b-card class="information">
              <div>
              <b-row
                v-for="(detail, i) in detailsMask"
                :key="`detail-${i}`"
                class="mb-2" 
              >
              Статус: {{ row.item[detail] }} 
              
              </b-row>
              
              <b-row>
              <b-button  size="sm-3" class="mr-2" variant="success" @click="rowOn(row.item)" >Включить</b-button>
              <b-button  size="sm-3" class="mr-2" variant="danger" @click="rowOff(row.item)" >Отключить</b-button>
              <b-button  size="sm-3" class="mr-2" @click="changeId(row.item)" >Поменять</b-button>
              </b-row>
              <b-row>
                <div class="comment">

              <b-form-textarea
                    id="textarea"
                
                    placeholder="Комментировать..."
                    size="sm-3"
                    rows="2"
                    max-rows="4"
                  ></b-form-textarea>
                  <b-button class="addComment" size="sm">Добавить комментарий</b-button>
                </div>
              </b-row>
              </div>
            </b-card>
          </template>
    </b-table>
  </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

  export default {
    name: 'Clapans',
    components: {Navigation},
    data() {
      return {  
        count: "",
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
          { _rowVariant: 'success', isActive: true, city: "Алматы", raion: 'Медеуский', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '158626',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'danger', isActive: true, city: "Нурсултан", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '3526215',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Шымкент", raion: 'Абай', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '1616565',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Караганда", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '651652',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'danger', isActive: true, city: "Семей", raion: 'Абай', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '65132156',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Уральск", raion: 'Райымбек', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '651621',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'danger', isActive: true, city: "Кокшетау", raion: 'Свобода', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '89456',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Талдыкорган", raion: 'Ленин', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '32151',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Алматы", raion: 'Медеуский', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '"23423"',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Тараз", raion: 'Кордай', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '65451',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"},
          { _rowVariant: 'success', isActive: true, city: "Тараз", raion: 'Чу', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '25245',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131"}
          
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
      this.$set(item, "status", "включен")
    },
    rowOff(item) {
      this.$set(item, "_rowVariant", "danger");
      this.$set(item, "status", "отключен")
    },
    changeId(item){
      this.$set(item, "id", Math.floor(Math.random()*1000000))
    },
    turnOnAllHere(data){
      this.count = data;
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
 
  .card{
    margin-right: 1rem;
    background-color: rgb(181, 194, 194);
    border: none;
  }
  
  .comment{
    display: flex;
    margin-top: 2rem;
  }
  .addComment{
    margin-left: 1rem;
  }
  .information > div{
    margin-left: 1rem;
  }
</style>