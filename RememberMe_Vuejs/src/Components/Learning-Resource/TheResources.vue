<template>
     <base-card>
     <base-button @click="SelectTheResources('stored-resources')">Stored resources</base-button>
     <base-button @click="SelectTheResources('add-resources')">Add Resource</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectTab"></component>
    </keep-alive>
     
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
                resources : this.StoreResources,
                AddNew: this.AddNewResources,
                deleteResource: this.removeResource

             };
        }
    ,
    methods:{
         
        SelectTheResources(tab){
            console.log(tab);
                     this.selectTab = tab;
    },
    AddNewResources(EnteredTitle , EnteredDescription , Enteredlink){ 
             const NewData= { 
                 id: new Date().toISOString(),
                 title :  EnteredTitle,
                 description: EnteredDescription,
                 link:Enteredlink
             } 
            this.StoreResources.unshift(NewData);
            this.selectTab='stored-resources';
    },
    removeResource(resId){
            const resIndex = this.StoreResources.findIndex(res => res.id === resId);
            this.StoreResources.splice(resIndex,1);
    }
    }
}
</script>

BasseButton