def fibonacci(number):
    if number == 0 :
        number = 0
    elif number == 1:
        number = 1
    else:
        number = fibonacci(number-2) + fibonacci(number-1)
    return number

print fibonacci(10)