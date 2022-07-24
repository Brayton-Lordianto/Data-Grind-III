import requests
res = requests.post('http://localhost:5000/make_post', json={"mytext":"lalala"})
if res.ok:
    print(res.json())