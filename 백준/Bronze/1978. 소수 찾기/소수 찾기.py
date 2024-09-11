import math

c = int(input())
data = input().split()


def isPrime(x):
    if x == 1:
        return False

    for i in range(2, int(math.sqrt(x)) + 1):
        if x % i == 0:
            return False

    return True


result = 0

for i in data:

    if isPrime(int(i)) == True:
        result += 1

print(result)
