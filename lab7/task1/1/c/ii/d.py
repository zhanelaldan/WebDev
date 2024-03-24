def f(n):
    if n == 1:
        print("YES")
        return
    while n != 1:
        if (n % 2 == 0):
            n = n // 2
        
        else:
            print("NO")
            return
        
        if n == 1:
            print("YES")
            return

n = int(input())
f(n)