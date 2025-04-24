let a = 0
let p = 0
let o = 0
input.onButtonPressed(Button.A, function () {
    a = randint(1, 100)
    basic.showNumber(a)
    basic.pause(1000)
    p = a * a
    basic.showNumber(p)
    basic.pause(1000)
    o = 4 * o
    basic.showNumber(o)
})
basic.forever(function () {
	
})
