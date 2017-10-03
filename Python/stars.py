#stars for integers

# arr = [4, 6, 1, 3, 5, 7, 25]
# # new_str = ''
# for x in arr:
#     val_str=''
#     for i in range (0,x):
#         val_str += '*'
#     print val_str
#     new_str += val_str
# print val_str

#stars for ints and letters for str

arr = [4, "tom", 1, "bill", 5, 7, 25]
for x in arr:
    if (type(x)==int):
        val_int=''
        for i in range (0,x):
            val_int += '*'
        print val_int
    elif (type(x)==str):
        val_str= ''
        for i in range (0,len(x)):
            val_str += x[:1]
        print val_str
