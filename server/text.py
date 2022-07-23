from __future__ import print_function
from google.cloud import vision

image_uri = 'gs://cloud-vision-codelab/otter_crossing.jpg'

client = vision.ImageAnnotatorClient()
image = vision.Image()
image.source.image_uri = image_uri

response = client.text_detection(image=image)

for text in response.text_annotations:
    
    print(text.description)
    