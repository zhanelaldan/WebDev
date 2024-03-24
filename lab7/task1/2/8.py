if __name__ == '__main__':
    n = int(input())
    arr = list(input().split())
    
    max1 = -101
    for i in range(0, n):
        if int(arr[i]) > max1:
            max1 = int(arr[i])
            
    max2 = -101
    for i in range(0, n):
        if max1 > int(arr[i]) and max2 < int(arr[i]):
            max2 = int(arr[i])
    
    print(max2)