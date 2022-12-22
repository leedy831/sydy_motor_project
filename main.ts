let light_sensor = 0
let strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
serial.writeNumber(0)
basic.forever(function () {
    light_sensor = pins.analogReadPin(AnalogPin.P3)
    serial.writeNumber(light_sensor)
    serial.writeLine("")
    basic.pause(100)
    pins.servoWritePin(AnalogPin.P14, pins.map(
    pins.analogReadPin(AnalogPin.P3),
    0,
    1023,
    0,
    180
    ))
})
