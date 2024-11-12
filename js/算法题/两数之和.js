// 方法1
function twoSum(nums, target) {
    if (nums.length === 0) return 
    
    for (let i = 0; i < nums.length; i++) {
        const y = nums.findIndex((val) => (target - nums[i]) === val)
            if (y !== -1 && y !== i) {
                return [i, y]
            }
    }
    return []
}

let nums = [-2,-7,-11,-15], target = -9
console.log(twoSum(nums, target));

// 方法2
function twoSum2(nums, target) {
    
    for (let i = 0; i < nums.length; i++) {
        
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            } 
        }
    }
    return
}

// 方法3:
function twoSum2(nums, target) {
    if ( nums.length === 0) return

    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const temp = target - nums[i]

        if (!map.has(temp)) {
            map.set(nums[i], i)
        } else {
            return [map.get(temp), i]
        }
    }

    return
}
