const arr = [1, 2, 3, 7, 9];
const n = 5;
const k = 21;

function approach1(arr, n, k) {
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (j = i; j < n; j++) {
      sum += arr[j];
      if (sum == k) {
        return [i, j];
      }
    }
  }
  return -1;
}
// O(n)

function approach2(arr, n, k) {
 let left = 0;
 let right = 0;
 let sum = 0;

 while (right <= n) {
   if (sum < k) {
     sum += arr[right];
     right++;
   } else if (sum > k) {
     sum -= arr[left];
     left++;
   } else {
     return [left + 1, right];
   }
 }

 return [-1];
}

console.log(approach2(arr, n, k));
