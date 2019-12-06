
const Memory = require('./memory')

const memory = new Memory()

class Array {
    constructor(){
        this.length = 0;
        this._capacity = 0;
        this.ptr = memory.allocate(this.length)
    }

    push(value){
        if(this.length >= this._capacity){
            this._resize((this.length + 1) * Array.SIZE);
        }
        memory.set(this.ptr + this.length, value)
        this.length ++;
    }

    _resize(size){
        const oldPtr = this.ptr
        this.ptr = memory.allocate(size)
        if(this.ptr === null){
            throw new Error ('out of memory')
        }
        memory.copy(this.ptr, oldPtr, this.length)
        memory.free(oldPtr)
        this._capacity = size
    }

    get(index){
        if(index < 0 || index >= this.length){
            throw new Error ('index erorr')
        }
        return memory.get(this.ptr + index)
    }

    pop(){
        if(this.length === 0){
            throw new Error ('no items to remove')
        }
        const value = memory.get(this.ptr + this.length - 1)
        this.length--;
        return value;
    }

    insert(value, index){
        if(this.length >= this._capacity){
            this._resize((this.length + 1) * Array.SIZE);
        }
        if(index < 0 || index >= this.length){
            throw new Error ('index error')
        }
        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index)
        memory.set(this.ptr + index, value)
        this.length++;
    }

    remove(index){
        if(index < 0 || index >= this.length){
            throw new Error ('index error')
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1)
        this.length--;
    }
}

Array.SIZE = 3;


function main(){
    Array.SIZE = 3;
    let arr = new Array();

    arr.push(5);
    arr.push(15);
    arr.push(19);
    
    arr.pop()
    arr.pop()
    arr.pop()

    arr.push('tauhida')


    console.log(arr.get(0))
}

main()


























