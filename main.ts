input.onButtonPressed(Button.A, function () {
    Delay = 0
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    music.playMelody("C C5 C5 C5 - - - - ", 120)
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P2, 0)
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P2, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(1000)
    }
    Delay = 0
    basic.showLeds(`
        # . . . #
        . . . . .
        # . . . #
        # # . # #
        . # # # .
        `)
})
let Delay = 0
basic.showLeds(`
    # . . . #
    . . . . .
    # . . . #
    # # . # #
    . # # # .
    `)
Delay = 0
music.playMelody("C D E F G A B C5 ", 300)
basic.forever(function () {
    Delay += 1
    if (Delay > 1000) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . # # # .
            # # . # #
            # . . . #
            `)
        Delay = 800
        music.playMelody("C5 C C - - - - - ", 120)
    }
})
