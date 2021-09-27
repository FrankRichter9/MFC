<template>
      <article class="popup">
          <section class="body">
              <form action="" class="body-form">
                  <section class="btn-close" @click="$emit('close')">	&times;</section>
                  <input type="text" placeholder="Название офиса" class="body_input" v-model="office_name" disabled>
                  <input type="text" placeholder="Адрес офиса" class="body_input" v-model="addres" disabled>
                  <input type="text" placeholder="Телефонный номер" class="body_input" v-model="phone_number" disabled>
                  <section class="btn-section">
                    <button type="button" class="body_btn" @click="DeleteOffice">Удалить</button>
                    <button type="button" class="body_btn btn_not-del" @click="$emit('close')">Оставить</button>
                  </section>
                  
              </form>
          </section>
      </article>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return {
            office_name: '',
            addres: '',
            phone_number: '',
        }
    },
    props: ['office', 'index'],
    name: 'PopupDeleteOffice',
    methods: {
        ...mapActions([
            'ADD_ONE_OFFICE_ACTION',
            'DELETE_OFFICE',
            'API_OFFICES'
        ]),
        async DeleteOffice(){
            const data = {
                numb: this.index,
                obj: {
                    office_name: this.office_name,
                    addres: this.addres,
                    phone_number: this.phone_number
                }

            }
            // this.ADD_ONE_OFFICE_ACTION(data)
            await this.DELETE_OFFICE(data)
            this.API_OFFICES()
            this.$emit('close')
            
        }
    },
    mounted(){
        this.office_name = this.office.office_name
        this.addres = this.office.addres
        this.phone_number = this.office.phone_number
    }
}

</script>

<style scoped>
.popup{
    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, .7);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
}

.body{
    width: 638px;
    height: 276px;

    border-radius: 10px;

    background-color: #fff;

    padding: 6px 24px 24px 24px;


}

.body-form{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.body_input{
    width: 100%;
    height: 40px;

    border: none;

    background: #EEEEEE;
    border-radius: 4px;

    margin: 0 0 12px 0;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;

    color: #252525;

    box-sizing: border-box;
    padding: 0 12px;
}

.btn-close{
    width: 100%;
    text-align: right;

    cursor: pointer;

    font-size: 40px;
    color: #CCCCCC;
}

.body_btn{
    border: none;

    width: 258px;
    height: 48px;

    background: #DD4646;
    border-radius: 24px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;

    color: #fff;

    cursor: pointer;

    margin: 12px 15px;
}

.btn_not-del{
    background-color: transparent;

    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 20px;

    color: #565656;
}

.btn-section{
    display: flex;
    flex-direction: row;
}
</style>