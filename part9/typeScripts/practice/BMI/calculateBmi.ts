interface values {
    height:number,
    weight:number
}

interface IFbmi extends values{
    bmi:string
}

const calculateBmi = (weight:number, height:number):IFbmi =>{
    const bmiCalc:number = (weight)/((height/100)*(height/100));
    let status:string;

    if (bmiCalc < 18.5){
        status = "Underweight";
    }else if(18.5 <= bmiCalc && bmiCalc <= 25){
        status = "Normal range";
    }else{
        status = "Overweight";
    }

    return {
            weight:weight,
            height:height,
            bmi: status
        }
}
const processValue = (args:string[]) =>{
    if(args.length > 4) throw new Error("Too much arguments");
    if(args.length < 4) throw new Error("Too few arguments");

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))){
        try{
            console.log(calculateBmi(Number(args[2]),Number(args[3])));
        }catch(e){
            console.log(e);
        }
        
    }else{
        throw new Error("Invalid number passed.");
    }
}

    
if(require.main === module){
    processValue(process.argv);
}


export default calculateBmi
