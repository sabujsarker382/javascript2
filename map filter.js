const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ];
  
  // Use map to calculate the average test score for each student
//   const studentAverages = students.map(student => {
//     const sum = student.scores.reduce((acc, score) => acc + score);
//     return { name: student.name, average: sum / student.scores.length };
//   });
const studentAverages=students.map(students=>{
    return[{name:students.name}];
});
  console.log(studentAverages);
  
  // Use filter to only select students with an average above 90
  const highPerformers = studentAverages.filter(student => student.average > 90);