def lone_sum(a, b, c):
  if a == b and b == c:
    return 0
  elif a == b and a != c:
    return c
  elif a == c and a != b:
    return b
  elif b == c and c != a:
    return a
  else:
    return a + b + c