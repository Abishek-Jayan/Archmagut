from django.db import models

# Create your models here.
class Note(models.Model):
    Title = models.CharField(max_length=200)
    Body = models.CharField(max_length=200)
    Colour = models.CharField(max_length=200)
    Position = models.IntegerField(default=0)
    DateCreated = models.DateTimeField('date created')
    DateLastUpdated = models.DateTimeField('date last updated')

    def __str__(self):
        return self.Title