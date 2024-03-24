if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    
    arr = []
    arr1 = []
    for i in range(0, x + 1):
        for j in range(0, y + 1):
            for k in range(0, z + 1):
                arr1.append(i)
                arr1.append(j)
                arr1.append(k)
                arr.append(arr1)
                arr1 = []
    arr2 = arr.copy()
    sum = 0         
    for i in range(0, len(arr)):
        sum = arr[i][0] + arr[i][1] + arr[i][2]
        if sum == n:
            arr2.remove(arr[i])
        sum = 0

    print(arr2)