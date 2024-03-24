def front_times(str, n):
  if len(str) <= 3:
    return str*n
  
  str2 = str[:3]
  return str2 * n