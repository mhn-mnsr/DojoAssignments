function printRange(start,end,skip){
    if(skip===undefined){
        skip=1;
    }
    if(end === undefined){
       end = start;
        start=0;
        skip = 1;
    }
    
    if(skip <= 0){
        // console.log("here");
        for(var i = start; i>end; i += skip){
                console.log(i);
        }       
    }
   else{
       for(var i = start; i<end; i += skip){
        console.log(i);
       }
       
   } 
    
}

printRange(10);

