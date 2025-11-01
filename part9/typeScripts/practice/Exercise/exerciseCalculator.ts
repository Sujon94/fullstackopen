
interface exerciseInfo{
    periodLength:number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}
const calculateExercises = (days:string[]):exerciseInfo=>{
    let exerciseInfo = days.slice(2);
    let daysWithTarget = exerciseInfo.map(str=>{
        return Number(str);
    })
    let periods = daysWithTarget.slice(1, daysWithTarget.length);
    
    let trainingDays = periods.filter(days=>{
        return days > 0;
    });
    
    let totalHours = trainingDays.reduce((accumulator, currentValue)=>{
        return accumulator+currentValue;
    });
    
    let average = totalHours/trainingDays.length;

    let targetDays = daysWithTarget[0];//daysWithTarget[daysWithTarget.length-1];
    let ratings = 0;
    let ratingText='';
    if (average >= 3)
        {
            ratings = 3;
            ratingText = 'Best';
        }else if(average < 3 && average >= 2){
            ratings = 2;
            ratingText = "Better"
        }else{
            ratings = 1;
            ratingText = "Good";
        }

    return {
        periodLength:daysWithTarget.length-1,
        trainingDays: trainingDays.length,
        success: trainingDays.length >= targetDays,
        rating: ratings,
        ratingDescription: ratingText,
        target: targetDays,
        average: average
    }
}
console.log(calculateExercises(process.argv))