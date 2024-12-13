

const Dammage  = ( min , max ) => {
     
    return Math.floor(Math.random( ) * (max - min) + 5)
}

const app = Vue.createApp({

    data(){
        return {

         HealthOfMonster : 100,
         HealthOfPlayer : 100,
        UserInput  : ""
        };
    },
    methods : {
        
        PlayerAttackingMonster(){
            this.HealthOfMonster -= Dammage(5 , 12);
            this.MonsterAttackingPlayer();
        },
        MonsterAttackingPlayer(){
            this.HealthOfPlayer -=  Dammage(8 , 15); 
        
        }
        
    }
});

app.mount("#game")