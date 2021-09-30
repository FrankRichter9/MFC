<template>
      <article class="popup">
          <section class="body">
                  <section class="btn-close" @click="$emit('closed')">&times;</section>

                  <section class="organization-info">
                        <h2 class="header">{{organization.name}}</h2>
                        <span class="description">{{organization.activity}}</span>
                  </section>
                   
                <section class="organization-offices">
                    <h3 class="header offices-header">Офисы</h3>
                    <ul class="offices-list">
                        <li class="offices-list__item" v-for="office in organization.offices" :key="office.id">
                            <span>
                                {{office.addres}}
                            </span>
                            <span>
                                <a href="#">{{office.phone_number}}</a>
                            </span>
                        </li>
                    </ul>
                </section>
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
    name: 'PopupOrganization',
    props: ['organization'],
    methods: {
        ...mapActions([
            'ADD_ONE_OFFICE_ACTION',
            'ADD_OFFICE',
            'API_OFFICES'
        ]),
       
    },
    mounted(){
        
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
    width: 1000px;
    height: 600px;

    border-radius: 10px;

    background-color: #fff;

    box-sizing: border-box;

    padding: 6px 44px 24px 44px;


    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;


}

.btn-close{
    width: 100%;
    text-align: right;

    cursor: pointer;

    font-size: 40px;
    color: #CCCCCC;
}

.header{
    font-size: 35px;
    padding: 0 0 10px 0;
}

.description{
    font-size: 16px;
    color: rgb(199, 199, 199);
}

.offices-header{
    padding: 15px 0 0 0;
    font-size: 25px;
}

.offices-list{
    list-style: none;
}

.offices-list__item{
    display: block;
    padding: 15px 0;

    color: rgb(95, 95, 95);
}

</style>