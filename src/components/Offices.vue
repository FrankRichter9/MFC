<template>
  <article class="offices">
      <section class="container">
            <span class="search-form__head">
                Офисы МФЦ
              <span class="search-form__head-small">(на сайте предоставленны только офисы г. Москва)</span>
            </span>

          <form action="" class="search-form">

              <section class="search-form__search-block">
                  <img src="@/assets/img/search.png" alt="search-icon">
                  <input type="text" placeholder="Найти офис по адресу" class="search-form__search-input" v-model="searchInput">
              </section>

              

                
              

              <button type="button" class="add-btn"
                @click="AddPopup = !AddPopup"
                v-show="isWorker"
               >+  Добавить офис</button>
          </form>

          <ul class="offices-list">
              <li class="offices-list__item" v-for="office in search(GET_OFFICES)" :key="office.id">
                  <section class="offices-list__item-info">
                    <span class="offices-list__item__header">
                       {{office.office_name}}
                    </span>
                    <span class="offices-list__item__addres">
                        {{office.addres}}
                    </span>
                    <span class="offices-list__item__phone">
                        <a href="#">{{office.phone_number}}</a>
                    </span>
                  </section>

                <section v-show="isWorker">
                    <img src="@/assets/img/edit.png" alt="edit-icon" class="offices-list__item__edit-icon"
                        @click="EditIndex = office.id; EditPopup = true"
                    >
                    <img src="@/assets/img/trash.png" alt="edit-icon" class="offices-list__item__edit-icon"
                        @click="DelIndex = office.id; DelPopup = true"
                    >
                </section>
                  <PopupEditOffice v-show="EditPopup && office.id === EditIndex"
                        :office="office"
                        :index="office.id"
                        @close="EditPopup = false"
                    />
                  <PopupDeleteOffice v-show="DelPopup && office.id === DelIndex"
                        :office="office"
                        :index="office.id"
                        @close="DelPopup = false"
                    />
              </li>
          </ul>
      </section>
        
      <PopupAddOffice v-show="AddPopup" @close="AddPopup = false"/>
  </article>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PopupAddOffice from '@/components/PopupAddOffice'
import PopupEditOffice from '@/components/PopupEditOffice'
import PopupDeleteOffice from '@/components/PopupDeleteOffice'

export default {
    name: 'Header',
    data(){
        return {
            AddPopup: false,
            EditPopup: false,
            EditIndex: null,
            DelPopup: false,
            DelIndex: null,

            searchInput: ''
        }
    },
    components: {
        PopupAddOffice,
        PopupEditOffice,
        PopupDeleteOffice
    },
    computed: {
        ...mapGetters([
            'GET_OFFICES'
        ]),
        textLogin(){
            if(localStorage.getItem('username'))return '<b>' + localStorage.getItem('username') + '</b>';
            return 'Войти'
        },
        isWorker(){
            return localStorage.getItem('user-permission') === 'true' && localStorage.getItem('username') === 'admin'
        }
        
    },
    methods: {
        ...mapActions([
            'API_OFFICES'
        ]),
        search(arr){
            if(this.searchInput !== ''){
                let search_str = new RegExp(this.searchInput, "ig");
                let searchArr = arr.filter(item => {
                    return item.addres.match(search_str)
                })

                return searchArr
            }
             

            if(this.searchInput === '')return arr
        },
        
    },
    mounted(){
        this.API_OFFICES()
    }
}

</script>

<style scoped>
.offices-list{
    list-style: none;

    display: flex;
    flex-direction: column;
}

.add-btn{
    background-color: #3070F3;

    background: #3070F3;
    border-radius: 20px;

    padding: 11px 20px;

    border: none;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;

    color: #fff;
}

.search-form__head{
    display: block;

    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 26px;

    color: #1C1C1C;

    background-color: #F7F7F7;

    box-sizing: border-box;
    padding: 24px 12px 0 12px;

    margin: 12px 0 0 0;
}

.search-form__head-small{
    font-weight: normal;
    font-size: 16px;
}

.search-form{
    display: flex;
    justify-content: space-between;

    padding: 24px 12px;
    align-items: center;

    background-color: #F7F7F7;

    margin: 0 0 12px 0;

    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
}

.search-form__select{
    width: 345px;
    height: 40px;

    background: #EEEEEE;
    border-radius: 4px;

    border: none;

    box-sizing: border-box;
    padding: 0 20px;
}

.search-form__search-block{
    display: flex;
    align-items: center;
}

.search-form__search-input{
    border: none;
    
    border-bottom: 1px solid #E8E8E8;

    background-color: #F7F7F7;

    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;

    margin: 0 0 0 10px;

    width: 300px;
    padding: 3px 5px;
}

.offices-list__item{
    display: block;

    background-color: #F7F7F7;

    box-sizing: border-box;
    padding: 24px;

    border-radius: 10px;
    
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    margin: 12px 0;
}

.offices-list__item__edit-icon{
    cursor: pointer;
}

.offices-list__item__header{       
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    display: block;
}

.offices-list__item__addres{       
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;

    color: #959595;

    display: block;
    margin: 12px 0 0 0;
}
.offices-list__item__phone{       
    font-family: Inter;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;

    /* color: #959595; */

    display: block;
    margin: 12px 0 0 0;
}

.offices-list__item__edit-icon{
    margin: 0 5px;
}

@media screen and (max-width: 730px) {
    
}
</style>