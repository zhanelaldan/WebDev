import math

def cnt(x):
    c = 0
    for i in range(1, math.isqrt(x) + 1):
        if x % i == 0:
            c += 1

            if i != x // i:
                c += 1
                
    return c

x = int(input())
print(cnt(x))