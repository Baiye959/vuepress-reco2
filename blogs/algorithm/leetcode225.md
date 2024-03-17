---
title: LeetCode-225-用队列实现栈 | 栈与队列2
date: 2024/03/16
categories:
 - 算法
---
## 225. 用队列实现栈
请你仅使用两个队列实现一个后入先出（LIFO）的栈，并支持普通栈的全部四种操作（`push`、`top`、`pop` 和 `empty`）。

实现 `MyStack` 类：

- `void push(int x)` 将元素 x 压入栈顶。
- `int pop()` 移除并返回栈顶元素。
- `int top()` 返回栈顶元素。
- `boolean empty()` 如果栈是空的，返回 `true` ；否则，返回 `false` 。
 

注意：

你只能使用队列的标准操作 —— 也就是 `push to back`、`peek/pop from front`、`size` 和 `is empty` 这些操作。
你所使用的语言也许不支持队列。 你可以使用 list （列表）或者 deque（双端队列）来模拟一个队列 , 只要是标准的队列操作即可。


示例：
```
输入：
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 2, 2, false]

解释：
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // 返回 2
myStack.pop(); // 返回 2
myStack.empty(); // 返回 False
```

提示：
```
1 <= x <= 9
最多调用100 次 push、pop、top 和 empty
每次调用 pop 和 top 都保证栈不为空
``` 

进阶：你能否仅用一个队列来实现栈。

## Java基础补充
```java
Queue<E> queue = new LinkedList();

// 在尾部添加
boolean add(E item);
boolean offer(E item);

// 删除并返回头部
E remove();
E poll();

// 获取头部但不删除
E element();
E peek();

// 获取队列中元素个数
int size();
```
- offer，add 区别：<br/>
    一些队列有大小限制，因此如果想在一个满的队列中加入一个新项，多出的项就会被拒绝。<br/>
    这时新的 offer 方法就可以起作用了。它不是对调用 add() 方法抛出一个 unchecked 异常，而只是得到由 offer() 返回的 false。
- poll，remove 区别：<br/>
    remove() 和 poll() 方法都是从队列中删除第一个元素。remove() 的行为与 Collection 接口的版本相似， 但是新的 poll() 方法在用空集合调用时不是抛出异常，只是返回 null。因此新的方法更适合容易出现异常条件的情况。
- peek，element区别：<br/>
    element() 和 peek() 用于在队列的头部查询元素。与 remove() 方法类似，在队列为空时， element() 抛出一个异常，而 peek() 返回 null。

|      |  抛出异常  | 返回特殊值 |
|:----:|:---------:|:----------:|
| 插入 | add(item) | offer(item) |
| 删除 | remove()  |    poll()   |
| 检查 | element() |    peek()   |

## 解题思路
用一个队列实现栈。<br/>
栈顶元素在队列尾部，那么栈的pop操作应该如下：
1. 将除了队列尾部元素的元素出队列、进队列
2. 将队列尾部元素出队列，返回它的值
![](/image/2024031703.png)
![](/image/2024031704.png)
![](/image/2024031705.png)

```java
class MyStack {
    Queue<Integer> queue;

    public MyStack() {
        queue = new LinkedList<>();
    }
    
    public void push(int x) {
        queue.add(x);
    }
    
    public int pop() {
        int size = queue.size();
        for (int i = 0; i < size - 1; i++) {
            queue.add(queue.remove());
        }
        return queue.remove();
    }
    
    public int top() {
        int size = queue.size();
        for (int i = 0; i < size - 1; i++) {
            queue.add(queue.remove());
        }
        int top = queue.peek();
        queue.add(queue.remove());
        return top;
    }
    
    public boolean empty() {
        return queue.size() == 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack obj = new MyStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * boolean param_4 = obj.empty();
 */
```