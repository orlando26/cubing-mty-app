#!/bin/sh

# Author : Orlando Loza
# Script follows here:

ionic build --prod -- --base-href http://cubingmty.com/ 
npx ngh --dir=www/ --cname=cubingmty.com