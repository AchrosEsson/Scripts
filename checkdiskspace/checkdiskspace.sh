#!/bin/sh
df | grep -vE '^Filesystem|tmpfs|cdrom' | awk '{ print $5 " " $1 }' | while read output;
do
  echo $output
  usep=$(echo $output | awk '{ print $1}' | cut -d'%' -f1  )
  partition=$(echo $output | awk '{ print $2}' | sed 's#//192.168.178.100/Proxmox#QNAP#g')

  if [ $usep -ge 90 ]; then
    echo "Speicherplatz auf <b>$partition</b> bei <b>$usep%</b> <br>von $(hostname) um $(date)" |
     mail -s "Alert: Speicherplatznutzung bei $usep%" pushoveremail@pomail.net
  fi
done
