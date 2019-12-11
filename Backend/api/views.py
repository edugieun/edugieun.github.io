from django.shortcuts import render, get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Algorithm
from .serializers import AlgorithmSerializer

import ast
# Create your views here.

@api_view(['GET'])
def problem_list(request):
    problems = Algorithm.objects.all()
    serializer = AlgorithmSerializer(problems, many=True)
    return Response(serializer.data)