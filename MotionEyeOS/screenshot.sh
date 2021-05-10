#!/bin/bash

wget --output-document=current.jpg http://192.168.178.167/picture/1/current/

scp current.jpg admin@192.168.178.167:/data/

ssh admin@192.168.178.167 '/data/pushover.py /data/current.jpg && sleep 10 && rm /data/current.jpg && exit'

rm /home/user/current.jpg

exit

