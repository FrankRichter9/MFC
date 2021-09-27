<template>
  <article class="offices">
      <section class="container">
          <span class="search-form__head">
              Организации
              <span class="search-form__head-small">(услуги которых предоставляются в офисах МФЦ)</span>
            </span>
          <form action="" class="search-form">

              
              <section class="search-form__search-block">
                  <img src="@/assets/img/search.png" alt="search-icon">
                  <input type="text" placeholder="Найти по названию" class="search-form__search-input"
                    v-model="searchInput"
                  >
              </section>

              

                <!-- <section class="search-form__select-block">
                    <select name="" id="organizations" class="search-form__select">
                        <option value="">Сортировать по организации</option>
                        <option value="">МВД</option>
                    </select>
                </section> -->
              

              <button type="button" class="add-btn" v-show="isWorker">+  Добавить организацию</button>
          </form>

          <ul class="offices-list">
              <li class="offices-list__item"
                v-for="organization in search(GET_ORGANIZATIONS)"
                :key="organization.id"
              >
                  <section class="offices-list__item-info">
                        <span class="offices-list__item__header">
                        {{organization.name}}
                    </span>
                    <ul class="offices-list__item__addres-list">
                        <li class="offices-list__item__addres-list__item">
                            <span class="offices-list__item__addres">
                                {{organization.activity}}
                            </span>
                        </li>
                        
                    </ul>
                    
                    <!-- <span class="offices-list__item__phone">
                        <a href="#">8-435-245-23-33</a>
                    </span> -->
                  </section>
              </li>
          </ul>
      </section>
  </article>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'Organizations',
    data(){
        return {
            searchInput: ''
        }
    },
    computed: {
        ...mapGetters([
            'GET_ORGANIZATIONS'
        ]),
        isWorker(){
            return localStorage.getItem('user-permission') === 'true'
        }
    },
    methods: {
        ...mapActions([
            'API_ORGANIZATIONS'
        ]),
        search(orientations){
            if(this.searchInput === "")return orientations
            if(this.searchInput !== ''){
                let search_str = new RegExp(this.searchInput, "ig");
                let searchArr = orientations.filter(item => {
                    return item.name.match(search_str)
                    
                })

                return searchArr
            }
        }
    },
    mounted(){
        this.API_ORGANIZATIONS()
    }
}

</script>

<style scoped>
.offices-list{
    list-style: none;

    display: flex;
    flex-direction: column;
}

.offices-list__item__addres-list{
    list-style: none;
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

    margin: 15px 0;

    cursor: pointer;
    transition: .3s;
}

.offices-list__item:hover{
    background-color: #3070F31F;
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

@media screen and (max-width: 730px) {
    
}
</style>