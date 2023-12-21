const str='PAYPALISHIRING';
const row=3;

function zigzag(str) {

}

function storeStrInArr(str,row){
  let arr=[];
  let temp='';
  for(let i=0;i<str.length;i++){
      temp+=str[i];
    if(i+1%3==0){
        arr.push(temp);
        arr.push(str[i]);
        temp='';
    } 
  }
}