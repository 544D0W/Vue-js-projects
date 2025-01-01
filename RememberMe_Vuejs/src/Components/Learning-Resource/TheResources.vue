<template>
     <base-card>
     <base-button @click="SelectTheResources('stored-resources')">Stored resources</base-button>
     <base-button @click="SelectTheResources('add-resources')">Add Resource</base-button>
    </base-card>
    <component :is="selectTab"></component>
     
</template>


<script>
import AddResources from './AddResources.vue';
import StoredResources from './StoredResources.vue';

export default {
  components: { AddResources,StoredResources},

        
    data(){ 

        return {
             selectTab:'stored-resources'
         ,
               StoreResources : [ {
                  id: 'official-guide',
                  title:'official-guide',
                  description : 'The Official  Vue.js Documents of 2014',
                  link:'https://vuejs.org'   
               },
               {
                  id: 'google',
                  title:'Google',
                  description : 'Learn any thing from the google',
                  link:'https:/google.com'   
               } ]
          };
  
    
    },
     provide() {
             return { 
                resources : this.StoreResources
             };
        }
    ,
    methods:{
         
        SelectTheResources(tab){
            console.log(tab);
                     this.selectTab = tab;
    }
    }
}
</script>

BasseButton