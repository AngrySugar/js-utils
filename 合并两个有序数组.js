//方法1：

function marge(A,m,B,n) {
    if(!B.length || !n ) return

    for (let i = m; i < m+n; i++) {
        
        A[i] = B.shift() 
        
    }
    console.log(A);
    

    A.sort((a,b) => a-b)
}
let nums1 = [1,2,3,0,0,0],m = 3, nums2 = [2,5,6], n = 3
marge(nums1, m, nums2, n)