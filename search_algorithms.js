class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }

    insert(key, value){
        if(!this.key){
            this.key = key
            this.value = value
        }
        else if (key < this.key){
            if(!this.left){
                this.left = new BinarySearchTree(key, value, this)
            }
            else {
                this.left.insert(key, value)
            }
        }
        else {
            if(!this.right){
                this.right = new BinarySearchTree(key, value, this)
            }
            else {
                this.right.insert(key, value)
            }
        }
    }

    find(key){
        if(this.key == key){
            return this.value
        }
        else if (key < this.key && this.left){
            return this.left.find(key)
        }
        else if (key > this.key && this.right){
            return this.right.find(key)
        }
        else {
            throw new Error ('key error')
        }
    }

    remove(key){
        if(this.key == key){
            if(this.left && this.right){
                const successor = this.right._findMin();
                this.key = this.successor.key
                this.value = this.successor.value
                successor.remove(successor.key)
            }
            else if(this.left){
                this._replaceWith(this.left)
            }
            else if(this.right){
                this._replaceWith(this.right)
            }
            else {
                this._replaceWith(null)
            }
        }
        else if (key < this.key && this.left){
            this.left.remove(key)
        }
        else if (key > this.key && this.right){
            this.right.remove(key)
        }
        else {
            throw new Error ('key error')
        }
    }

    _replaceWith(node){
        if (this.parent){
            if (this == this.parent.left){
                this.parent.left = node
            }
            else if (this == this.parent.right){
                this.parent.right = node
            }
            if (node){
                node.parent = this.parent
            }
        }
        else {
            if(node){
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            }
            else {
                this.key = null
                this.value = null
                this.left = null
                this.right = null
            }
        }
    }

    _findMin(){
        if(!this.left) {
            return this
        }
        return this.left._findMin()
    }


    inOrder(node){
        if(node) {
            this.inOrder(node.left)
            console.log(node.key)
            this.inOrder(node.right)

        }
    }

    preOrder(node){
        if(node){
            console.log(node.key)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    postOrder(node){
        if(node) {
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.key)
        }
    }

}





const bst = new BinarySearchTree()

bst.insert(25)
bst.insert(15)
bst.insert(50)
bst.insert(10)
bst.insert(24)
bst.insert(35)
bst.insert(70)
bst.insert(4)
bst.insert(12)
bst.insert(18)
bst.insert(31)
bst.insert(44)
bst.insert(66)
bst.insert(90)
bst.insert(22)

// console.log(bst)

// bst.inOrder(bst)

// bst.preOrder(bst)

// bst.postOrder(bst)


function simpleSearch(array, value){
    for(i = 0; i < array.length; i++){
        if (array[i] == value) {
            return array[i]
        }
    }
}


function binarySearch(array, value, start, end){
    var start = start === undefined ? 0 : start
    var end = end === undefined ? 0 : end

    if (start > end){
        return 'end'
    }

    const index = Math.floor((start + end) / 2)
    const item = array[index]

    if(item == value){
        return item
    }
    else if (item < value){
        return binarySearch(array, value, index + 1, end)
    }
    else if (item > value){
        return binarySearch(array, value, start, index - 1)
    }
}


const dd = [516.375, 546.890, 432.123, 567.891, 100.456, 34.876]

console.log(simpleSearch(dd, 546.890));

console.log(binarySearch(dd, 546.890));