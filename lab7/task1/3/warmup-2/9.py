def string_match(a, b):
  shorter = min(len(a), len(b))
  check = True
  cnt = 0
  for i in range(shorter - 1):
    if a[i] == b[i] and a[i+1] == b[i+1]:
      cnt += 1
      
  return cnt