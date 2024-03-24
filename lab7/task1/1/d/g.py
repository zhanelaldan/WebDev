n = int(input())
str = str(input())

a = str.split(" ")

while n != 0:
    print(a[n - 1], end=" ")
    n -= 1