function flattenArray(arr){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flattenArray(arr[i]))
        } else {
            result.push(arr[i])
        }
        
    }

    return result
}

let nestedArray = [1, [2, [3, [4]], 5]];  
console.log(flattenArray(nestedArray));