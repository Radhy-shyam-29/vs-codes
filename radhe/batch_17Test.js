function gradeCalculator(marks){
marks = String(marks).trim();
let num = Number(marks)
if(isNaN(num) || marks < 0 || marks > 100){
    return 'Invalid marks'
}
if(marks >=90) return 'A+'
if(marks >=80) return 'A'
if(marks >=70) return 'B'
if(marks >=60) return 'C'
if(marks >=50) return 'D'
if(marks<50)   return 'Fail'
}
console.log(gradeCalculator(56));
