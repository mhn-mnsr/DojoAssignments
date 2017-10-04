class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.price = price
        if price > 10000:
            self.tax = .15
        else:
             self.tax = .12
        self.display_all()

    # def tax_payment(self):
    #     if self.price < 10000:
    #         self.tax += 0.15
    
    def display_all(self):
        print 'Price' + '$'+ str(self.price)
        print 'Speed' + str(self.speed) + 'mph'
        print 'Fuel' + self.fuel
        print 'Mileage' + str(self.mileage) + 'mpg'
        print 'Tax' + '$' + str(self.tax)

car1 = Car(2000, 35, 'Full', 15)
car2 = Car(2000, 4, 'Not Full', 105)
car3 = Car(2000000, 5, 'Full', 15)
