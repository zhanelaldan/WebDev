def round10(n):
  d = n % 10
  d1 = n // 10
  if d >= 5:
    d1 += 1
  
  return d1 * 10

def round_sum(a, b, c):
  a = round10(a)
  b = round10(b)
  c = round10(c)
  
  return a+b+c