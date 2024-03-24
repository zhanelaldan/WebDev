n = int (input ())
str = str(input())

str = str.split(" ")
cnt = 0

for i in range(1, n):
    if (int(str[i - 1]) < int(str[i])):
        cnt += 1

print(cnt)