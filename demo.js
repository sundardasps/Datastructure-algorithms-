function a (){
    
    let a = {
        value : 100
    }

    b(a)
    console.log(a.value,"a");

}


function b(a){
   
    let c = a.value + 10
    console.log(c,"b");
}

a()