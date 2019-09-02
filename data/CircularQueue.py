"""
用循环链表存储实现循环队列类
"""


class CircularQueue:

    class Node:
        def __init__(self, val):
            self._element = val
            self._next = None

    def __init__(self):
        self._tail = None
        self._size = 0

    def __len__(self):
        return self._size

    def is_empty(self):
        return self._size == 0

    def first(self):
        pass

    def dequeue(self):
        """ 出队并返回队头 """

    def enqueue(self):
        """ 在队尾入队 """

    def rotate(self):
        """ 实现队列循环遍历 """
        if not self.is_empty():
            self._tail = self._tail._next
