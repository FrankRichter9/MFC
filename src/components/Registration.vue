<template>
      <section class="container">
          <article class="login-block">
              <span class="login-block__head">Регистрация</span>

              <form action="" class="login-block__form">
                  <input type="text" class="login-block__input" placeholder="Логин*" required v-model="login">
                  <input type="text" class="login-block__input" placeholder="Почта" v-model="email">
                  <input type="password" class="login-block__input" placeholder="Пароль*" required v-model="password">

                  <button type="submit" class="login-block__btn" @click.prevent="registration">Зарегистрироваться</button>
                  <router-link to="/login" class="login-block__registration-link">Войти</router-link>
              </form>
          </article>
      </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    data(){
        return {
            login: '',
            email: '',
            password: ''
        }
    },
    name: 'Registration',
    methods: {
        ...mapActions([
            'REGISTRATION',
        ]),
        async registration(){
            const data = {
                username: this.login,
                email: this.email,
                password: this.password
            }
            let response = await this.REGISTRATION(data)
            
            console.log(response)
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
    height: 366px;

    background: #FFFFFF;

    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04);
    border-radius: 10px;

    box-sizing: border-box;
    padding: 40px;
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