def max_end3(nums):
  a = []
  if nums[0] >= nums[2]:
    a.append(nums[0])
    a.append(nums[0])
    a.append(nums[0])
  else:
    a.append(nums[2])
    a.append(nums[2])
    a.append(nums[2])
  return a