def is_pangram(string):
    letters = list(map(chr,range(97,123)))
    matched_letters = [char for char in letters if char in string.lower()]
    return len(matched_letters) == 26
