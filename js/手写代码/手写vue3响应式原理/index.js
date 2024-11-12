let activeEffect = null
export function effect(fn) {
    activeEffect = fn
    fn()
    activeEffect = null
}


export function reactive(obj) {
    const effectMap = {}
    return new Proxy(obj, {
        get (target, key) {

            // if ( typeof target[key] === 'object') {
            //     target[key] =  reactive(target[key])
            //     return target[key]
            // }
            // console.log(target[key])
            if (activeEffect) {
                if (!effectMap[key]) {
                    effectMap[key] = []
                }

                effectMap[key].push(activeEffect)

            }
            console.log('收集依赖', key, activeEffect)
            return target[key]
        },
        set (target, key, value) {
            target[key] = value
            console.log('派发更新', key, value)
            effectMap[key]?.forEach(fn => fn())
            return true
        }
    })
}

export function ref(val) {
    return reactive({value: val})
}

