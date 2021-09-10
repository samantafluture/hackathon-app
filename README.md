# Hackathon App (Front-End)

A basic and simple web app to search for hackathons around the world and remote ones.

It uses type ahead search and tries to make the minimum of requests to the server.

Built with Angular and Angular CLI.

This front-end uses the following backend: [Hackathon API](https://hackathon-api-nest-mongo.herokuapp.com/event/all). 

## Features

- Type ahead search field
  - Filter through results by typing
- User experience tied to performance
  - Starts to search from 3 typed letters
  - Uses debounce time 
  - Does only one request if the value wasn't changed
  - Manipulates API results with `rxjs operators`

## Built with

- Angular
- Angular CLI
- Material Components (Input, Card, Icon)

Deploy: Vercel.

## Screens

![screenshot-1]()
![screenshot-2]()
![screenshot-3]()

## Under Construction

Features that are being implemented: 

- [] Filter search by: location, price, remote (true/false), alphabetican order
- [] Open card with details
- [] Create, edit and delete hackathons if you're logged in
- [] Google login with Firebase

Please feel free to contribute! This web app is still under development :coffee:
