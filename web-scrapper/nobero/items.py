# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class NoberoItem(scrapy.Item):
    # define the fields for your item here like:
    name = scrapy.Field()
    price = scrapy.Field()
    original_price = scrapy.Field()
    description = scrapy.Field()
    images = scrapy.Field()
    sizes = scrapy.Field()
    fit = scrapy.Field()
    fabric  = scrapy.Field()
    neck  = scrapy.Field()
    sleeve = scrapy.Field()
    pattern = scrapy.Field()
    length  = scrapy.Field()
    
