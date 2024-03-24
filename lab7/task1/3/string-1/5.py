def extra_end(str):
  if len(str) <= 2:
    return str*3
    
  return str[len(str)-2:]*3