# Hangman!

> A classic word game. Try to guess all the letters before your guesses run out!

![Main screen](https://github.com/gness1804/hangman/blob/main/assets/main-screen.png)

## Install

```
npx degit gness1804/hangman
```
...Or fork or clone down the traditional way. See [https://github.community/t/the-difference-between-forking-and-cloning-a-repository/10189](https://github.community/t/the-difference-between-forking-and-cloning-a-repository/10189)

The project is a monorepo consisting of the core app, created from [Create React App](https://github.com/facebook/create-react-app), and a server child directory. In the project root, you'll need to:

```
npm install OR yarn install
```

```
cd server
npm install OR yarn install
```

## Usage
Simply run the startup scripts in both the root and server using `npm start` or `yarn start`. This should start up the React app and the server, and the React app should now be usable.

### GAME PLAY
Enter a letter into the box. It will either appear on the board, if it is in the word, or appear in red below the box if not. The latter case will reduce your available guesses by one. Reveal the entire word before running out of guesses to win!

#### NEW WORD

Get a new word by clicking on the "NEW WORD" button. This will also reset your guesses. 

#### OPTIONS

Click on the "Options" link near the bottom of the game screen to adjust the following options:

* Total Guesses: 1-8
* Max Word Length: 3-8

There are also victory and defeat screens which are pretty self-explanatory.
 

## Changelog

[❯ Read the changelog here →](https://github.com/gness1804/hangman/blob/main/CHANGELOG.md)
