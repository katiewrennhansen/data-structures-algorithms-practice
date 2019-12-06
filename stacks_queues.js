
class _NodeS {
    constructor(data, next){
        this.data = data
        this.next = next
    }
}

class Stack {
    constructor(){
        this.top = null
    }


    push(item){
        if(this.top === null){
            this.top = new _NodeS(item, null)
        }
        const node = new _NodeS(item, this.top)
        this.top = node
    }

    pop(){
        if(this.top === null){
            return 
        }
        const node = this.top
        this.top = this.top.next
        return node.data
    }
}

const starTrek = new Stack()
const empty = new Stack()

starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')


function peek(stack){
    if(stack.top === null){
        return
    }
    return stack.top.data
}

function isEmpty(stack){
    if(stack.top === null){
        return 'empty'
    }
    return 'not empty'
}

function display(stack){
    if(stack.top === null){
        return
    }
    let curr = stack.top
    while(curr.next !== null){
        console.log(curr.data)
        curr = curr.next
    }
    return
}


function isPalindrome(s){
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let stack = new Stack()
    for(let i = 0; i < s.length; i++){
        stack.push(s[i])
    }
    console.log(stack.pop())
    console.log(stack.top.data)
   
    while(stack.top !== null){
        let pal = stack
        if(pal.top === null){
            return
        }
        if(pal.top.data !== pal.pop()){
            return false
        }
        pal.top = pal.top.next
    }
    return true
}

isPalindrome('daad')

// console.log(peek(starTrek))
// console.log(isEmpty(starTrek))
// console.log(isEmpty(empty))
// console.log(display(starTrek))














class _NodeQ {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value){
        const node = new _NodeQ(value)

        if(this.first === null){
            this.first = node
        }
        if(this.last){
            this.last.next = node
        }
        this.last = node
    }

    dequeue(){
        if(this.first === null){
            return
        }
        const node = this.first
        this.first = this.first.next
        if(node === this.last){
            this.last = null
        }
        return node.value
    }
}