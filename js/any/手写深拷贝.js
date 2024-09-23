function deepClone(obj, hash=new WeakMap()) {
    if(obj === null) return obj
    if(typeof obj !== 'object') return obj

    if(hash.get(obj)) return hash.get(obj)
    const cloneObj = new obj.constructor()
    hash.set(obj, cloneObj)

    Reflect.ownKeys(obj).forEach(key => {
        cloneObj[key] = deepClone(obj[key], hash)
    })

    return cloneObj
}

const obj = {
    a: true,
    b: 100,
    c: 'str',
    d: undefined,
    e: null,
    f: Symbol('f'),
    g: {
      g1: {} // 深层对象
    },
    h: [], // 数组
    i: new Date(), // Date
    j: /abc/, // 正则
    k: function () {}, // 函数
}

obj.obj = obj // 循环引用

const newObj = deepClone(obj)

console.log(newObj)
