## Introduction
Al Hollow's Bullets is a bullet-hell game where the player has to dodge the bullets to survive. The main objective is just survival and getting as far as possible. Currently, the game is not in its complete state. I do plan on adding an infinite game loop. As the game stands right now, there are only 5 waves of enemies that spawn, where the 5th wave is a boss fight. 

## MVPs

This project uses the canvas library to render the game onto the page. The title screen / pause-screen was all drawn using canvas. There are no images involved there. This allows me to possibly add animations in the future to make that screen come to life.

## Gameplay

The user spawns into the center of the map and is immediately greeted with the first wave of enemies after 3 seconds.

![1st wave image][1stWave]

After starting the wave, the gameplay loop will continue. To advance to the next wave, the player has to either wait 20 seconds or eliminate all enemies on screen.

If the player decides to not try to eliminate any enemies, the game can get hectic and become a nightmare to try to survive. It'll become a bullet-hell so to speak. For example:

![bullet-Hell image][bulletHell]

The first boss showcases an adaptable HP Bar at the top of the screen that updates based on the total hp of all the enemies on screen. Showcased here:

![Boss image][bossroom]

There is currently no win screen at the moment. However the game would restart from scratch.

## Wireframe

![ :sad: can't load image][wireframe]

This was my initial plan on making the page. However, as I was making the project, it became more convenient to implement my ideas straight into the canvas.

## Plans for the Future

 1. Adding infinite waves
 2. Adding a scoring system
 3. More intuitive inputs - currently the game requires a mouse to be played optimaly
 4. Add indicator for dodge cooldown
 5. Add power ups
 6. Add more Sound effects
 7. Add music
 8. ...and more!

## Licenses

Images used are from craftpix.net: https://craftpix.net/file-licenses/

Sound effects used are from mixkit.co: https://mixkit.co/license/#sfxFree

Icon license: Font License: SIL Open Font License, 1.1 (http://scripts.sil.org/OFL))

[wireframe]: ./images/readMeImages/wireframe.png
[1stWave]: ./images/readMeImages/1stWaveImage.png
[bulletHell]: ./images/readMeImages/bulletHell.png
[bossroom]: ./images/readMeImages/bossroom.png