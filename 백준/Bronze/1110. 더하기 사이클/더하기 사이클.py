input_num = int(input())


num = input_num
sum = 0
count = 0

while True:
    sum = (num // 10) + (num % 10)
    num = int(str(num % 10) + str(sum % 10))
    count += 1

    if num == input_num:
        break

print(count)
