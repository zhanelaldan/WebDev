n = int(input())
str = str(input())

str = str.split(" ")

for i in range(len(str)):
    if int(str[i]) % 2 == 0:
        print(str[i], end=" ")