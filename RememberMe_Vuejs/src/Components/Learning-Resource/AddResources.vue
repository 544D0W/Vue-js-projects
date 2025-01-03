<template>
     
        <base-dialog  v-if="isValid" title="Invalid input">
            <template #default>
                 <p> Unfortunately, at least one input value is invalid.</p>
                 <p>Please check all inputs and make sure you enter at least a few characters into each input field.</p>
            </template>
            <template #actions>
                   <basse-button @click="CloseWindow">Okay</basse-button>
            </template>
      </base-dialog>
        <base-card>
                <form @submit.prevent="AddResources">
                        <div class="form-control">
                         <label for="title">Title</label>
                        <input id="title" name="title" type="text" v-model="title"/> 
                   </div>  
                    <div class="form-control">
                         <label for="description">Description</label>
                        <textarea id="description" name="description" rows="3" v-model="description"></textarea> 
                   </div>  
                   <div class="form-control">
                         <label for="link">Link</label>
                        <input id="link" name="link" type="url"  v-model="link"/> 
                   </div>
                   <div>
                        <base-button type="submit" >Add Resources</base-button>
                   </div>
                </form>
        </base-card>

</template>


<script>
import BaseDialog from '../../UI/BaseDialog.vue';
import BasseButton from '../../UI/BasseButton.vue';
export default {
  components: { BaseDialog, BasseButton },
         
       inject:['AddNew'],
        data(){
                 return { 

                        title:"",
                        link: "",
                        description:"",
                        isValid:false
                 };
        },
        methods:{
             //* We need to add function useing the emits to send the data to the parrent  
           AddResources(){

            if((this.title.trim() == '') ||( this.description.trim() == '')|| (this.link.trim() == ''))
                 {
                  this.isValid = true;
                  return ;

                 }
            this.AddNew(this.title,this.description, this.link);
     
             
           },
           CloseWindow()
           { 
            this.isValid=false;
           }

        }
}
</script>

<style scoped>

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

</style>
