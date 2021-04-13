from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import GroupsSerializer, HintsSerializer, HintSerializer
from .models import Groups, Hints, Hint

from django.http import JsonResponse
import json


class GroupsViewSet(viewsets.ModelViewSet):
    queryset = Groups.objects.all().order_by('id')
    serializer_class = GroupsSerializer

class HintsViewSet(viewsets.ModelViewSet):
    queryset = Hints.objects.all().order_by('id')
    serializer_class = HintsSerializer

class HintViewSet(viewsets.ModelViewSet):
    queryset = Hint.objects.all().order_by('id')
    serializer_class = HintSerializer

#def test_vue(request):
#    return render(request, 'backend/test.html')
