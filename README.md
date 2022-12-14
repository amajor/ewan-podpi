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

# NOTE: If you've got the .nvmrc file, you can 
# just use this and it will set the version based 
# on what version is in the file.
nvm use
```

Then you can use node to run your code.

```shell
# This runs the file led.js
node led.js
```

### Create .nvmrc file

To create the correct .nvmrc file...

```shell
# Set the correct version
nvm use 8.14.0

# Save to .nvmrc
node -v > .nvmrc
```

Now you can set the correct version by just running the following:

```shell
nvm use
```

### Troubleshooting

When getting an error about a library not installed...

Run `npm version`, if you see the same error, upgrade npm.

```shell
# Upgrade npm using homebrew
arch -arm64 brew upgrade npm
```

