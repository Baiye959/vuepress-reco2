#!/bin/bash
git pull
cp -rf .vuepress/dist/ ~
rm -r ~/html
mv ~/dist ~/html
cp -rf ~/html /var/www