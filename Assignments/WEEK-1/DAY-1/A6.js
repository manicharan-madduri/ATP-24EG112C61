function sumOfArr(marks,sum){
for(i=0;i<marks.length;i++){
    sum+=marks[i]
}
return sum
}
let ans=sumOfArr([90,78,65,98],0)
console.log(ans)