function searchEle(marks,sk){
    for(i=0;i<marks.length;i++){
        if(sk==marks[i])
            return `Element is found at index ${i}`
            
    }
    return 'Element not found'
}
let found=searchEle([10,20,30,40],20)
console.log(found)