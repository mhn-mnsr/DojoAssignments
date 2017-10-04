class Product(object):
    def __init__(self, price, item_name, weight, brand):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = 'for sale'
        

    def sold(self):
        if self.status != 'for sale':
            self.status = 'sold'
            return self
    
    def add_tax(self):
        self.price += self.price * .12
        return self
    
    def return_argument(self, reason):
        if reason == 'defective':
            self.status = 'defective'
            self.price = 0
        elif reason == 'its new':
            self.status = 'for sale'
        elif reason == 'not feeling it':
            self.status = 'used'
            self.price -= (self.price)* .20
            return self
    
    def display_info(self):
        print 'Price:' + '$' + str(self.price)
        print 'Name:' + self.item_name
        print 'Weight:' + str(self.weight)
        print 'Brand:' + self.brand
        print 'Status:' + self.status

thing1 = Product(12, 'shirt', -1, 'UO')
# thing2 = Product(13, 'jeans', -1, )

thing1.add_tax()
thing1.return_argument('defective')
thing1.display_info()

            