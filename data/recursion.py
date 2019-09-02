def revert(S, start, stop):
  if (start < stop - 1):
    S[start], S[stop - 1] = S[stop - 1], S[start]
    revert(S, start + 1, stop - 1)


def revert_iterative(S):
  start = 0
  stop = len(S)
  while start < stop - 1:
    S[start], S[stop - 1] = S[stop - 1], S[start]
    start, stop = start + 1, stop - 1


def binary_search(arr, target, low, height):
  """ 二分查找递归版 """
  pass


def binary_search_iterative(arr, target):
  """ 二分查找非递归版 """
  pass


def linear_sum(S, start, stop):
  """ 计算一个序列元素之和 """
  pass


def binary_sum(S, start, stop):
  """ 用二路递归计算一个序列元素之和 """
  pass


def power(x, n):
  pass


def power_optimize(x, n):
  pass


def bad_fibonacci(n):
  pass


def good_fibonacci(n):
  pass

def factorial(n):
  """ 阶乘函数递归实现 """
  pass



if __name__ == "__main__":
  
  name = list('zhangsan')

  revert_iterative(name)

  print(''.join(name))
