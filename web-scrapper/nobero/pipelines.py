# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter

import mysql.connector
import json

class NoberoPipeline:
    
    def __init__(self):
        self.create_connection()
        self.create_table()
        print('Connection established')
       
    def create_connection(self):
        self.connection = mysql.connector.connect(
            host = 'localhost',
            user = 'root',
            password = 'admin',
            database = 'nobero'
        )
        self.curr = self.connection.cursor()
        
        
    def create_table(self):
        self.curr.execute("""DROP TABLE IF EXISTS api_product""")
        self.curr.execute("""CREATE TABLE api_product (
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            name VARCHAR(255),
                            price INT(10),
                            original_price INT(10),
                            description MEDIUMTEXT,
                            image_urls MEDIUMTEXT,
                            sizes VARCHAR(255),
                            fit VARCHAR(255),
                            fabric VARCHAR(255),
                            neck VARCHAR(255),
                            sleeve VARCHAR(255),
                            pattern VARCHAR(255),
                            length VARCHAR(255)
                          )""")

    def process_item(self, item, spider):
        self.store_in_db(item)
        return item

    def store_in_db(self, item):
        self.curr.execute("""INSERT INTO api_product (name, price, original_price, description, image_urls, sizes, fit, fabric, neck, sleeve, pattern, length) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)""", (
            item['name'][0],
            item['price'][0],
            item['original_price'][0],
            json.dumps(item['description'][0]),
            json.dumps(item['images'][0]),
            json.dumps(item['sizes'][0]),
            item['fit'],
            item['fabric'],
            item['neck'],
            item['sleeve'],
            item['pattern'],
            item['length']
        ))
        self.connection.commit()