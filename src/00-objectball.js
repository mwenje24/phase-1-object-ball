 const gameObject = (home, away) =>{
    console.log(gameObject)
 }

 function homeTeamName() {
   let object = gameObject()
   return object['home']['teamName']
 }
 
 console.log(homeTeamName())

 function goodPractices() {
   let game = gameObject();
   for (let gameKey in game) {
     // are you ABSOLUTELY SURE what 'gameKey' is?
     // use the debugger to find out!
     debugger;
     let teamObj = game[gameKey];
     for (let teamKey in teamObj) {
       // are you ABSOLUTELY SURE what 'teamKey' is?
       // use debugger to find out!
       debugger;
 
       // what is 'data' at each loop through out this block?
       // when will the following line of code work and when will it break?
       let data = teamObj.player;
       for (let key in data) {
         debugger;
       }
     }
   }
 }