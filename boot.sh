#!/bin/bash

cd /;
sudo service mongod start;
cd -;
whereis supervisor;
export PATH=$PATH:/opt/node-v4.4.4-linux-x64/bin;
supervisor --harmony index;
