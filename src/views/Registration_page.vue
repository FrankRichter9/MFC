<template>
  <div>
    <Header />
    <main>
      
      <Registration />
     
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Registration from '@/components/Registration';


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
    Registration,
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
