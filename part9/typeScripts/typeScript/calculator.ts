type Operation = "add" | "multiply" | "div";
type Result = string | number;


const calculator = (a:number, b:number, op:Operation) : Result =>{
    switch(op){
        case "add":
            return a+b;
        case "multiply":
            return a*b;
        case "div":
            return a/b;
            default:
                throw new Error('Illegal operation')    }
}

console.log(calculator(2,4,"div"));