<template>
  <div>
    <Header />
    <main>
      
      <Login />
     
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Login from '@/components/Login';


export default {
  data(){
    return {
      categoriId: 1
    }
  },


  name: 'Home',
  components: {
    Header,
    Footer,
    Login,
  },
  methods: {
    EditCategori(id){
      this.categoriId = id;
    }
  }
}
</script>

<style>

</style>
