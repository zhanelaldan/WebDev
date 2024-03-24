import math

x = int(input())
i = 1
while i <= x:
    if (int(math.sqrt(i)) * int(math.sqrt(i)) == i):
        print (i)
    i += 1