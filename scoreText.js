
let scoreText = function(name = 'anonymous',score = 0){
return 'Name: ${name} - score: ${score}'
}
let ScoreText = scoreText(undefined,99)
console.log(ScoreText)