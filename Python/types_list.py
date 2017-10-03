
count_int = 0
count_str = 0
make_string = "String:"
sum = 0

l = ['magical unicorns',19,'hello',98,'world']

for x in l:
    if(type(x)==int):
        count_int += 1
        sum += x
    if(type(x)==str):
        count_str += 1
        make_string = "made string:", l[x], ''

if(count_int == 0):
    print "the list entered is string"

elif(count_str == 0):
    print "the list entered contains only integers"
else: print "that was a mixed list"

if (count_str!= 0):
    print make_string
if (count_int!= 0):
    print "Sum:", sum