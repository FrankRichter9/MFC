<template>
  <article class="main-page">
      <section class="container">
          <router-link to="/offices" class="link">
            <article class="organization-office main-block">
                <img src="@/assets/img/free-icon-online-meeting-5601939.png" alt="" class="main-block__img">
                <span class="main-block__text">Найти офис</span>
            </article>
          </router-link>

            <router-link to="/Organizations" class="link">
          <article class="organization main-block">
              <img src="@/assets/img/free-icon-discussion-5601981.png" alt="" class="main-block__img">
              <span class="main-block__text">Доступные организации</span>
          </article>
            </router-link>


          <article class="services main-block">
              <img src="@/assets/img/free-icon-change-5601887.png" alt="" class="main-block__img">
              <span class="main-block__text">Предоставляемые услуги</span>
          </article>

          <article class="documents main-block" v-if="isLogin">
              <img src="@/assets/img/free-icon-contact-5601989.png" alt="" class="main-block__img">
              <span class="main-block__text">Мои Документы</span>
          </article>

          
      </section>
  </article>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'Main',
    computed:   {
        isLogin(){
            if(localStorage.getItem('token'))return true
        }
    }
        
}

</script>

<style scoped>
.link{
    text-decoration: none;
}

.main-block{
    background-color: #F7F7F7;

    width: 400px;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
    
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
    border-radius: 10px;

    margin: 30px 0 0 0;

    cursor: pointer;
    transition: .3;
}

.organization, .services{
    width: 660px;

    flex-direction: row;
}



.main-block:hover{
    background-color: #ececec;
}

.main-block__img{
    width: 100px;
}

.main-block__text{
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    padding: 24px 0 0 0;
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