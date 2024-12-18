

const Dammage  = ( min , max ) => {
     
    return Math.floor(Math.random( ) * (max - min) + 5)
}

const app = Vue.createApp({

    data(){
        return {

            HealthOfMonster : 100,
         HealthOfPlayer : 100,
        CurrentRound  : 0,
        judge : null,
        GameLogs : []
        
    };
    },
    computed : {

        MonsterHealthStatus (){
            if(this.HealthOfMonster <= 0)
                return {width : '0%'};
            return {width : this.HealthOfMonster + '%'};
        },
        PlayerHealthStatus (){
            if(this.HealPlayer <= 0)
                return {width :'0%'};
            return {width : this.HealthOfPlayer + '%'};
        },
         RoundNumber(){
            return this.CurrentRound % 3 !== 0 ;
         }
    },
    watch: {

        HealthOfMonster(value){
              if(value <= 0 && this.HealthOfPlayer  <= 0 ){
                this.judge = 'Draw';
              }else if(value  < 0){
                  this.judge = 'Player'
              }
        },
        HealthOfPlayer(value){
            if(value <= 0 && this.HealthOfMonster  <= 0 ){
                this.judge = 'Draw';
              }else if(value  < 0){
                  this.judge = 'Monster';
              }
        }
    },
    methods : {
        
        RestartTheGame(){
                this.HealthOfPlayer = 100;
                this.HealthOfMonster = 100;
                this.CurrentRound = 0;
                this.judge = null;
                this.GameLogs = [];
        },
        PlayerAttackingMonster(){
            this.CurrentRound++;
            const DemmageEffect  = Dammage(5 , 12);
            this.HealthOfMonster -= DemmageEffect;
            this.GameLogsFun("Player" ,"Attack" , DemmageEffect);
            this.MonsterAttackingPlayer();
        },
        MonsterAttackingPlayer(){

            const DemmageEffect  = Dammage( 8 , 15);
            this.HealthOfPlayer -= DemmageEffect;
            this.GameLogsFun("Monster" ,"Attack" , DemmageEffect);
           
       
        },
        SpecialAttack(){
            this.CurrentRound++;
             this.HealthOfMonster -= Dammage(10,20);
             this.GameLogsFun("Player" ,"Attack" , DemmageEffect);
             this.MonsterAttackingPlayer();
        },
        HealPlayer(){
             this.CurrentRound++;
             const CurrentHeal =this.HealthOfPlayer + Dammage(5 , 10 ); 
             if( CurrentHeal > 100)
                this.HealthOfPlayer = 100;
             else
                 this.HealthOfPlayer += Dammage(8 , 20);

                this.GameLogsFun("Player" ,"healing" , CurrentHeal); 
       
          this.MonsterAttackingPlayer();
        },
        MonsterSurrender(){
             this.judge = "Monster";
        },
        GameLogsFun(who, what, value) {
            this.GameLogs.unshift({
                ID: who,
                WhatIsHappen: what,
                Demmage: value
            });
        }

        
    
        
    }
});

app.mount("#game")