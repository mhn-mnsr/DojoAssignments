from __future__ import unicode_literals

import bcrypt
from django.db import models
import re
from django.contrib import messages

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
hash1 = bcrypt.hashpw('test'.encode(), bcrypt.gensalt())

# Create your models here.
class UserManager(models.Manager):
    def valid_registration(self, userInfo):
        print "Im in models creating users!"
        error = []
        passFlag = True
        if not userInfo['first_name'].isalpha():
            error.append('First name contains non-alpha character(s)')
            passFlag = False
        if len(userInfo['first_name']) < 2:
            error.append( 'First name is not long enough.')
            passFlag = False
        if not userInfo['last_name'].isalpha():
            error.append('Last name contains non-alpha character(s)')
            passFlag = False
        if len(userInfo['last_name']) < 2:
            error.append('Last name is not long enough.')
            passFlag = False
        if not EMAIL_REGEX.match(userInfo['email']):
            error.append('Email is not a valid email!')
            passFlag = False
        if len(userInfo['password']) < 7:
            error.append('Password is not long enough.')
            passFlag = False
        if userInfo['password'] != userInfo['confirm_password']:
            error.append('Password match not confirmed.')
            passFlag = False
        if User.objects.filter(email = userInfo['email']):
			error.append("This email already exists in our database.")
			passFlag = False
        if passFlag == True:
 
            hashed = bcrypt.hashpw(userInfo['password'].encode(), bcrypt.gensalt())
            User.objects.create(first_name = userInfo['first_name'], last_name = userInfo['last_name'], email = userInfo['email'], password = hashed)

        return error
    
    def user_exists(self, userInfo):
        print "Im in models UserExistsLogin"
        error = []
        if User.objects.filter(email = userInfo['email']):
            print "Found the right user"
            hashed = User.objects.get(email = userInfo['email']).password
            hashed = hashed.encode('utf-8')
            password = userInfo['password']
            password = password.encode('utf-8')
            if bcrypt.hashpw(password, hashed) == hashed:
                passFlag = True
            else:
                error.append("Unsuccessful login. Incorrect password")
                passFlag = False
        else:
            error.append("Unsuccessful login. Your email is incorrect.")
            passFlag = False
        return error

class User(models.Model):
    first_name = models.CharField(max_length = 255)
    last_name = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    created_at = models.DateTimeField(auto_now_add = True)
    is_admin = models.BooleanField(default=False)
    objects = UserManager()
    # may need to look into top line
    