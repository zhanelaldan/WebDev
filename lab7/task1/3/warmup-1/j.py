def missing_char(str, n):
  str2 = ''
  for i in range(len(str)):
    if i == n:
      continue
    else:
      str2 += str[i]
      
  return str2