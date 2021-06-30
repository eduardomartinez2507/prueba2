from pathlib import Path
from django.urls import path
from rest_proveedor.views import lista_proveedores, agregar_proveedores, detalle_proveedores


urlpatterns = [
    path('proveedores', lista_proveedores, name="proveedores"),
    path('proveedor', agregar_proveedores,name="agregar_proveedores"),
    path('proveedor/<id>', detalle_proveedores, name="detalle_proveedores")
]