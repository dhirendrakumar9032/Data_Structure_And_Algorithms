const BubbleSort = (arr)=>{
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<arr[i]){
                [arr[j], arr[i]]=[arr[i], arr[j]]
            }
        }
    }
    return arr;
}

console.log(BubbleSort([4,5,2,3,1,44]));