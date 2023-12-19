let arr = [5,2,8,6,3,1,11];

const selectionSort = (arr, n) =>{
    for(let i = 0; i < n-1; i++){
        let min=i;

        for(let j = i+1; j < n; j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }

        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

console.log(selectionSort(arr,7))