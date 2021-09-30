<template>
  <article class="main-page">
      <section class="container">
          <router-link to="/login" class="link">
            <article class="main-block" >
                <!-- <img src="@/assets/img/free-icon-online-meeting-5601939.png" alt="" class="main-block__img"> -->
                <span class="main-block__text">Войдите или зарегистрируйтесь</span>
            </article>
          </router-link>  
      </section>
  </article>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'Main',
    computed:   {
        isLogin(){
            return !!localStorage.getItem('token')
        }
    }
        
}

</script>

<style scoped>
.link{
    text-decoration: none;
}

.main-page{
    margin: 0 auto;
}
.main-block{
    /* background-color: #F7F7F7; */

    

    width: 1000px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    /* box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04); */
    border-radius: 10px;

    border: 3px dashed #F7F7F7;

    margin: 30px 0 0 0;

    cursor: pointer;
    transition: .3;
}

.organization, .services{
    width: 660px;

    flex-direction: row;
}





.main-block__img{
    width: 100px;
}

.main-block__text{
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none !important;
}

.organization .main-block__text, .services .main-block__text{
    padding: 0 0 0 44px;
}

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

@media screen and (max-width: 730px) {
    
}
</style>