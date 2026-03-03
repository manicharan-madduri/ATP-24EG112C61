let marks=[20,10,30,5]
let min=marks[0]
for(let i=1;i<marks.length;i++){
if(min>marks[i]){
min=marks[i]
}
}
console.log(`Minimum marks are ${min}`)