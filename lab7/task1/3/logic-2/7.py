def make_chocolate(small, big, goal):
    max_big_bars = goal // 5

    if big > max_big_bars:
        big = max_big_bars

    remaining_weight = goal - 5 * big

    if remaining_weight <= small:
        return remaining_weight
    
    return -1