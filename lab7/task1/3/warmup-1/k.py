def front_back(str):
  if len(str)<=1:
    return str
  
  new_str = ""
  new_str += str[len(str) - 1]
  new_str += str[1:len(str) - 1]
  new_str += str[0]
  return new_str