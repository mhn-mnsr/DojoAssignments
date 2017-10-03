# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
# def players(data):
#     for names in students:
#         # val = students[x]
#         print names['first_name'], names['last_name']
        
# players(students)

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }
def players(data):
    for key, data in users.iteritems():
        # print key
        # print data
        count = 0
        print key
        for names in data:
            fergie = names['first_name']+(" ")+names['last_name']
            count += 1
            print str(count)+(' ')+fergie +(' ')+str(len(fergie))
    # print key
            # for i,n in names.iteritems():
            #     print i
            # count += 1
            
            # print str(count)+(' ')+fergie
            # print fergie

players(users)