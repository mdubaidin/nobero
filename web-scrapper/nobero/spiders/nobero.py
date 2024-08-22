import scrapy
from ..items import NoberoItem
import re

def parse_str(str): 
    return re.sub('[^A-Za-z0-9]+', '', str)

class NoberoSpider(scrapy.Spider):
    name = "nobero"
    allowed_domains = ["nobero.com"]
    start_urls = ['https://nobero.com/collections/men-oversized-t-shirts']

    def parse(self, response):
        # Targeting the Products container
        container = response.css('article#product-grid.product-on-page')
        productCards = container.css('section.product-card-container.h-full')

        for card in productCards: 
            url = card.css('a.product_link').attrib['href']
            yield response.follow(url, self.parse_product_details)

    def parse_product_details(self, response): 

        items =  NoberoItem()

        main = response.css('main.md\:px-40')
        description = main.css('div#description_content')
        sizes = main.css('div.flex.overflow-x-scroll.hide-scrollbar fieldset.product-form-input')
        hightlight_container = main.css('div#product-metafields-container')

        keys = hightlight_container.css('h4.pb-\[4px\]::text').getall()
        values = hightlight_container.css('p.font-normal::text').getall()

        highlights = {}
        for key, value in zip(keys, values):
            highlights[key] = value
            
        print(main.css('h1.leading-none::text').get())
        items['name'] = main.css('h1.leading-none::text').get(),
        items['price'] = parse_str(main.css('h2#variant-price *::text').get()),
        items['original_price'] = parse_str(main.css('span#variant-compare-at-price *::text').get()),
        items['description'] = description.getall(),
        items['images'] =  main.css('figure#image-container img::attr(srcset)').getall(),
        items['sizes'] = sizes.css('label.size-select.main-label input::attr(value)').getall(),
        items['fit'] = highlights['Fit']
        items['fabric'] =  highlights['Fabric'] 
        items['neck'] = highlights['Neck'] 
        items['sleeve'] = highlights['Sleeve'] 
        items['pattern'] = highlights['Pattern'] 
        items['length'] = highlights['Length'] 

        yield items  # Send the item to the pipeline for storage or further processing.

        