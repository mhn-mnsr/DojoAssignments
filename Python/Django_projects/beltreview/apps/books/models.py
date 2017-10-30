from __future__ import unicode_literals

from django.db import models
from ..log_reg.models import User

# Create your models here.

class BookManager(models.Manager):
    def validate_review(self, postData):
        passFlag = True
        error = []
        if len(postData['review']) < 2:
            error.append('Review must be longer than 150 characters')
            passFlag = False
        return error

class Book(models.Model):
    title = models.CharField(max_length = 2)
    author = models.CharField(max_length = 255)
    review = models.ForeignKey(User, related_name = "reviewed_book")
    rating = models.IntegerField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    liked_by = models.ManyToManyField(User, related_name= "liked_books")
    objects = BookManager()


