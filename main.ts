for (let index = 0; index < 6; index++) {
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # . . .
        # . # . .
        # # # . .
        # . # . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # . . . .
        . # # . .
        . . . # .
        # # # . .
        `)
    basic.showIcon(IconNames.Heart)
}
