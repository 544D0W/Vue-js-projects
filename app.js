const app = Vue.createApp({
  data() {
    return { 
      UserGoal : "",
      goals: []
     };
  },
  methods : {
    AddGoals(){
      console.log("enter here\n");
      this.goals.push(this.UserGoal);
     },
     DeletGoals(index){
        this.goals.splice(index ,1);
     }
  }
});

app.mount('#user-goals');
