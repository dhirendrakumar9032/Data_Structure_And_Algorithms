var pivotIndex = function(nums) {
    
    const total=nums.reduce((acc,num)=>acc+num);
    
    let curr=nums[0];

    for(let i=1; i<nums.length; i++) {
        let temp=total-curr-nums[i];
        if(curr==temp){
            return i;
        }
            curr+=nums[i];
    }
  return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]));