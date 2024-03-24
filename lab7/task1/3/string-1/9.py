def combo_string(a, b):
  long = ''
  short = ''
  if len(a) >= len(b):
    long = a
    short = b
  else:
    long = b
    short = a
  return short + long + short