function mugitu_ezkerrera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.NorthWest)
}
function mugitu_eskuinera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        mugitu_eskuinera()
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        mugitu_ezkerrera()
    }
})
