function check_prime(num){
    let count=0
    for(let i=1; i<=num; i++){
        if(num%i==0){
            count+=1
        }
    }
    if(count==2){
        console.log("Number is Prime")
    }
    else{
        console.log("Number is not Prime")
    }
}
check_prime(7)