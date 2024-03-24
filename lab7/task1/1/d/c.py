n = int (input ()) 
str = str(input())

str = str.split(" ")
cnt = 0

for i in range(len(str)):
    if int(str[i]) > 0:
        cnt += 1

print(cnt)