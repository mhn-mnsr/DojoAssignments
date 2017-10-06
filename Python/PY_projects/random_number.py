
# def my_random_number(x):
import random
for x in range(10):
    random_num = random.randint(70,100)
    # print random_num
    if(60 < random_num < 70):
        message = "Grade D"
    if(71 < random_num < 80):
        message = "Grade C"
    if(81 < random_num < 90):
        message = "Grade B"
    if(91 < random_num < 101):
        message = "Grade A"
    print message

