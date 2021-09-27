<template>
  <div>
    <Header />
    <main>
      
      <Main />
     
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Main from '@/components/Main'


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
    Main
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
