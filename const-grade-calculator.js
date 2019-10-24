const gradeCalc = function (score,totalScore) {
    const percentage = (score/totalScore) * 100
    let letterGrade = ''

    if ( percentage > 90 ){letterGrade ='A'}
     else if ( percentage < 90 && percentage > 80){ letterGrade = 'B' }
     else if (percentage <80 && percentage >60) {letterGrade = 'C'}
     else if (percentage < 60 && percentage > 50) {letterGrade = 'D'}
     else {letterGrade = 'E'}

return `You got a ${letterGrade} and ${percentage}%`
}
console.log(gradeCalc(50,100))
console.log(gradeCalc(65,100))
console.log(gradeCalc(75,100))
console.log(gradeCalc(85,100))
console.log(gradeCalc(95,100))
