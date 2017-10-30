from __future__ import unicode_literals

from django.db import models
import re
from ..log_reg.models import User
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Create your models here.

class UserManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['firstname']) < 3:
            errors["firstname"] = "First name should be more than 3 characters"
        if len(postData['lastname']) < 3:
            errors["firstname"] = "Last name should be more than 3 characters"
        if not "email" in errors and not re.match(EMAIL_REGEX, postData['email']):
            errors['email'] = "invalid email"
        
        # if email is valid check db for existing email
        else:
            if len(self.filter(email=postData['email'])) > 1:
                errors['email'] = "email already in use"
        return errors


class User(models.Model):
    firstname = models.CharField(max_length = 255)
    lastname = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255)
    objects = UserManager()