from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import DataRoom
from .serializers import DataSerializer
# Create your views here.


class DataView(generics.ListAPIView):
    queryset = DataRoom.objects.all()
    serializer_class = DataSerializer


class DataCreateView(generics.CreateAPIView):
    queryset = DataRoom.objects.all()
    serializer_class = DataSerializer


@api_view(['GET'])
def showSingleProject(request, pk):
    project = DataRoom.objects.get(id=pk)
    serializer = DataSerializer(project, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def addProject(request):
    serializer = DataSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
