# Incubation

## Table of contents

- [Introduction](#introduction)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [License](#license)

## Introduction
  An incubation management application for slot booking. This application is a for booking a slot for different companies to get an appointment. 

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- JWT_SECRET: This is the JWT AuthToken (string).

- PORT: Port in which the application runs (string).

- NODE_ENV: node environments (string).

After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using  `npm install`and install frontend packages. 

Now you can run the backend using `npm start` in the terminal and run the frontend using npm run start, then the application should work.

## Technology

The application is built with:

- React JS
- Redux Toolkit
- Bootstrap
- Node JS
- Express JS
- MongoDB
- REST API

## Features

This application is a for booking a slot.

Users can do the following:

- Signup.
- User can login using the credentials.
- Register thier company.
- book an appointmnet.

Admins can do the following:

- The Admin can become a controller of the APP by using the signup option and providing his role-based credentials, which he can later use to log in.
- Admin can log  in using registered credentials username and password, and can also end the  session using the logout button
- Admin can provide the slot based on the request of the users.

## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2022 © [MUHAMMED HASHIM CP](https://github.com/muhammedhashimcp)
