#!/bin/bash
git pull
mv .vuepress/dist/ ~/html
sudo cp -rf ~/html/ /var/www/