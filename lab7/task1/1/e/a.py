def min(v1, v2, v3, v4):
    if v1 <= v2 and v1 <= v3 and v1 <= v4:
        print(v1)

    elif v2 <= v1 and v2 <= v3 and v2 <= v4:
        print(v2)

    elif v3 <= v1 and v3 <= v2 and v3 <= v4:
        print(v3)

    elif v4 <= v1 and v4 <= v2 and v4 <= v3:
        print(v4)


str = str(input())
a = str.split(" ")

v1 = int(a[0])
v2 = int(a[1])
v3 = int(a[2])
v4 = int(a[3])

min(v1, v2, v3, v4)