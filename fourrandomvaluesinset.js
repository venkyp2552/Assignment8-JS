function RM(limit){
    let ar=new Set();
    let counter=0
    while(true){
        const newRandom=Math.floor(Math.random()*limit);
        if(!ar.has(newRandom)){
            ar.add(newRandom);
            counter++
        }
        if(counter>=limit){
            break
        }
    }
    if(ar.has(8)){
        console.log("Yes 8 It will be there")
    }else{
        console.log("No 8 It will be there")
    }
    return ar
}

console.log(RM(10))