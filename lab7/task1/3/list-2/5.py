def sum67(nums):
    total = 0
    ignore_section = False

    for num in nums:
        if num == 6:
            ignore_section = True
            continue
        if ignore_section and num == 7:
            ignore_section = False
            continue
        if not ignore_section:
            total += num
    
    return total