from django.db import models
from django.db.models import fields
from rest_framework import serializers
from core.models import proveedores

class ProveedorSerializer(serializers.ModelSerializer):
    class Meta:
        model = proveedores
        fields = ['proveedor','tipo' ]