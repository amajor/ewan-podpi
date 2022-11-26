# ewan-podpi
Ewan's PodPi class code (for 4th grade homeschool).

Books from [PodPi.com](http://www.podpi.com/).

# Running Code

## Connect the Arduino App
1. Launch the Arduino app
2. Open a Sketch
  1. File --> Examples --> Firmatta --> StandardFirmata
3. Select a Board
  1. Tools --> Boards --> Arduino Uno
4. Select a Port
  1. Tools --> Port --> /dev/cu.usbmodem... (Arduino Uno)
5. Click on "Upload" (arrow) icon
  1. Make sure there are no error messages

## Start the JavaScript

First be sure to set the correct version of NodeJS.

```shell
nvm use 8.14.0
```

Then you can use node to run your code.

```shell
# This runs the file led.js
node led.js
```

### Troubleshooting

When getting an error about a library not installed...

Run `npm version`, if you see the same error, upgrade npm.

```shell
# Upgrade npm using homebrew
arch -arm64 brew upgrade npm
```

