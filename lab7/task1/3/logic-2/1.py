def make_bricks(small, big, goal):
    total_length = small + 5 * big

    if total_length < goal:
        return False

    if goal % 5 > small:
        return False

    return True