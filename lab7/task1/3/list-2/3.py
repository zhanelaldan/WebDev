def centered_average(nums):
    nums.remove(min(nums))
    nums.remove(max(nums))
    
    total = sum(nums)
    
    count = len(nums)
    
    return total // count