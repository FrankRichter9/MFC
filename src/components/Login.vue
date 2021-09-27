<template>
      <section class="container">
          <article class="login-block" v-show="!username">
              <span class="login-block__head">Авторизация</span>

              <form action="" class="login-block__form">
                  <input type="text" class="login-block__input" placeholder="Логин" v-model="login">
                  <input type="password" class="login-block__input" placeholder="Пароль" v-model="password">

                  <button type="button" class="login-block__btn" @click="loginServer" :disabled="!login || !password">Войти</button>
                  <router-link to="/Registration" class="login-block__registration-link">Регистрация</router-link>
              </form>
          </article>


          <article class="login-block login-block-isLogin" v-show="!!username">
              <span class="login-block__head login-block__head-isLogin">Вы вошли под именем <b class="isLogin-name">{{username}}</b></span>

              <form action="" class="login-block__form">
                  <button type="button" class="login-block__btn" @click="unloginServer">Выйти</button>
              </form>
          </article>

          <article class="errorPopup" v-show="errorPopup">
              Неверный логин или пароль
          </article>
      </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'


export default {
    data(){
        return {
            login: '',
            password: '',

            username: null,
            errorPopup: false
        }
    },
    name: 'Login',
    computed: {
        ...mapGetters([
            'GET_USERS'
        ]),
    },
    methods: {
        ...mapActions([
            'LOGIN',
            'API_USERS'
        ]),
        async loginServer(){
            const data = {
                username: this.login,
                password: this.password
            }
            let response = await this.LOGIN(data)

            if(response.status === 200){
                localStorage.setItem('token', response.data.access)
                this.API_USERS()

                let user = this.GET_USERS.filter(user => user.username === this.login)
                
                localStorage.setItem('user-permission', user[0].is_staff)

                
                
                localStorage.setItem('username', this.login)
                this.username = this.login
                this.$router.push({name: 'Main'})

            }

            if(response?.detail === "No active account found with the given credentials"){
                this.errorPopup = true;
                setTimeout(() => {
                    this.errorPopup = false;
                }, 2000);
            }
            
            console.log(response)
        },
        unloginServer(){
            this.username = null
            this.login = ''
            this.password = ''
            localStorage.removeItem('token')
            localStorage.removeItem('username')
            localStorage.removeItem('user-permission')
            // localStorage.setItem('user-permission', false)
            this.$router.push({name: 'Main'})
        }
    },
    mounted(){
        
        if(localStorage.key('token') && localStorage.key('username')){
            this.username = localStorage.getItem('username')
        }
    }
}

</script>

<style scoped>
.container{
    display: flex;
    
    justify-content: center;
    align-items: center;

    min-height: 80vh;
}

.login-block{
    width: 438px;
    height: 316px;

    background: #FFFFFF;

    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
    border-radius: 10px;

    box-sizing: border-box;
    padding: 40px;
}

.errorPopup{
    position: absolute;
    padding: 15px;

    background: #FFFFFF;

    color: #f00;
    top: 700px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
}

.login-block-isLogin{
    height: 186px;
}

.login-block__head{
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 100%;
    /* identical to box height, or 20px */

    letter-spacing: -0.02em;

    /* Text / Main */

    color: #1C1C1C;
}

.login-block__head-isLogin{
    display: block;
    text-align: center;
    font-weight: normal;
}

.isLogin-name{
    font-weight: bold;
}

.login-block__form{
    display: block;

    width: 100%;

    display: flex;
    flex-direction: column;

    margin: 32px 0 0 0;
}

.login-block__input{
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

.login-block__btn{
    border: none;

    width: 358px;
    height: 48px;

    background: #3070F3;
    border-radius: 24px;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;

    color: #fff;

    cursor: pointer;

    margin: 12px 0 0 0;
}

.login-block__btn:disabled{
    opacity: .6;
}
.login-block__registration-link{
    text-align: center;

    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;

    padding: 12px 0 0 0;

    text-decoration: none;
}

.login-block__input:active {
    border: none;
}

@media screen and (max-width: 730px) {
    
}
</style>