// console.log(typeof(numbersOnly));
function numbersOnly(arr){
    var arrNew = [];
    for(var i = 0; i < arr.length; i++){
        if(typeof(arr[i])==="number"){
            arrNew.push(arr[i])       
        }
    }
    console.log(arrNew);
    // return arrNew; 
}
numbersOnly([1, "apple", -3, "orange", 0.5]);