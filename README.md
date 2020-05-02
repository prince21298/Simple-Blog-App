# Simple-Blog-App-
I made Simple Blog app of backend part with using of mongo db database 


[BLOG APP](https://github.com/prince21298/Simple-Blog-App)


mongo DB
in this project i used mongo database beacause its a non-sql database so its help users to upload any types of data and i use this because if any one wants to add feature in this then it will be easy for them.

# Using Methods
### Signup
### Login
### Create Blog
### Update Blog
### Delete Blog

# Requirements
#### NodeJs
#### MongoDB
#### Postman

# Installation process and Execution
First and foremost, If you'are using Linux-based-OS, open your terminal and install the latest version of NodeJS and npm. You do also need to install mysql database onto your system. by writing the following commands. This will install NodeJS version-12 and npm version-6 on your system.

   sudo apt-get update && sudo apt-get install curl
   sudo apt install build-essential apt-transport-https lsb-release ca-certificates curl
   curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
   sudo apt install nodejs
Next, you've to install mysql-database onto your system. For this, write these following commands on your terminal.

     sudo apt-get update
     sudo apt-get install mysql-server
   
You can also check the version of NodeJS and npm by writing, node -v and npm -v on the terminal respectively.
Next, you need to make a clone of this repository and get into the repository on your terminal. Now, you need to install the required dependencies from your package.json file. For this, you've to write sudo npm install.

There is a tshirtshop.sql file already present in the database/ folder. You have to import this file to an empty database. For this, make a new database first, and navigate to the database/ directory and then write the following commands:
Import the schema using mysql -u <user_name> -p <database_name> < tshirtshop.sql
For checking the data, log into your user, by writing mysql -u <user_name> -p. You would be asked for your password. Now, you can use database with all its tables' data.

Next, navigate to the folder where, server.js file is located. You can start the local server by writing node server.js on the terminal.
You can always kill your running port by writing, killall -9 node on the terminal.
Now, you need to install postman, that helps you to develop APIs and getting responses from it, by writing the following commands on your terminal.

     sudo apt-get install snap
     snap install postman
