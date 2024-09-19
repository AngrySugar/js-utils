class myPromise {
    #result = undefined
    #state = 'pending'
    #handlers = []

    constructor(executor){
        executor(this.#resolve.bind(this), this.#reject.bind(this))
    }

    #reject(value){
        this.#changeState('rejected', value)
    }
    #resolve(value){
        this.#changeState('fulfilled', value)
    }
    
    #changeState(state, result){
       
        if(this.#state !== 'pending') return
        this.#state = state
        this.#result = result
        this.#runHandler()
    }

    then(onFulfilled, onRejected){
        return new myPromise((resolve, reject)=>{
            this.#handlers.push({
                onFulfilled,
                onRejected,
                resolve,
                reject
            })
            
            this.#runHandler()
        })
    }
    #runHandler() {
        if(this.#state === 'pending') return

        while(this.#handlers.length > 0) {
            const {onFulfilled, onRejected, resolve, reject} = this.#handlers.shift()
          
            try {
                if(this.#state === 'fulfilled') {
                   
                    
                    const data = onFulfilled(this.#result)
                    resolve(data)
                } else if(this.#state === 'rejected') {
                    const data = onRejected(this.#result)
                    resolve(data)
                }
            } catch (error) {
                reject(error)
            }
        }
    }
}

let p = new myPromise((resolve, reject)=>{
    reject(1)
})
p.then((res)=>{
    console.log('成功1');
    
},(err)=>{
    console.log('失败1')
}).then((res)=>{
    console.log('成功2');
    
},(err)=>{
    console.log('失败2')
})