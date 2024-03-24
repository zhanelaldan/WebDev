def fix_teen(n):
    if (n >= 13 and n <= 14) or (n >= 17 and n<=19):
      n = 0
    return n

def no_teen_sum(a, b, c):
  a = fix_teen(a)
  b = fix_teen(b)
  c = fix_teen(c)
  return a + b + c