from django.db import models

# Create your models here.

class Product(models.Model):
    name =  models.CharField(max_length=200)
    price = models.CharField(max_length=10)
    original_price = models.CharField(max_length=10)
    description = models.TextField()
    image_urls = models.TextField()
    sizes = models.TextField()
    fit = models.CharField(max_length=200)
    fabric = models.CharField(max_length=200)
    neck = models.CharField(max_length=200)
    sleeve = models.CharField(max_length=200)
    pattern =  models.CharField(max_length=200)
    length =  models.CharField(max_length=200)

class Meta:
    db_table = 'Product'