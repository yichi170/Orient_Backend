from django.db import models

# Create your models here.

class Groups(models.Model):
    id = models.IntegerField(primary_key=True)
    score = models.IntegerField()
    name = models.CharField(max_length = 100)

    def __str__(self):
        return self.name

class Hint(models.Model):
    id = models.IntegerField(primary_key=True)
    hint_type = [(1, 'standard'), (2, 'interactive'), (3, 'photo'), (4, 'fuck')]
    hint_choices = models.CharField(choices=hint_type, max_length=40)
    difficulty = models.CharField(max_length = 100, default="null")
    name = models.CharField(max_length = 100)
    text = models.CharField(max_length = 100)
    answer = models.CharField(max_length = 100)
    basic_score = models.IntegerField()
    bonus_score = models.IntegerField()
    penalty = models.IntegerField()

class Hints(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length = 100)
    done = models.CharField(max_length = 10)




