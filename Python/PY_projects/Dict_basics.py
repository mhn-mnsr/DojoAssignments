My_dictionary = {'Name':'Maheen', 'Age': 21, 'Country_of_birth':'Pakistan', 'Favorite_language':'Python'}
# for x in My_dictionary:
#     val = My_dictionary[x]

#     print val
#     print x
def about_me(data):
    for key in data:
        print data[key],"is", "the", key
about_me(My_dictionary)