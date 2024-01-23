#!/bin/bash
git pull
cp -rf .vuepress/dist/ ~
mv -f ~/dist ~/html
cp -rf ~/html /var/www