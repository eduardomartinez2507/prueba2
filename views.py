from core.views import proveedores
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
from core.models import Proveedores
from .serializers import ProveedorSerializer
@csrf_exempt
@api_view(['GET'])
def lista_proveedores(request):
    
    proveedor = Proveedores.objects.all()
    serializer = ProveedorSerializer(proveedores, many=True)
    return Response(serializer.data)

@csrf_exempt
@api_view(['POST'])
def agregar_proveedores(request):

    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = ProveedorSerializer( data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
# Create your views here.

@api_view(['GET','PUT','DELETE'])
def detalle_proveedor(request,id):
    try:
        proveedor = Proveedores.objects.get(tipo=id)
    except Proveedores.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProveedorSerializer(proveedores)
        return Response(serializer.data)

    if request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = ProveedorSerializer(proveedores, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            
    elif request.method == 'DELETE':
        proveedores.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)