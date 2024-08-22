from rest_framework.views import APIView
from django.http import JsonResponse
import json
# from rest_framework import status 

from .models import Product
from .serializer import ProductSerializer, ProductListSerializer

class ProductListView(
  APIView, # Basic View class provided by the Django Rest Framework
):

    def get(self, request, id=None):
        if id:
            try:
                queryset = Product.objects.get(id=id)
                serializer = ProductSerializer(queryset)

                response = {}
                for key in serializer.data:
                    if(key in ['image_urls', 'description', 'sizes']):
                        response[key] =  json.loads(serializer.data[key])
                    else: 
                        response[key] = serializer.data[key]

                return JsonResponse(response, status=200)
            
            except Product.DoesNotExist:
                return JsonResponse({'errors': 'This product item does not exist.'}, status=400)
            
        else:
            queryset = Product.objects.all()
            serializer = ProductListSerializer(queryset, many=True)
            return JsonResponse(serializer.data, safe=False)
