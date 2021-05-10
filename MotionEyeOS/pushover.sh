#!/usr/bin/python
import sys,requests
r = requests.post("https://api.pushover.net/1/messages.json",

data={

   "token": "APPTOKEN",
   "user": "USERTOKEN",
   "html": "1",
   "title": "Bewegung Erkannt!",
   "message": "<b>Front</b> Kamera",
   "url": "http://192.168.178.167:8081/",
   "url_title": "Stream ansehen",

},

   files={"attachment":open(sys.argv[1],"rb")})








