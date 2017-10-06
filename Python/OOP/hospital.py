class Patient(object):
    count = 0
    counter = 0
    def __init__(self, id_num, name, allergies, bed_num= None):
        self.id_num = Patient.count
        Patient.count += 1
        self.name = name
        self.allergies = allergies
        self.bed_num = Patient.counter
        Patient.counter += 1

    def display_all(self):
        print self.id_num, self.name, self.allergies, self.bed_num
        
# patient= Patient(1, 'J', 'flu', 1)
# patients.display_all()

class Hospital(object):
    def __init__(self, patient_list, hosp_name, capacity):
        self.patient_list = []
        self.hosp_name = hosp_name
        self.capacity = capacity

    def add(self, patient):
        for patient in self.patient_list:
            if len(self.patient_list) >= str(self.capacity):
                print 'Hospital is full'
            else: 
                self.patient_list.append(Patient)
                print 'We have a bed prepared',  self.patient_list

    def remove(self):
        for i in self.patient_list:
            if i.id == Patient.id_num:
                self.patient_list.pop[i.id]
                self.bed_num = None

    def display_hosp(self):
        print self.patient_list, self.hosp_name, self.capacity

Patient1 = Patient(id, 'david', 'kiwi')
Patient2 = Patient(id, 'maheen', 'tea')
Hospital1 = Hospital(50,"Northwestern", 50)
Hospital1.add(Patient1)
Hospital1.display_hosp()
    