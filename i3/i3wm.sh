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

echo $'\n'
echo 'Installiere essentials...'
echo $'\n'

sleep 2

echo $'\n'
echo 'installiere Polybar'
echo $'\n'
apt-get install -y polybar

echo $'\n'
echo 'installiere Nitrogen'
echo $'\n'
apt-get install -y nitrogen

echo $'\n'
echo 'installiere Feh'
echo $'\n'
apt-get install -y feh

echo $'\n'
echo 'installiere Rofi'
echo $'\n'
apt-get install -y rofi

echo $'\n'
echo 'installiere Compton'
echo $'\n'
apt-get install -y compton

echo $'\n'
echo 'installiere Xfce4-Terminal'
echo $'\n'
apt-get install -y xfce4-terminal

echo $'\n'
echo 'installiere Nautilus'
echo $'\n'
apt-get install -y nautilus

echo $'\n'
echo 'installiere Hack-Font'
echo $'\n'
apt-get install -y fonts-hack fonts-hack-otf fonts-hack-ttf fonts-hack-web 

echo $'\n'
echo 'installiere Theming-Tools'
echo $'\n'
apt-get install -y lxappearance gtk-chtheme qt4-qtconfig

echo $'\n'
echo 'installiere Powerline Fonts'
echo $'\n'
git clone https://github.com/powerline/fonts.git
cd $absolutepath/fonts
(. ./install.sh)

echo $'\n'
echo 'Kopiere i3-config...'
echo $'\n'
mkdir ~/.config/i3/
cp -r $absolutepath/Scripts/i3/config ~/.config/i3/config

sleep 2

echo $'\n'
echo 'Kopiere polybar-config...'
echo $'\n'
mkdir ~/.config/polybar/
cp -r $absolutepath/Scripts/i3/polybar-config ~/.config/polybar/config

sleep 2

echo $'\n'
echo 'Kopiere rofi-config...'
echo $'\n'
mkdir ~/.config/rofi/
cp -r $absolutepath/Scripts/rofi/config.rasi ~/.config/rofi/config.rasi

sleep 2

echo $'\n'
echo 'i3 wurde erfolgreich installiert, kehre zurück...'
echo $'\n'

sleep 3

exit

