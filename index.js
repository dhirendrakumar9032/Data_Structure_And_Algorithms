class Stack{
    constructor(){
        this.stack=[]
    }

    pop(){
        if(!this.stack.length){
            return 'stack is  empty'
        }
        return this.stack.pop()
    }

    push(value){
        this.stack.push(value);
    }

    peek(){
         if(!this.stack.length){
            return 'stack is  empty'
        }
        return this.stack[this.stack.length-1];
    }

    print(){
        console.log(this.stack)
    }
}

let stack =  new Stack();

stack.push(1);
stack.push(10);
stack.push(15);
stack.push(21);


stack.print()
console.log(stack.pop())

