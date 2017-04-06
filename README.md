# About
Display texts on a 16x2 I2C LCD via Python using HTTP requests on a Node.js server.

# Installation
On project's directory, run:
```sh
$ npm install
```

# Usage
#### Running the server
On project's directory, run:
```sh
$ npm start
```
It will be running at [http://localhost:3000/](http://localhost:3000/)

On the URL, write one or two texts as parameters with maximum of 16 characters each.
They will be displayed as first and second lines on the LCD (respectively).

#### Example using only one line
* [http://localhost:3000/lcd/Text of 16 chars](http://localhost:3000/lcd/Text%20of%2016%20chars) (note that this example has exactly 16 characters).

#### Example using both lines
* [http://localhost:3000/lcd/First line/Second line](http://localhost:3000/lcd/First%20line/Second%20line) (note that each line has its maximum of 16 characters, making a total of 32 characters).

# Observations
* This project uses Node.js' child_process to execute shell commands, so be sure to check that your user has the necessary permissions.
