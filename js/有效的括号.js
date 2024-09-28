function isMatch(left, right) {
    if ((left === '(' && right === ')') 
    || (left === '{' && right === '}')
    || (left === '[' && right === ']')) {
        return true
    } 
    return false
}

function isValid(s) {
    const len = s.length
    if (len === 0) return true

    const stack = []
    const leftSymbols = '{[('
    const rightSymbols = ')]}'

    for (let i = 0; i < len; i++) {
        const char = s[i]
        if (leftSymbols.includes(char)) {
            stack.push(char)
        } else if (rightSymbols.includes(char)) {
            const top = stack[stack.length -1]
            if (isMatch(top, char)) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return stack.length === 0
}

let s ="()"
console.log(isValid(s));
