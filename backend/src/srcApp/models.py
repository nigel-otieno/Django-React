from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20, default="")
    email = models.CharField(max_length=20, default="")
    password = models.CharField(max_length=20, default="")
    def __str__(self):
        return self.username

class Post(models.Model):
    title = models.CharField(max_length=20, default="")
    description = models.CharField(max_length=20, default="")
    def __str__(self):
        return self.title
