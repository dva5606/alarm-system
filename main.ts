radio.onReceivedString(function (receivedString) {
    if (receivedString == "Somebody is at ur door") {
        music.ringTone(10000)
    }
})
radio.setGroup(2)
input.setAccelerometerRange(AcceleratorRange.EightG)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 0) {
        radio.sendString("Someone is at ur door bro")
    }
})
