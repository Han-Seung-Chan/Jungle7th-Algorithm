const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().replace('\r','').split('\n');

let M = +input[0];
let N = +input[1];
const arr =[];

for(let i=M;i<=N;i++){
    if(a(i)){
        arr.push(i);
    }
}
if(arr.length==0){
    console.log(-1)
}else {
    console.log(arr.reduce((sum,item)=>{
        return sum + item;
    }, 0))
    console.log(arr[0])

}

function a(n){
    if( n == 1){
        return false;
    }else{
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i == 0){
                return false;
            }
        }
    }
    return true;
}