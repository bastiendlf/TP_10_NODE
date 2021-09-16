# TP_10_NODE
Bastien DELFORGE bastien.delforge@etu.imt-lille-douai.fr
Adrien MALGOWSKI adrien.malgowski@etu.imt-lille-douai.fr


This project is meant to store TP10 node.js for INTES IMT LILLE DOUAI.

To make it run :

0) Install nodeJS and MySql and then create a DB in MySQL called TPNODE
1) create the file passwordDB.js in /config
2) paste this:

module.exports = {
    PASSWORD: "<ur_password>",
};

replace <ur_password> by ur MySQL root password

3) Open terminal in the root folder 
4) Install dependences -> npm install 
5) To run application -> npm run start
6) To run tests -> npm run test
7) Enjoy :) 
