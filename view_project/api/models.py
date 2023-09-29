from django.db import models

class DataRoom(models.Model):
    Project_Title = models.CharField(max_length=50)
    Project_Technologies = models.CharField(max_length=200)
    Technical_Skillset_Frontend = models.CharField(max_length=150,null=True)
    Technical_Skillset_Backend = models.CharField(max_length=150,null=True)
    Technical_Skillset_Databases = models.CharField(max_length=150,null=True)
    Technical_Skillset_Infrastructre = models.CharField(max_length=50, null=True)
    Other_Information_Availability = models.CharField(max_length=300,null=True)
