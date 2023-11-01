function determineExercise(calories) {
   let exerciseType = "";
   let exerciseTime = 0;

   if (calories > 670) {
      exerciseType = "lari";
      exerciseTime = Math.floor((calories - 670) / 10);
   } else if (calories > 500) {
      exerciseType = "tenis";
      exerciseTime = Math.floor((calories - 500) / 10);
   } else {
      exerciseType = "berenang";
      exerciseTime = Math.floor(calories / 10);
   }

   return { calories, exerciseType, exerciseTime };
}

const caloriesConsumed = 800;
const exerciseInfo = determineExercise(caloriesConsumed);
console.log(exerciseInfo);
