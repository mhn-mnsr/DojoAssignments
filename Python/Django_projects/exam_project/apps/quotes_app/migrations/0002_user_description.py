# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-10-23 23:41
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('quotes_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='description',
            field=models.TextField(default=datetime.datetime(2017, 10, 23, 23, 41, 26, 149584, tzinfo=utc), max_length=100),
            preserve_default=False,
        ),
    ]
