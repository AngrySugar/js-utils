const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    _state = 'pend ing'
    _value
    _handlers = []
    constructor(executor) {
        const resolve = (val) => {
          this._setState(FULFILLED, val)
        }
        const reject = (reason) => {
            this._setState(REJECTED, reason)
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            resolve(error)
        }

    }
    _setState(state, value) {
        if ( this._state !== PENDING ) return
        this._state = state
        this._value = value
        this._runTask()
    }
    _runTask() {
        if (this._state !== PENDING) {
            this._handlers.forEach(handler => handler())
            this._handlers = []
        }

    }
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject)=>{
          this._handlers.push(()=>{
              try {
                  const cb = this._state === FULFILLED ? onFulfilled : onRejected
                  const res = typeof cb === 'function' ? cb(this._value) : this._value
                  resolve(res)
              }catch(error) {
                  reject(error)
              }
          })
            this._runTask()
        })
    }
}

const p = new MyPromise((resolve, reject) => {
   setTimeout(()=>{
       resolve(1)
   }, 1000)
})
p.then(
    null,
    (err) => {
        console.log('err', err)
    }
).then((res) => {
    console.log('success2', res)
})

