class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health
    
    def walking_now(self):
        self.health = self.health - 1

    def running_now(self):
        self.health = self.health - 5

    def display_health(self):
        print 'Name' + self.name
        print 'Health' + str(self.health)
        
# animal1 = Animal('John', 20)
# animal1.running_now()
# animal1.display_health()
class Dragon(Animal):
    def set_health(self):
        self.health = 10

    def flying_drogo(self):
        self.health -= 10

drogo1 = Dragon('monsta', 150)
drogo1.flying_drogo()
drogo1.display_health()
print 'I am a dragon ' + drogo1.name + 'and my fly speed is' + str(drogo1.health)

    
