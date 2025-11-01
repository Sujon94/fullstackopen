interface multyValues{
    value1: number,
    vlaue2: number
}
const parseArguments = (arg:string[]):multyValues=>{
    if(arg.length<4) throw new Error('Not enough arguments.');
    if(arg.length>4) throw new Error('To many arguments.');

    if(!isNaN(Number(arg[2])) && !isNaN(Number(arg[3]))){
        return {
             value1 : Number(arg[2]),
             vlaue2 : Number(arg[3])
        }
    }else{
        throw new Error(`Not a valid number`);
    }
}
const multiplicator = (a:number, b:number, plainText:string) =>{
    return `${plainText} : ${a*b}`;
}
try{
const {value1, vlaue2} = parseArguments(process.argv);
console.log(multiplicator(value1,vlaue2,`Multiplication of ${value1} and ${vlaue2} is`));

}catch(e){
    console.log(e.message)
}
