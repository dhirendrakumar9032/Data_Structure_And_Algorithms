const str='PAYPALISHIRING';
const sub='PAY';

var isSubsequence = function(s, t) {
    const set = new Set(t);
     
     let str='';

     for(let i=0;i<s.length;i++){
         if(set.has(s[i])){
             str+=s[i];
         }
     }
     console.log({set,str})
     if(str===s){
         return true
     }else{
         return false;
     }
};

console.log(isSubsequence(str,sub));