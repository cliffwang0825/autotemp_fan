let Target_Temp = input.temperature()
basic.showString("" + (input.temperature()))
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        Target_Temp = Target_Temp - 1
        basic.showString("" + (Target_Temp))
    } else if (input.buttonIsPressed(Button.B)) {
        Target_Temp = Target_Temp + 1
        basic.showString("" + (Target_Temp))
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.pause(150)
        if (input.temperature() > Target_Temp) {
            for (let index = 0; index < 3; index++) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # # # # #
                    . . # . .
                    . . # . .
                    `)
                basic.pause(50)
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(50)
            }
        } else {
            basic.showIcon(IconNames.Heart)
        }
    }
})
