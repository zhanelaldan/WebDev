def sum13(nums):
    skip_next = False
    total = 0
    for num in nums:
        if skip_next:
            skip_next = False
            continue
        if num == 13:
            skip_next = True
            continue
        total += num
    return total