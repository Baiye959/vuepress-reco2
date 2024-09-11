---
title: LeetCode-232-用栈实现队列 | 栈与队列1
date: 2024/03/17
categories:
 - 算法
---
## 232. 用栈实现队列
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（`push`、`pop`、`peek`、`empty`）：

实现 `MyQueue` 类：
- `void push(int x)` 将元素 x 推到队列的末尾
- `int pop()` 从队列的开头移除并返回元素
- `int peek()` 返回队列开头的元素
- `boolean empty()` 如果队列为空，返回 true ；否则，返回 false

**说明：**<br/>
你 **只能** 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。<br/>
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。


示例 1：
```
输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
```

提示：
```
1 <= x <= 9
最多调用 100 次 push、pop、peek 和 empty
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）
```

进阶：你能否实现每个操作均摊时间复杂度为 `O(1)` 的队列？换句话说，执行 `n` 个操作的总时间复杂度为 `O(n)` ，即使其中一个操作可能花费较长时间。

## java基础补充
```java
Stack<E> stack = new Stack<E>();

E push(E item) 
        // 把项压入堆栈顶部。 
E pop() 
        // 移除堆栈顶部的对象，并作为此函数的值返回该对象。 
E peek() 
        // 查看堆栈顶部的对象，但不从堆栈中移除它。 
boolean empty() 
        // 测试堆栈是否为空。  
int search(Object o) 
        // 返回对象在堆栈中的位置，以 1 为基数。
```


## 解题思路
用两个栈模拟队列，其中一个栈in负责push、一个栈out负责pop，如下图所示
![](/image/2024031701.png)
![](/image/2024031702.png)

```java
class MyQueue {
    Stack<Integer> stackin;
    Stack<Integer> stackout;

    public MyQueue() {
        stackin = new Stack<>();
        stackout  = new Stack<>();
    }
    
    public void push(int x) {
        stackin.push(x);
    }
    
    public int pop() {
        if (stackout.empty() == true) {
            while (stackin.empty() == false) {
                stackout.push(stackin.pop());
            }
        }
        return stackout.pop();
    }
    
    public int peek() {
        if (stackout.empty() == true) {
            while (stackin.empty() == false) {
                stackout.push(stackin.pop());
            }
        }
        return stackout.peek();
    }
    
    public boolean empty() {
        return stackout.empty() && stackin.empty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```
