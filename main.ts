basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_inch, DigitalPin.P8) < 3) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    }
})
