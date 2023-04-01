(async() => {
    const scene = createScene('render-canvas', {
        background: 'black',
        dimension: [854, 480],
        outputElem: 'out'
    })
    startRecording()
    let intro = scene.addText({
        text: 'পাই এর মান কত?', 
        x: 300,
        y: 250,
        opacity: 0
    })
    let pi = scene.addText({
        text: SIGNS.PI,
        x: 540,
        y: 250,
        opacity: 0
    })
    await delay(1000)
    intro.fadeIn()
    pi.fadeIn()
    await delay(2000)
    intro.fadeOut()
    pi.moveTo(280, 250)
    await delay(1000)
    let eq = scene.addText({
        text: SIGNS.EQUAL,
        x: 320,
        y: 250,
        opacity: 0
    })
    eq.fadeIn()
    await delay(500)
    let val = scene.addText({
        text: '3.14159265358979...',
        x: 350,
        y: 250,
        opacity: 0,
        color: '#ffffff'
    })
    val.fadeIn()
    await delay(2000)
    indicate(val)
    await delay(3000)
    stopRecording()
})()