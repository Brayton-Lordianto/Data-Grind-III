from google.cloud import vision
import io, os


def detect_text(path):
    """Detects text in the file."""
    
    client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.text_detection(image=image)
    texts = (response.text_annotations[0]).description # Extracts the text from the data dictionary
    format_text = texts.replace('\n', " ") # Formatted text
    print(format_text)

    if response.error.message:
        raise Exception(
            '{}\nFor more info on error messages, check: '
            'https://cloud.google.com/apis/design/errors'.format(
                response.error.message))


directory = f'./server/images' # The directory
for img in os.listdir(directory): # Loops over all the images in the directory

    path = f'server/images/{img}' # Formatted string gives the required path

    detect_text(path) # Calls the function for every image

