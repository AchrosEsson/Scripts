#!/bin/bash

        FILE=errors.txt
        TARGET1=192.168.178.100

          touch $FILE

            DATE=$(date '+%d/%m/%Y %H:%M')
            ping -c 1 $TARGET1 &> /dev/null
            if [[ $? -ne 0 ]]; then
              echo "ERROR QNAP "$DATE
              echo $DATE QNAP >> $FILE
              echo "Keine Antwort auf Ping von 192.168.178.100" |
              mail -s "Alert: Device offline!" myemail@mail.com
            else
              echo "OK "$DATE
            fi
              sleep 1
              
exit 0
