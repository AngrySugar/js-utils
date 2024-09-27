//方法1：

function marge(A,m,B,n) {
    if(!B.length || !n ) return
    for (let i = m; i < m+n; i++) {
        A[i] = B.shift() 
    }

    A.sort((a,b) => a-b)

    return A
}
// let nums1 = [1,2,3,0,0,0],m = 3, nums2 = [2,5,6], n = 3
// console.log(marge(nums1, m, nums2, n));


// 方法2:双指针法
function marge2(A,m,B,n) {
    if (!B.length || !n ) return
    if (!A.length || !m) {
        for (let i = m; i < m+n; i++) {
            A[i] = B.shift() 
            
        }
    }
    
    let aIndex = m - 1
    let bIndex = n - 1
    let mIndex = m + n - 1
    while (aIndex >= 0 && bIndex >= 0) {
        if (A[aIndex] >= B[bIndex]) {
            
            A[mIndex--] = A[aIndex--]
        } else {
            A[mIndex--] = B[bIndex--]
        }
        
        //数组A遍历完，B还有
        if (aIndex < 0) {
            while (bIndex >= 0) {
                A[mIndex--] = B[bIndex--]
            }
        }
    }
    return A
}
let nums4 = [1,2,3,0,0,0],m1 = 3, nums3 = [2,5,6], n1 = 3
console.log(marge2(nums3, m1, nums4, n1));

