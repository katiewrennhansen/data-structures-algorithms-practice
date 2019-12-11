//remove duplicate word occurances
function occurances(string){
    let count = {}
    const stringArray = string.split(' ')
    stringArray.map(word => {
        if(!count[word]){
            count[word] = 1
        }
        else {
            count[word]++
        }
    })
    return count
}


// console.log(occurances('Hello there how are you today how'))
// console.log(occurances('la la la lal fal la ala la la'))



//Delete duplicate in a linked list
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


//palandromes
function palamdrome(string){
    let count = 0
    let palandromes = []
    const stringArray = string.split(' ')
    stringArray.map(word => {
        const s = word.toLowerCase()
        for(i = 0; i < s.length; i++){
            if(s.length <= 1){
                return false
            } else if(s[i] !== s[s.length - 1 - i]){
                return false
            }
        }
        count++
        palandromes.push(s)
    })
    console.log(palandromes.join(', '), count)
    return palandromes.join(', ')
}

// palamdrome('Dad gave mom a Tesla as a racecar')





//compare linked lists
function compareLL(list1, list2){
    for 
}






//find integer mode and frequency
function modeFreq(arr){
    let count = {}
    arr.map(word => {
        if(!count[word]){
            count[word] = 1
        }
        else {
            count[word]++
        }
    })
    const mode = Object.keys(count).reduce((a, b) => count[a] > count[b] ? a : b)
    const frequency = count[mode]

    console.log(`Mode = ${mode}, Frequency = ${frequency}`)
}

// modeFreq([1, 3, 5, 5 ,8, 3, 2, 5, 35, 15])
// modeFreq([1, 3, 5, 5 ,8, 3, 2, 5, 35, 15, 55, 3, 3, 7, 6, 2, 2, 2, 2, 2, 2, 2])