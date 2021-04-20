<template>
  <div>
    <h1>{{count}}</h1> 
  <Navigation @turnOnAll="turnOnAllHere" />
  <div class="clapans">     
    <b-table class="myTable" foot-clone responsive id="myTable" sticky-header="650px" no-border-collapse head-row-variant="primary" ref="my-table" :items="items" :fields="fields">
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
              <b-button  size="sm-3"  class="onButton"  @click="rowOn(row.item); addHistory()" >Включить</b-button>
              <b-button  size="sm-3"  class="offButton"  @click="rowOff(row.item); addHistory()" >Отключить</b-button>
              <b-button  size="sm-3" class="mr-2" @click="changeId(row.item); addHistory()" >Поменять</b-button>
              <b-button  size="sm-3" class="mr-2" @click="downloadCSVData" >Загрузить Историю</b-button>
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
               <b-row>
                 <h3>История:</h3>
                 <br>
                <p v-for="h in history" :key="h">{{h}}, <br></p>
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
        history:[],
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
            key: 'type_house',
            label: 'Наименование строения',
          },
          {
            key: 'house',
            label: 'Дом',
          },
          {
            key: 'podezd',
            label: 'Подъезд',
          },
          {
            key: 'shahta',
            label: 'Шахта',
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
            label: 'Физ. лицо/Юр. лицо'
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
            label: 'ИИН/БИН'
          },
          {
            key: 'payment',
            label: 'Способ оплаты'
          }
          

        ],
        items: [
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Алматы", raion: 'Медеуский', street: 'Кабанбай Батыр', house: '15', podezd: '2', etazh: '9', flat: '15',  id: '158626',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Нурсултан", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15',podezd: '2', etazh: '9', flat: '15',  id: '3526215',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Шымкент", raion: 'Абай', street: 'Кабанбай Батыр', house: '15', podezd: '2',etazh: '9', flat: '15',  id: '1616565',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Караганда", raion: 'Есиль', street: 'Кабанбай Батыр', house: '15',podezd: '2', etazh: '9', flat: '15',  id: '651652',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Семей", raion: 'Абай', street: 'Кабанбай Батыр', house: '15',podezd: '2', etazh: '9', flat: '15',  id: '65132156',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Уральск", raion: 'Райымбек', street: 'Кабанбай Батыр', house: '15',podezd: '2', etazh: '9', flat: '15',  id: '651621',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Кокшетау", raion: 'Свобода', street: 'Кабанбай Батыр', house: '15', podezd: '2',etazh: '9', flat: '15',  id: '89456',  status: 'отключен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Талдыкорган", raion: 'Ленин', street: 'Кабанбай Батыр', house: '15', podezd: '2',etazh: '9', flat: '15',  id: '32151',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Алматы", raion: 'Медеуский', street: 'Кабанбай Батыр', house: '15', podezd: '2',etazh: '9', flat: '15',  id: '"23423"',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Тараз", raion: 'Кордай', street: 'Кабанбай Батыр', house: '15', podezd: '2',etazh: '9', flat: '15',  id: '65451',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"},
          { _rowVariant: "light", isActive: true, shahta: "первая",  type_house: "ЖК 'Есентай Сити'", city: "Тараз", raion: 'Чу', street: 'Кабанбай Батыр', house: '15', etazh: '9', flat: '15',  id: '25245',  status: 'включен', type: 'Физическое лицо', agreement_number: "152051651", snm: "Иванов Иван Иванович", iin: "00525028156", bin: "168132138131", payment: "Карта"}
          
        ]
  }
  },
  methods: {
    toggleRowDetails(row, data) {
      this.detailsMask = data.split(', ')
      row.toggleDetails()
    },
    rowOn(item) {
      this.$set(item, "status", "включен")
    },
    rowOff(item) {
      this.$set(item, "status", "отключен")
    },
    changeId(item){
      this.$set(item, "id", Math.floor(Math.random()*1000000))
    },
    turnOnAllHere(data){
      this.count = data;
    }, 
    
    addHistory(){
      this.history.push("Hello")
    },
    downloadCSVData() {
    let csv = 'Put,Column,Titles,Here\n';
    this.history.forEach((row) => {
            csv += row.join(',');
            csv += "\n";
    });
 
    const anchor = document.createElement('a');
    anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv);
    anchor.target = '_blank';
    anchor.download = 'история.csv';
    anchor.click();
}

  
  }

  }
</script>

<style lang="scss" scoped>
  
    $body-bg: #000;

    $body-color: rgb(105, 62, 62);

  @import "~bootstrap/scss/bootstrap.scss";
  @import '~bootstrap-vue/dist/bootstrap-vue.css';
    
    $red: #8f3333;
  
  .clapans{
    margin-top: 1rem;
  }
  
 
  .card{
    margin-right: 1rem;
    border: none;
  }

  .onButton{
    margin-right: 1rem;
    background-color: #629e6c;
  }
  .offButton{
    margin-right: 1rem;
    background-color: #f57575;
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

  p{
    margin-top: 1.5rem;
  }
  h3{
    margin-top: 1rem;
  }
  
  .myTable{
    border-radius: 1rem;
    border-style: solid;
    border-width: thin;
  }
  
</style>