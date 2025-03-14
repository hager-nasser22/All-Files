var user={
    name:'Hager',
    age:18,
    address : 44
}
var prox = new Proxy(user,{
    get: function(obj,property){
        if(property == "name"){
            if(typeof obj[property] != "string" ){
                throw ("name must be string");
            }else{
                if(obj[property].length > 7){
                    throw ("name must be less than 7 char");
                }else{
                    console.log("success");
                }
            }
        }
        if(property == "address"){
            if(typeof obj[property] != "string" ){
                throw ("address must be string");
            }else{
                console.log("success");
            }
        }
        if(property == "age"){
            if(isNaN(parseInt(obj[property])) == true){
                throw ("age must be number");
            }else{
                if(!(obj[property] > 25 && obj[property] < 60)){
                    throw ("name must between 25 and 60");
                }else{
                    console.log("success");
                }
            }
        }
        return 1;
    }
})
console.log(prox.name);
console.log(prox.age);
console.log(prox.address);