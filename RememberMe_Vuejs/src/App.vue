<template>
   <the-header title="RememberMe"></the-header>    
   <the-resources></the-resources>
</template>




<script>
import TheHeader from './Components/layouts/TheHeader.vue';
import TheResources from './Components/Learning-Resource/TheResources.vue';
export default {
      components:{TheHeader , TheResources},
 
 
}
</script>



<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    box-sizing: border-box;
}
html{ 
  font-family: 'Roboto',sans-serif;
}
body{ 
   margin: 0;
}
</style>