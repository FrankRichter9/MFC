<template>
  <div>
    <Header />
    <main>
      
      <Users />
     
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Users from '@/components/Users'


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
    Users
  },
}
</script>

<style>

</style>
