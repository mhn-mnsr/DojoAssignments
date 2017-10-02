function slotMachine(quarters, walkAwayAmount){  
    while(quarters>0){
        quarters--;
        var winningNumber = 1;
        if(Math.floor(Math.random() * 100)=== winningNumber){
            quarters += Math.floor(Math.random() * 51 + 50)//Victory block of code, so add quarters//
            console.log("The user just won, and now has " + quarters + " quarters")
            if(quarters >= walkAwayAmount){
                break
            }
        }
    }
    return quarters;
}
var result = slotMachine(200, 250);
console.log(result);
    
//     if (quarters > 0){
//         var won = Math.floor(Math.random()*100);
//     }
//     if (won == 1){
//         var newquarters = Math.random()*50+50
//        console.log(newquarters+quarters);
//     }
//     else{
//         if(won == 0);
//         console.log(quarters-1);
//     }

// }
    