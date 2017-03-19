#!/bin/bash

whereis supervisor
export PATH=$PATH:/opt/node-v4.4.4-linux-x64/bin
cd /Node_Proj/myblog
supervisor --harmobny index
