<template>
  <header class="header">
      <section class="container">
          <div class="header__logo">
              <router-link to="/" class="header__link">мфц</router-link>
          </div>
          <nav class="header__nav-block">
              <ul class="header__nav-list">
                  <li class="nav-list__item">
                      <router-link to="/" class="header__link">Главная</router-link> 
                  </li>
                  <li class="nav-list__item">
                       <router-link to="/Organizations" class="header__link">Организации</router-link>
                  </li>
                  <li class="nav-list__item">
                      Услуги
                  </li>
                  <li class="nav-list__item">
                      <router-link to="/Users" class="header__link" v-show="isWorker">Пользователи</router-link>
                  </li>
                  <li class="nav-list__item">
                      <router-link to="/login" class="header__link" v-html="textLogin"></router-link>
                  </li>
              </ul>
          </nav>
      </section>
  </header>
</template>

<script>

export default {
    name: 'Header',
    computed: {
        textLogin(){
            if(localStorage.getItem('username'))return '<b>' + localStorage.getItem('username') + '</b>';
            return 'Войти'
        },
        isWorker(){
            return localStorage.getItem('user-permission') === 'true'
        }
    }
}

</script>

<style scoped>
.header{
    background-color: #F7F7F7;
}
.header__link{
    text-decoration: none;
}

.container{
    display: flex;
    
    justify-content: space-between;
    align-items: center;
}

.header__nav-list{
    list-style: none;

    display: flex;
    
}

.nav-list__item{
    margin: 0 0 0 30px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 100%;

    color: #1C1C1C;

    cursor: pointer;
}

.header{
    padding: 27px 0;
}


.header__logo{
    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 100%;

    text-transform: uppercase;

    color: #3070F3;
}

@media screen and (max-width: 730px) {
    
}
</style>