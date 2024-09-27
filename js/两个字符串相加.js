
const addString = (str1, str2) => {
    if (str1.length === 0) return str2
    if (str2.length === 0) return str1

    const res = []
    let plus = 0
    let i = str1.length - 1
    let j = str2.length - 1

    while ( i >= 0 || j >= 0 || plus != 0) {
        const sVal = (i >= 0 ? parseInt(str1[i]) : 0)
        const tVal = (j >= 0 ? parseInt(str2[j]) : 0)
        const sum = sVal + tVal + plus
        const cur = sum % 10
        res.unshift(cur + '')
        plus = (sum >= 10 ? 1 : 0)
        i--
        j--
    }

    return res.join('')
}

let str1 = '456', str2 = '123'
console.log(addString(str1, str2));

