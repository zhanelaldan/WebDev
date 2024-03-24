n = int (input ())
str = str(input())

str = str.split(" ")
check = False

for i in range(1, n - 1):
    if (int(str[i]) > 0 and int(str[i - 1]) > 0 ):
        check = True

    elif (int(str[i]) > 0 and int(str[i + 1]) > 0):
        check = True

    elif (int(str[i]) < 0 and int(str[i - 1]) < 0):
        check = True

    elif(int(str[i]) < 0 and int(str[i + 1]) < 0):
        check = True

if check:
    print("YES")
else:
    print("NO")