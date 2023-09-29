from rest_framework import serializers
from .models import DataRoom


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataRoom
        fields = ('id','Project_Title', 'Project_Technologies', 'Technical_Skillset_Frontend', 'Technical_Skillset_Backend',
                  'Technical_Skillset_Databases', 'Technical_Skillset_Infrastructre', 'Other_Information_Availability')
