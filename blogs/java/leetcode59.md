---
title: LeetCode-59-螺旋矩阵II | 数组5
date: 2024/02/27
categories:
 - 算法
---
## 59. 螺旋矩阵II

给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。

 

示例 1：
![](/image/2024-02-27-152618.png)
```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```
示例 2：
```
输入：n = 1
输出：[[1]]
```

提示：
```
1 <= n <= 20
```

## 解题思路

本题的关键词是模拟和循环不变量。<br/>
为了在处理过程中头尾相接更方便，逐层处理、每条边都左闭右开，这样一共处理n/2层，n为奇数时补上最中间那个元素，如下图。
![](/image/2024022702.png)
![](/image/2024022703.png)

定义每层左上角坐标为`(startx, starty)`，为方便计算结束位置再设偏移量`offset`初始值为1、每深一层加2，填入值即为处理过的元素个数cnt。

```java
class Solution {
    public int[][] generateMatrix(int n) {
        int[][] ret = new int[n][n];
        int startx = 0, starty = 0, cnt = 1;
        for ( int offset=1; offset <= n; offset += 2, startx++, starty++){
            int i, j;
            for ( i=startx, j=starty; j < startx+n-offset; j++)
                ret[i][j] = cnt++;
            for ( ; i < startx+n-offset; i++)
                ret[i][j] = cnt++;
            for ( ; j > starty; j--)
                ret[i][j] = cnt++;
            for ( ;i > startx; i--)
                ret[i][j] = cnt++;
        }
        if (n%2 == 1) ret[n/2][n/2] = cnt; 
        return ret;
    }
}
```