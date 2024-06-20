for index in range(6):
    music.play(music.string_playable("B A G A G F A C5 ", 120),
        music.PlaybackMode.UNTIL_DONE)
    basic.show_leds("""
        # # . . .
        # . # . .
        # # # . .
        # . # . .
        # # . . .
        """)
    basic.show_leds("""
        . . . . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        """)
    basic.show_leds("""
        . # # # .
        # . . . .
        . # # . .
        . . . # .
        # # # . .
        """)
    basic.show_icon(IconNames.HEART)