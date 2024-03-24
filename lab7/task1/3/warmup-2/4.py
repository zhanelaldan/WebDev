def string_splosion(str):
  str2 =''
  for i in range(len(str)+1):
    str2 += str[:i]
    
  return str2