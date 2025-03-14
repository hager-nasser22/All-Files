let person = {
    fname:"Hager",
    age:22
}
person[Symbol.iterator] = function (){
    let keys = Object.keys(this);
    let values = Object.values(this);
    let count =0;
    return {
        next: ()=>{
            if(count < keys.length){
                return {value:{key:keys[count],value:values[count++]},done:false};
            }else{
                return {value:undefined , done:true};
            }
        }
    }
}
for(let count of person){
    console.log(count);
}

// function* objectFunction(){
//     for(let key in person){
//         yield {key,value:person[key]};
//     }
// };