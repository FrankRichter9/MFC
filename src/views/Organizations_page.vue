<template>
  <div>
    <Header />
    <main>
      
      <Organizations />
     
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Organizations from '@/components/Organizations'


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
    Organizations
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
