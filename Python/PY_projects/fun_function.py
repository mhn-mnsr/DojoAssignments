
# def odd_even(range):
#     for i in range(1,2001):
#         if i % 2 == 0:
#             print str(i) + "This is even"
#         elif i%2 == 1:
#             print str(i) + "This is odd"

# odd_even(range)

# def multiply(arr,num):
#     for x in range(len(arr)):
#         arr[x] *= num
#     return arr
# a = [2,4,10,16]
# b = multiply(a,5)
# print b

arr = [2,4,10,16]
new_arr = []
for x in arr:
    val_arr = []
    for i in range(0,x):
        val_arr.append(1)
    new_arr.append(val_arr)
    print new_arr