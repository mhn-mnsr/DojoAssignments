class Call(object):
    def __init__(self, unique_id, name, phone_number, time_of_call, reason):
        self.unique_id = unique_id
        self.name = name
        self.phone_number = phone_number
        self.time_of_call = time_of_call
        self.reason = reason

    def display_all(self):
        print 'ID: ' + str(self.unique_id)
        print 'Name: ' + self.name
        print '#' + str(self.phone_number)
        print 'Time of call: ' + str(self.time_of_call) + ' PM'
        print 'Reason: ' + self.reason
    
call = Call(1234, 'J', 971625394, 12, 'sick')
call1 = Call(2, 'P', 7631287, 14, 'very sick')
call2 = Call(3, 'Q', 7631282, 15, 'very sickk')
call3 = Call(3, 'K', 7631282, 15, 'very sickk')
call_list = [call ,call1, call2, call3]
call_list[0].name

# call.display_all()

class CallCenter(object):
    def __init__(self, call_list, queue_size):
        self.call_list = call_list
        self.queue_size = queue_size

    def add(self, call):
        self.call_list.append(call)

    def remove(self):
        self.call_list.pop(0)

    def display_info(self):
        for call in self.call_list:
            print call.name
            print call.phone_number
        print len(call_list)
        
call_center1 = CallCenter(call_list, len(call_list))
new_call = Call(5, 'Jill', 98237, 16, 'vv sick')
call_center1.add(new_call)
call_center1.remove()
call_center1.display_info()
