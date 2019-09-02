"""
用单向链表实现栈
"""


class LinkedStack:

    class _Node:

        def __init__(self, element, next):
            self._element = element
            self._next = next

    def __init__(self):
        """ 创建空栈 """
        self.head = None
        self.size = 0

    def __len__(self):
        pass

    def is_empty(self):
        pass

    def push(self, e):
        """ 栈顶入栈 """
        pass

    def pop(self):
        """ 栈顶出栈 """
        pass

    def top(self):
        """ 返回栈顶元素 """
        pass
