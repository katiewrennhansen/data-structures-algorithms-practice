
class _Node {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}


class LinkedList {
    constructor(){
        this.head = null
    }

    insertFirst(item){
        this.head = new _Node(item, this.head)
    }

    insertLast(item){
        //check for size
        if(this.head === null){
            this.insertFirst(item)
        } 
        //traverse list
        let currNode = this.head
        while(currNode.next !== null){
            currNode = currNode.next
        }
        //insert node
        currNode.next = new _Node(item, null)
    }

    insertBefore(item, key){
        if(this.head === null){
            this.insertFirst(item)
        }
        let currNode = this.head
        let prevNode = this.head
        while(currNode.next !== null){
            if(currNode.value !== key){
                prevNode = currNode
                currNode = currNode.next
            }
            prevNode.next = new _Node(item, currNode)
            return
        }
    }

    insertAfter(item, key){
        if(this.head === null){
            this.insertFirst(item)
        }
        let currNode = this.head
        while(currNode.next !== null){
            if(currNode.value !== key){
                currNode = currNode.next
            }
            currNode.next = new _Node(item, currNode.next)
            return
        }
    }

    insertAt(item, position){
        if(this.head === null){
            this.insertFirst(item)
        }
        if(!position){
            return null
        }
        let currNode = this.head
        let prevNode = this.head
        for(let i = 0; i < position; i++){
            prevNode = currNode
            currNode = currNode.next
        }
        prevNode.next = new _Node(item, currNode)
        return
    }

    remove(item){
        //check for size
        if(!this.head){
            return null
        }
        //check if first
        if(this.head.value === item){
            this.head = this.head.next
            return
        }
        //check for item
        let currNode = this.head
        let prevNode = this.head
        while((currNode !== null) && (currNode.value !== item)){
            prevNode = currNode
            currNode = currNode.next 
        }
        if(currNode === null){
            return
        }
        //remove
        prevNode.next = currNode.next
    }

    find(item){
        let currNode = this.head
        //check for size
        if(!this.head){
            return null
        }
        while(currNode.value !== item){
            if(currNode.next === null){
                return null
            }
            currNode = currNode.next
        }
        //return
        return currNode
    }
}


function main(){
    const linkedList = new LinkedList()
    linkedList.insertFirst('Husker')
    linkedList.insertFirst('Starbuck')
    linkedList.insertFirst('Tauhida')
    linkedList.insertAt('Newname', 3)
    console.log(linkedList)
}




function display(list){
    let current = list.head
    while(current !== null){
        console.log(current.value)
        current = current.next
    }
}

function displayHead(value){
    let current = value
    while(current !== null){
        console.log(current.value)
        current = current.next
    }
}

function size(list){
    let current = list.head
    let count = 0
    while(current !== null){
        current = current.next
        count ++
    }
    console.log(count)
    return count
}


function isEmpty(list){
    if(list.head === null){
        console.log('list is empty')
        return
    }
    console.log('list is not empty')
}

function findPrevious(list, prevNode){
    let current = list.head
    while(current.next.value !== prevNode){
        current = current.next
    }
    console.log(current.value)
    return current.value
}


function findLast(list){
    let current = list.head
    while(current.next !== null){
        current = current.next
    }
    console.log(current)
    return current
}



function reverseList(list){
    let current = list.head
    let prev = null
    while(current !== null){
        let save = current.next
        current.next = prev
        prev = current
        current = save
    }
    console.log(prev)
    return prev
}


//3rd from end
//middle of a list
//cycle in a list
//sorting a list




const linkedList = new LinkedList()
const emptyList = new LinkedList()

linkedList.insertFirst('Last')
linkedList.insertFirst('Husker')
linkedList.insertFirst('Starbuck')
linkedList.insertFirst('Tauhida')
linkedList.insertFirst('Husker')

// display(linkedList)
// size(linkedList)
// isEmpty(emptyList)
// isEmpty(linkedList)
// findLast(linkedList)
// findPrevious(linkedList, 'Husker')

// const newLinkedList = reverseList(linkedList)
// displayHead(newLinkedList)




function deleteDuplicates(list){
    let count = {}
    let current = list.head
    let prev = list.head
    const newList = new LinkedList()
    
    while (current) {
        if(!count[current.value]){
            newList.insertLast(current.value)
            // console.log(current.value)
            count[current.value] = 1
            current = current.next
            prev = current
        }
        else {
            newList.remove(current.value)
            prev.next = current.next
            current = current.next
        } 
    }
    display(newList)
}

// deleteDuplicates(linkedList)





function compareLL(list1, list2){
    let curr1 = list1.head 
    let curr2 = list2.head
    let count1 = 0
    let count2 = 0
    while(curr1){
        count1++
        curr1 = curr1.next
    }
    while(curr2){
        count2++
        curr2 = curr2.next
    }

    if(count1 === count2){
        return 0
    } else if (count1 > count2){
        return 1
    } else {
        return -1
    }
}


const linkedList2 = new LinkedList()
linkedList2.insertFirst('Starbuck')
linkedList2.insertFirst('Tauhida')
linkedList2.insertFirst('Husker')

console.log(compareLL(linkedList, linkedList2))