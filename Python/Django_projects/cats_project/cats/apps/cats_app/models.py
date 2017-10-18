# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Human(models.Model):
    name = models.CharField(max_length = 255)
    age = models.IntegerField()

class Cat(models.Model):
    name = models.CharField(max_length = 255)
    age = models.IntegerField()
    owner = models.ForeignKey(Human, related_name="owned_cats")
    adoring_fans = models.ManyToManyField(Human, related_name="idolized_cats")
