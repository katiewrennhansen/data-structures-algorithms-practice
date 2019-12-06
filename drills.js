

function URLify(input){
    // return input.split(' ').join('%20')

    let url = ''
    for(i = 0; i < input.length; i++){
        if(input[i] !== ' '){
            url = url + (input[i])
        }
        else {
            url = url + '%20'
        }
    }
    return url;
}

// console.log(URLify('tauhida parveen word .com %ta'));
//O(n) since you have to iterate through every item atleast once


function filterArray(array){
    for(i = 0; i < array.length; i){
        if(array[i] < 5){
            array.splice(i, 1)
            i = 0
        } else {
            i++;
        }
    }
    return array
}

// console.log(filterArray([1, 4, 10, 3, 36, 84, 12, 1]));
//O(n) since you have to iterate through every item atleast once


function maxSum(array){
    let max = array[0] + array[1]
    for(i = 0; i < array.length; i++){
        let checkSum = array[i] + array[i + 1]
        if(checkSum > max){
            max = checkSum
        }  
    }
    return max
}


// console.log(maxSum([1, -4, 16, -112, 41, 3]));
//O(n) since you have to iterate through every item atleast once



function mergeArrays(arr1, arr2){
    let merged = []
    for(i = 0; i < arr1.length; i++){
        let elem = arr1[i]
        for(j = 0; j < arr2.length; j++){
            if(elem > arr2[j]){
                merged.push(arr2[j])
                console.log(merged)
            }
        }
        merged.push(elem)
    }
    return merged
}

// console.log(mergeArrays([1, 4, 8], [3, 6, 9]))



function removeChars(string, chars){
    let noVowels = ''
    const toDelete = [...chars]

    for(i = 0; i < string.length; i++){
        let deleted = false
        for (j = 0; j < toDelete.length; j++){
            if(string[i] === toDelete[j]){
                deleted = true
                noVowels = noVowels + '' ;
            } 
        } 
        if(deleted === false){
            noVowels = noVowels + string[i]
        }
    }
    return noVowels;
}

// console.log(removeChars('hello to the worldaa', 'aegos'))