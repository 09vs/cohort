function VishankAsync(){
    let p= new Promise(function(resolve){
        setTimeout(function(){
            resolve("hi there")
        },1000)
    });
    return p;
}
async function main(){
//no callback,no .then syntax
    let value =await VishankAsync()
    console.log(value);
}
main();