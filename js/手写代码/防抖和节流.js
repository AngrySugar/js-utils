//防抖-任务频繁触发，任务触发的间隔超过指定的时间间隔才会执行，没有超过指定的时间间隔触发要重新计时
function debounce (fn, delay = 1000) {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, delay);
    }
}


//节流-在指定时间内任务多次触发，任务只执行一次
let timer = null
function throttle (fn, delay = 1000) {
    if (timer === null) {
        timer = setTimeout(() => {
            fn()
            clearTimeout(timer)
            timer = null
        }, delay);
    }
}