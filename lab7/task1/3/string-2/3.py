def cat_dog(str):
  cnt1 = 0
  cnt2 = 0
  for i in range(len(str) - 2):
    if str[i] == 'c' and str[i + 1] == 'a' and str[i + 2] == 't':
      cnt1 += 1
    elif str[i] == 'd' and str[i + 1] == 'o' and str[i + 2] == 'g':
      cnt2 += 1
  return cnt1 == cnt2
    