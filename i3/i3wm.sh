#!/bin/bash

#### Bash-Script zur installation von i3-Gaps ####

echo $'\n'
echo 'installiere i3-Gaps'
echo $'\n'
sleep 2

echo $'\n'
echo 'Klone Repository...'
echo $'\n'

git clone https://github.com/maestrogerardo/i3-gaps-deb.git

absolutepath="$(cd "$(dirname "$1")"; pwd -P)/$(basename "$1")"

cd $absolutepath/i3-gaps-deb

(. ./i3-gaps-deb)

apt install -y gnome-terminal polybar nitrogen feh rofi compton

mkdir ~/.config/i3/

cp -r $absolutepath/Scripts/i3/config ~/.config/i3/config

echo $'\n'
echo 'i3 wurde erfolgreich installiert, kehre zurück...'
echo $'\n'

sleep 3

exit

