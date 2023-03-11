(async() => {
    const scene = createScene('render-canvas', {
        background: 'black',
        dimension: [854, 480]
    })
    startRecording()
    // await delay(1000)
    // let title = scene.addText({
    //     placement: 'center',
    //     y: 200,
    //     text: 'প্রক্ষেপন গতি',
    //     color: COLORS.BLUE.E,
    //     opacity: 0
    // })
    // let subtitle = scene.addText({
    //     placement: 'center',
    //     y: 250,
    //     text: '(Projectile Motion)',
    //     color: COLORS.BLUE.D,
    //     opacity: 0
    // })
    // title.fadeIn()
    // await delay(200)
    // subtitle.fadeIn()
    // await delay(2000)
    // title.fadeOut()
    // subtitle.fadeOut()
    // title.remove()
    // subtitle.remove()

    // await delay(1000)
    // scene.createRect({
    //     x: 0,
    //     y: 400,
    //     h: 0,
    //     w: 854,
    //     color: '#ffffff',
    // })

    // let ball = scene.createCircle({
    //     radius: 20,
    //     x: 50,
    //     y: 360,
    //     color: COLORS.RED.A
    // })

    // await delay(2000)

    // indicate(ball)
    // await delay(2000)

    // const start = { x: 50, y: 360 };
    // const control = { x: 300, y: 20 };
    // const end = { x: 610, y: 365 };

    // let motionPath = scene.createCurve({
    //     x: 80, y: 360,
    //     endCoord: { x: 610, y: 360 },
    //     controlPoints: [{ x: 330, y: 50 }],
    //     color: '#808080',
    //     opacity: 0,
    //     type: 'quadratic'
    // })

    // ball.moveWithFunction({
    //     func: FUNCTIONS.QuadraticBezier,
    //     args: {start, control, end}
    // }, [0, 1], 0.006)

    // await delay(3000)
    // motionPath.fadeIn()
    // await delay(3000)
    // ball.moveTo(50, 360)
    // await delay(2000)
    // ball.moveWithFunction({
    //     func: FUNCTIONS.QuadraticBezier,
    //     args: {start, control, end}
    // }, [0, 1], 0.005)

    // await delay(5000)
    // indicate(motionPath)
    // await delay(500)
    // let t1 = scene.addText({
    //     text: '1. বক্রগতি',
    //     x: 550,
    //     y: 0,
    //     color: COLORS.BLUE.D,
    //     opacity: 0,
    //     size: 25
    // })
    
    // t1.moveTo(550, 160, 100)
    // t1.fadeIn()
    // await delay(2000)
    // let t2 = scene.addText({
    //     text: '(অধিবৃত্ত)',
    //     x: 670,
    //     y: 160,
    //     color: COLORS.BLUE.B,
    //     opacity: 0,
    //     size: 25
    // })
    // t2.fadeIn()
    // await delay(2000)
    // motionPath.fadeOut()

    // ball.moveTo(50, 360)
    // await delay(2000)
    // ball.moveWithFunction({
    //     func: FUNCTIONS.QuadraticBezier,
    //     args: {start, control, end}
    // }, [0, 1], 0.002)

    // await delay(1000)
    // let yc = scene.createRect({
    //     x: 100,
    //     y: 100,
    //     color: COLORS.GREEN.A,
    //     w: 0,
    //     h: 1
    // })
    // yc.scaleY(120)
    // let xc = scene.createRect({
    //     x: 80,
    //     y: 200,
    //     color: COLORS.YELLOW.C,
    //     w: 1,
    //     h: 0
    // })
    // xc.scaleX(120)
    // await delay(1000)
    // let t3 = scene.addLatexText({
    //     text: 'y',
    //     x: 110,
    //     y: 100,
    //     color: COLORS.GREEN.A,
    //     size: 20
    // })
    // let t4 = scene.addLatexText({
    //     text: 'x',
    //     x: 160,
    //     y: 175,
    //     color: COLORS.YELLOW.C,
    //     size: 18
    // })
    // await delay(2000)
    // yc.scaleY(1/120)
    // yc.fadeOut()
    // xc.scaleX(1/120)
    // xc.fadeOut()
    // t3.moveTo(210, 100)
    // t4.moveTo(160, 100)
    // let t5 = scene.addText({
    //     text: '(    ,     )',
    //     x: 143,
    //     y: 120,
    //     color: COLORS.BLUE.D,
    //     size: 32,
    //     opacity: 0
    // })
    // t5.fadeIn()
    // await delay(2000)
    // t3.fadeOut()
    // t4.fadeOut()
    // t5.fadeOut()
    // yc.remove()
    // xc.remove()
    // await delay(500)
    // let t6 = scene.addText({
    //     text: '2. দ্বিমাত্রিক গতি',
    //     x: 550,
    //     y: 0,
    //     color: COLORS.BLUE.D,
    //     opacity: 0,
    //     size: 25
    // })
    
    // t6.moveTo(550, 200, 100)
    // t6.fadeIn()

    // await delay(6000)
    // t1.moveTo(880, 160)
    // t2.moveTo(880, 160)
    // t6.moveTo(880, 200)

    // ball.moveTo(50, 320)
    // await delay(1000)
    // ball.scale(2)
    // await delay(1000)

    // const startt = { x: 50, y: 320 };
    // const controlt = { x: 300, y: -50 };
    // const endt = { x: 800, y: 325 };

    // ball.moveWithFunction({
    //     func: FUNCTIONS.QuadraticBezier,
    //     args: {start: startt, control: controlt, end: endt}
    // }, [0, 1], 0.005)

    // await delay(1400)
    // let hp = scene.createCircle({
    //     x: 360, y: 180,
    //     color: COLORS.YELLOW.C,
    //     radius: 5
    // })
    // await delay(2000)
    // let hh = scene.createRect({
    //     x: 365, y: 200, w: 0, h: 1, color: COLORS.BLUE.E
    // })
    // hh.scaleY(200)
    // await delay(500)
    // let t7 = scene.addText({
    //     x: 385, y: 300, text: 'সর্বোচ্চ উচ্চতা', color: COLORS.BLUE.D, opacity: 0
    // })
    // t7.fadeIn()
    // await delay(1000)
    // ball.moveTo(50, 320)
    // await delay(1000)
    // ball.moveWithFunction({
    //     func: FUNCTIONS.QuadraticBezier,
    //     args: {start: startt, control: controlt, end: endt}
    // }, [0, 1], 0.005)
    // await delay(4000)
    
    // t1.moveTo(500, 120, 100)
    // t2.moveTo(620, 120, 100)
    // t6.moveTo(500, 160, 100)

    // await delay(1000)
    // let t8 = scene.addText({
    //     text: '3. সর্বোচ্চ উচ্চতায় বেগ সর্বনিম্ন',
    //     x: 550,
    //     y: 0,
    //     color: COLORS.BLUE.D,
    //     opacity: 0,
    //     size: 25
    // })
    // t8.moveTo(500, 200)
    // t8.fadeIn()
    // t7.fadeOut()
    // hp.fadeOut()
    // hh.fadeOut()

    // await delay(5000)
    // objects = []
    // await delay(1000)
    // let ttitle = scene.addText({
    //     placement: 'center',
    //     y: 50,
    //     text: 'Terminology',
    //     color: COLORS.BLUE.D,
    //     opacity: 0
    // })
    // ttitle.fadeIn()
    // await delay(2000)
    // let motionPath2 = scene.createCurve({
    //     x: 150, y: 360,
    //     endCoord: { x: 710, y: 360 },
    //     controlPoints: [{ x: 420, y: 50 }],
    //     color: COLORS.BLUE.E,
    //     opacity: 0,
    //     type: 'quadratic'
    // })
    // let b1 = scene.createCircle({
    //     radius: 20,
    //     x: 120,
    //     y: 360,
    //     color: COLORS.RED.A,
    //     opacity: 0.5
    // })
    // let b2 = scene.createCircle({
    //     radius: 20,
    //     x: 700,
    //     y: 360,
    //     color: COLORS.RED.A,
    //     opacity: 0
    // })

    // motionPath2.fadeIn()
    // b2.fadeIn()
    
    // await delay(2000)

    // indicate(motionPath2)
    // let labt = scene.addText({
    //     x: 600, y: 240, text: 'প্রক্ষেপন (Trajectory)', color: COLORS.GREEN.D, size: 20
    // })
    // await delay(3000)

    // let range = scene.createRect({
    //     x: 150, y: 400, w: 1, h: 0, color: COLORS.YELLOW.D
    // })
    // range.scaleX(560)
    // await delay(2000)

    // let labr = scene.addText({
    //     placement: 'center', y: 440, text: 'পাল্লা (Range)', color: COLORS.GREEN.D, size: 20
    // })
    // await delay(2000)

    // let hh2 = scene.createRect({
    //     x: 420, y: 210, w: 0, h: 1, color: COLORS.PURPLE.E
    // })
    // hh2.scaleY(190)
    // await delay(1000)

    // let labh = scene.addText({
    //     x: 430, y: 320, text: 'সর্বোচ্চ উচ্চতা (Max. Height)', color: COLORS.GREEN.D, size: 15
    // })

    // await delay(7000)

    // ttitle.fadeOut()
    // b1.fadeOut()
    // b2.fadeOut()
    // motionPath2.fadeOut()
    // labt.fadeOut()
    // labr.fadeOut()
    // hh2.fadeOut()
    // range.fadeOut()
    // labh.fadeOut()

    // objects = []
    // await delay(2000)

    // let ballm = scene.createCircle({
    //     radius: 50,
    //     x: 340,
    //     y: 250,
    //     color: COLORS.RED.C,
    //    opacity: 0
    // })
    // ballm.fadeIn()
    // await delay(2000)
    // let varr = scene.createArrow({
    //     x: 440,
    //     y: 250,
    //     endCoord: {x: 630, y: 70},
    //     color: COLORS.BLUE.D
    // })
    // let vt = scene.addLatexText({x: 520, y: 200, text: 'v', size: 20, opacity: 0})
    // await delay(1000)
    // vt.fadeIn()
    // await delay(2000)
    // varr.fadeOut()
    // vt.fadeOut()
    // let vyarr = scene.createArrow({
    //     x: 390,
    //     y: 230,
    //     endCoord: {x: 390, y: 80},
    //     color: COLORS.BLUE.D
    // })
    // let vxarr = scene.createArrow({
    //     x: 460,
    //     y: 300,
    //     endCoord: {x: 630, y: 300},
    //     color: COLORS.BLUE.D,
    // })
    // let vyt = scene.addLatexText({x: 405, y: 170, text: 'v_y', size: 20, opacity: 0})
    // let vxt = scene.addLatexText({x: 530, y: 270, text: 'v_x', size: 20, opacity: 0})
    // await delay(1000)
    // vyt.fadeIn()
    // vxt.fadeIn()
    // await delay(3000)
    // vyt.moveTo(350, 165)
    // vxt.moveTo(530, 320)
    // await delay(500)
    // varr.fadeIn()
    // vt.fadeIn()

    // await delay(1000)
    // let vl = scene.createRect({
    //     x: 630, y: 70, w: 0, h: 1, outlineOnly: true, opacity: 0.5,
    //     color: COLORS.WHITE
    // })

    // vl.scaleY(230)
    // await delay(1000)
    // vt.scale(0.7)
    // let angc = scene.createArc({
    //     x: 400, y: 280, radius: 100, angles: [5.7, 0.1], color: COLORS.GREEN.D, 
    //     opacity: 0.5, outlineType: 'dotted'
    // })
    // await delay(500)
    // let angt = scene.addLatexText({
    //     x: 510, y: 235, text: '\\theta', size: 20, color: COLORS.GREEN.D, 
    //     opacity: 0
    // })
    // angt.fadeIn()

    // await delay(2000)

    // let vxfc = scene.addLatexText({
    //     x: 75, y: 105, text: 'cos', size: 15, opacity: 0
    // })
    // vxfc.fadeIn()
    // let angt2 = scene.addLatexText({
    //     x: 510, y: 235, text: '\\theta', size: 20, color: COLORS.GREEN.D, 
    //     opacity: 0
    // })
    // angt2.fadeIn()
    // angt2.moveTo(122, 98, 100)
    // angt2.scale(1.2)

    // await delay(1000)
    // let eq = scene.addLatexText({
    //     x: 160, y: 100, text: '=', size: 20, opacity: 0
    // })
    // eq.fadeIn()
    // await delay(1000)
    // let costf = scene.addLatexText({
    //     x: 200, y: 85, text: '\\frac{Adjacent}{Hypotenuse}', size: 50, opacity: 0
    // })
    // costf.fadeIn()
    // let equ2 = scene.addLatexText({
    //     x: 75, y: 180, text: '\\Rightarrow cos\\theta = ', size: 25, opacity: 0
    // })
    // await delay(4000)
    // equ2.fadeIn()

    // let vt2 = scene.addLatexText({x: 520, y: 200, text: 'v', size: 20})
    // let vxt2 = scene.addLatexText({x: 530, y: 320, text: 'v_x', size: 20})
    // vt2.moveTo(237, 210, 100)
    // vt2.scale(0.8)
    // vxt2.moveTo(230, 170, 100)
    // await delay(500)
    // vt2.fadeOut()
    // vxt2.fadeOut()
    // equ2.remove()
    // equ2 = scene.addLatexText({
    //     x: 75, y: 165, text: '\\Rightarrow cos\\theta = \\frac{v_x}{v}', size: 60
    // })
    // await delay(2000)

    // vxt2.fadeIn()
    // vxt2.moveTo(75, 265)
    // await delay(500)
    // scene.addLatexText({
    //     x: 120, y: 260, text: '=', size: 20, opacity: 0
    // }).fadeIn()
    // await delay(500)
    // vt2.fadeIn()
    // vt2.moveTo(160, 265)
    // await delay(500)
    // scene.addLatexText({
    //     x: 180, y: 260, text: 'cos\\theta', size: 20, opacity: 0
    // }).fadeIn()

    // await delay(2000)
    // let outline1 = scene.createRect({
    //     x: 60, y: 250, w: 1, h: 50, color: COLORS.BLUE.D, outlineOnly: true
    // })
    // outline1.scaleX(190)
    // await delay(2000)

    // indicate(vyt)

    // await delay(2000)
    // let equ3 = scene.addLatexText({
    //     x: 75, y: 250, text: 'v_y = vsin\\theta', size: 32, opacity: 0
    // })
    // equ3.fadeIn()
    // equ3.moveTo(75, 320)
    // await delay(2000)

    // let outline2 = scene.createRect({
    //     x: 60, y: 310, w: 1, h: 50, color: COLORS.BLUE.D, outlineOnly: true
    // })
    // outline2.scaleX(190)

    // await delay(3000)
    // fadeOutAll()
    // objects = []

    // await delay(1000)
    // ball = scene.createCircle({
    //     radius: 1,
    //     x: 50,
    //     y: 360,
    //     color: COLORS.RED.C,
    //     opacity: 0
    // })
    // ball.fadeIn()
    // ball.scale(25)
    // await delay(3000)
    // //equ3.remove()
    // equ3 = scene.addLatexText({
    //     x: 650, y: 50, text: 'v_y = vsin\\theta', size: 32, opacity: 0
    // })
    // equ3.fadeIn()
    // let e3arr = scene.createArrow({
    //     x: 600, y: 100, endCoord: {x: 640, y: 70}
    // })
    // let e3arrlab = scene.addText({
    //     x: 520, y: 130, text: 'নিক্ষেপের সময়ে', size: 20
    // })
    // await delay(3000)
    // e3arr.fadeOut()
    // e3arrlab.fadeOut()
    // let equ4 = scene.addLatexText({
    //     x: 320, y: 50, text: 'v = u + at', size: 28, opacity: 0
    // })
    // equ4.fadeIn()
    // await delay(2000)

    // indicate(equ3)
    // await delay(2000)
    // let equ5 = scene.addLatexText({
    //     x: 300, y: 100, text: '\\Rightarrow v_y = v_{0y} + at', 
    //     size: 32, opacity: 0
    // })
    // equ5.fadeIn()
    // await delay(2000)
    // let equ6 = scene.addLatexText({
    //     x: 320, y: 150, text: 'v_y = v_{0}sin\\theta - gt', 
    //     size: 32, opacity: 0
    // })
    // equ6.fadeIn()
    // await delay(2000)
    // equ4.fadeOut()
    // equ5.fadeOut()
    // equ3.fadeOut()
    // equ4.remove()
    // equ5.remove()
    // equ3.remove()

    // equ6.moveTo(600, 50)

    // await delay(3000)

    // let vval = scene.addLatexText({
    //     x: 130, y: 380, text: `v = 10ms^{-1}`, 
    //     size: 25, opacity: 0
    // })
    // let aval = scene.addLatexText({
    //     x: 130, y: 420, text: `\\theta = 45^{\\circ}`, 
    //     size: 23, opacity: 0
    // })
    // vval.fadeIn()
    // aval.fadeIn()

    // await delay(2000)
    // let points = []
    // for(let i = 0; i < 1.5; i+=0.01) {
    //     points.push([i, (10 * Math.sin(Math.PI/4)) - (9.8 * i)])
    // }

    // let vygraph = scene.createGraph({
    //     x: 160, y: 50, w: 500, h: 400,
    //     points,
    //     xAxis: createAxis([0, 5], 1),
    //     yAxis: createAxis([-10, 12], 2),
    //     opacity: 0
    // })
    // vygraph.fadeIn()
    // let ylab = scene.addLatexText({
    //     x: 360, y: 60, text: `v_y(t)`, 
    //     size: 18, opacity: 0
    // })
    // ylab.fadeIn()

    // let dot = scene.createCircle({
    //     x: 406, y:110, radius: 4, color: COLORS.YELLOW.C
    // })

    // let timer = scene.addLatexText({
    //     x: 530, y: 320, text: `t = 0s`, 
    //     size: 20, opacity: 0, color: COLORS.BLUE.D
    // })
    // timer.fadeIn()

    // await delay(2000)
    // timer.fadeOut()
    // dot.moveTo(451, 245, 100)
    // await delay(1000)
    // timer.remove()
    // timer = scene.addLatexText({
    //     x: 530, y: 320, text: `t = 0.7s`, 
    //     size: 20, opacity: 0, color: COLORS.BLUE.D
    // })
    // timer.fadeIn()
    // await delay(2000)
    // timer.fadeOut()
    // dot.moveTo(498, 395, 100)
    // await delay(1000)
    // timer.remove()
    // timer = scene.addLatexText({
    //     x: 530, y: 320, text: `t = 1.4s`, 
    //     size: 20, opacity: 0, color: COLORS.BLUE.D
    // })
    // timer.fadeIn()
    // await delay(3000)
    // vygraph.fadeOut()
    // ylab.fadeOut()
    // timer.fadeOut()
    // dot.fadeOut()
    // vval.fadeOut()
    // aval.fadeOut()

    // equ6.moveTo(320, 150)
    // await delay(2000)
    // let equ6a = scene.addLatexText({
    //     x: 320, y: 150, text: '\\Rightarrow 0 = v_{0}sin\\theta - gt', 
    //     size: 28, opacity: 0
    // })
    // equ6a.fadeIn()
    // equ6a.moveTo(290, 200)
    // await delay(2000)
    // let equ6b = scene.addLatexText({
    //     x: 290, y: 200, text: '\\Rightarrow gt = v_{0}sin\\theta', 
    //     size: 28, opacity: 0
    // })
    // equ6b.fadeIn()
    // equ6b.moveTo(290, 250)
    // await delay(2000)
    // let equ6c = scene.addLatexText({
    //     x: 290, y: 250, text: 't = \\frac{v_{0}sin\\theta}{g}', 
    //     size: 70, opacity: 0, color: COLORS.WHITE
    // })
    // equ6c.fadeIn()
    // equ6c.moveTo(290, 300)
    // await delay(2000)
    // equ6c.fadeOut()
    // await delay(500)
    // equ6c = scene.addLatexText({
    //     x: 290, y: 300, text: 't = \\frac{2v_{0}sin\\theta}{g}', 
    //     size: 70, opacity: 0, color: COLORS.WHITE
    // })
    // equ6c.fadeIn()
    // await delay(1000)

    // equ6c.changeColor(COLORS.GREEN.D)
    // await delay(3000)
    // equ6c.moveTo(50, 50)
    // equ6c.scale(0.7)

    // await delay(3000)
    // equ6a.fadeOut()
    // equ6b.fadeOut()
    // equ6.fadeOut()

    // await delay(1000)
    // let equ7 = scene.addLatexText({
    //     x: 350, y: 100, text: `v^2 = u^2 - 2gh`, 
    //     size: 32, opacity: 0
    // })
    // equ7.fadeIn()
    // await delay(2000)
    // let equ7a = scene.addLatexText({
    //     x: 350, y: 100, text: `\\Rightarrow 0^2 = u^2 - 2gh`, 
    //     size: 32, opacity: 0
    // })
    // equ7a.fadeIn()
    // equ7a.moveTo(315, 150)
    // await delay(2000)
    // let equ7b = scene.addLatexText({
    //     x: 315, y: 150, text: `\\Rightarrow 2gh = u^2`, 
    //     size: 32, opacity: 0
    // })
    // equ7b.fadeIn()
    // equ7b.moveTo(315, 200)
    // await delay(2000)
    // let equ7c = scene.addLatexText({
    //     x: 315, y: 200, text: `\\Rightarrow h = \\frac{u^2}{2g}`, 
    //     size: 72, opacity: 0
    // })
    // equ7c.fadeIn()
    // equ7c.moveTo(315, 250)
    // await delay(3000)
    // let equ7d = scene.addLatexText({
    //     x: 315, y: 250, text: `h = \\frac{(v_0sin\\theta)^2}{2g}`, 
    //     size: 72, opacity: 0, color: COLORS.WHITE
    // })
    // equ7d.fadeIn()
    // equ7d.moveTo(350, 350)
    // await delay(1000)
    // equ7d.changeColor(COLORS.GREEN.D)
    // await delay(3000)
    // equ7d.moveTo(50, 110)
    // equ7d.scale(0.7)
    // await delay(1000)
    // equ7.fadeOut()
    // equ7a.fadeOut()
    // equ7b.fadeOut()
    // equ7c.fadeOut()
    // await delay(2000)

    // let tq = scene.addText({
    //     placement: 'center', y: 250, text: 'বলো তো, রেঞ্জ এর মান কত হবে?',
    //     color: COLORS.RED.D
    // })
    // await delay(3000)
    // let ht1 = scene.addLatexText({
    //     x: 365, y: 300, text: `s = vt`, 
    //     size: 25, opacity: 0, color: COLORS.WHITE
    // })
    // ht1.fadeIn()
    // await delay(2000)
    // let ht2 = scene.addLatexText({
    //     x: 350, y: 330, text: `v_x = v_0 cos\\theta`, 
    //     size: 25, opacity: 0, color: COLORS.WHITE
    // })
    // ht2.fadeIn()
    // await delay(2000)
    // tq.fadeOut()
    // await delay(1000)
    // tq.remove()

    // ht1.moveTo(365, 100)
    // await delay(1000)
    // indicate(ht2)
    // await delay(1000)
    // ht2.fadeOut()
    // await delay(1000)

    // let equ8 = scene.addLatexText({
    //     x: 340, y: 150, text: `\\Rightarrow s = v_0 cos\\theta t`, 
    //     size: 27, opacity: 0, color: COLORS.WHITE
    // })
    // equ8.fadeIn()
    // await delay(2000)
    // indicate(equ6c)

    // await delay(2000)
    // let equ8a = scene.addLatexText({
    //     x: 340, y: 200, text: `\\Rightarrow s = v_0 cos\\theta \\times 2(\\frac{v_{0}sin\\theta}{g})`, 
    //     size: 70, opacity: 0, color: COLORS.WHITE
    // })
    // equ8a.fadeIn()
    // await delay(3000)
    // let equ8b = scene.addLatexText({
    //     x: 340, y: 280, text: `R = \\frac{v_0^2sin2\\theta}{g}`, 
    //     size: 70, opacity: 0, color: COLORS.WHITE
    // })
    // equ8b.fadeIn()
    // await delay(3000)
    // equ8b.changeColor(COLORS.GREEN.D)
    // await delay(1000)

    // equ8b.moveTo(50, 180)
    // equ8b.scale(0.7)

    // await delay(2000)
    // equ8.fadeOut()
    // equ8a.fadeOut()
    // ht1.fadeOut()
    // await delay(500)
    // equ8.remove()
    // equ8a.remove()
    // ht1.remove()
    // ht2.remove()
    // await delay(2000)

    // motionPath2 = scene.createCurve({
    //     x: 100, y: 360,
    //     endCoord: { x: 710, y: 360 },
    //     controlPoints: [{ x: 420, y: 50 }],
    //     color: COLORS.BLUE.E,
    //     opacity: 0,
    //     type: 'quadratic',
    //     outlineType: 'dotted'
    // })
    // motionPath2.fadeIn()
    // let ball2 = scene.createCircle({
    //     radius: 25,
    //     x: 710,
    //     y: 360,
    //     color: COLORS.RED.E,
    //     opacity: 0
    // })
    // ball2.fadeIn()
    // await delay(1000)
    // indicate(motionPath2)
    // await delay(2000)

    // let pequ = scene.addLatexText({
    //     x: 540, y: 150, text: `f(x) = ax^2 + bx + c`, 
    //     size: 30, opacity: 0, color: COLORS.BLUE.D
    // })
    // pequ.fadeIn()
    // pequ.moveTo(540, 180)
    // await delay(2000)
    // motionPath2.fadeOut()
    // ball2.fadeOut()
    // pequ.fadeOut()
    // await delay(500)
    // motionPath2.remove()
    // ball2.remove()
    // pequ.remove()
    // await delay(2000)

    // let equ9 = scene.addLatexText({
    //     x: 300, y: 100, text: `s = ut - \\frac{1}{2} gt^2`, 
    //     size: 60, opacity: 0, color: COLORS.WHITE
    // })
    // equ9.fadeIn()

    // await delay(3000)
    // let equ9a = scene.addLatexText({
    //     x: 300, y: 180, 
    //     text: `s_x = v_{0x}t`, 
    //     size: 25, opacity: 0, color: COLORS.WHITE
    // })
    // equ9a.fadeIn()
    // await delay(4000)
    // equ9a.fadeOut()
    // await delay(1000)
    // equ9a.remove()
    // equ9a = scene.addLatexText({
    //     x: 300, y: 180, 
    //     text: `t = \\frac{s_x}{v_{0x}}`, 
    //     size: 60, opacity: 0, color: COLORS.WHITE
    // })
    // equ9a.fadeIn()
    // await delay(2000)
    // equ9a.fadeOut()
    // await delay(1000)
    // equ9a.remove()
    // equ9a = scene.addLatexText({
    //     x: 300, y: 180, 
    //     text: `t = \\frac{s_x}{v_0cos\\theta}`, 
    //     size: 60, opacity: 0, color: COLORS.WHITE
    // })
    // equ9a.fadeIn()
    // await delay(3000)
    // equ9a.moveTo(600, 100)
    // equ9a.scale(0.8)
    // await delay(3000)

    // let equ9b = scene.addLatexText({
    //     x: 300, y: 100, 
    //     text: `s_y = v_0sin\\theta(\\frac{s_x}{v_0cos\\theta}) - \\frac{1}{2} g(\\frac{s_x}{v_0cos\\theta})^2`, 
    //     size: 60, opacity: 0, color: COLORS.WHITE
    // })
    // equ9b.fadeIn()
    // equ9b.moveTo(300, 170)
    // await delay(1000)
    // let idb = scene.createRect({
    //     x: 355, y: 170, w: 200, h: 65, color: COLORS.YELLOW.D, outlineOnly: true
    // })
    // await delay(2000)
    // idb.scaleX(65/200)
    // idb.transformToCircle(5)
    // idb.moveTo(380, 170)
    // await delay(1500)
    // idb.moveTo(470, 190)
    // await delay(1000)
    // idb.fadeOut()

    // await delay(2000)
    // idb.remove()
    // let equ9c = scene.addLatexText({
    //     x: 300, y: 170, 
    //     text: `s_y = tan\\theta \\times s_x - \\frac{g}{2(v_0cos\\theta)^2} \\times s_x^2`, 
    //     size: 60, opacity: 0, color: COLORS.WHITE
    // })
    // equ9c.fadeIn()
    // equ9c.moveTo(300, 260)
    // await delay(2000)
    // equ9c.changeColor(COLORS.BLUE.E)

    // await delay(3000)

    // equ9.fadeOut()
    // equ9a.fadeOut()
    // equ9b.fadeOut()
    // await delay(500)
    // equ9.remove()
    // equ9a.remove()
    // equ9b.remove()
    // equ9c.scale(0.7)
    // equ9c.moveTo(500, 400)
    // await delay(1000)
    

    // points = []
    // for(let i = 0; i < 10; i+=0.01) {
    //     points.push([i, Math.tan(Math.PI/4) * i - ((10/(2*50)) * (i**2)) ])
    // }

    // let cgraph = scene.createGraph({
    //     x: -200, y: 50, w: 600, h: 400,
    //     points,
    //     xAxis: createAxis([0, 12], 1),
    //     yAxis: createAxis([0, 5], 1),
    //     opacity: 0
    // })
    // cgraph.fadeIn()
    // cgraph.scale(1.5)

    // await delay(4000)
    // cgraph.fadeOut()
    // equ9c.fadeOut()
    // await delay(500)

    // let eti3 = scene.addText({
    //     placement: 'center', y: 100, text: 'প্রয়োজনীয় সূত্রাবলি', opacity: 0
    // })
    // eti3.fadeIn()
    // await delay(2000)
    // equ6c.moveTo(350, 150)
    // equ6c.scale(1.2)
    // await delay(500)
    // equ7d.moveTo(350, 220)
    // equ7d.scale(1.2)
    // await delay(500)
    // equ8b.moveTo(350, 300)
    // equ8b.scale(1.2)

    // await delay(5000)

    // fadeOutAll()
    // await delay(500)
    // objects = []
    // await delay(1000)
    
    // let quest = scene.addText({
    //     text: '1. একটি বস্তুকে 20m/s বেগে ভূমির সাথে 25'+SIGNS.DEG+' কোণে নিক্ষেপ করা হলো',
    //     x: 50,
    //     y: 50,
    //     size: 15,
    //     color: COLORS.BLUE.B,
    //     opacity: 0
    // })

    // quest.fadeIn()
    // let quest1 = scene.addText({
    //     text: '(i) বস্তুটি সর্বোচ্চ কত উচ্চতায় পৌঁছাবে?',
    //     x: 50,
    //     y: 90,
    //     size: 15,
    //     opacity: 0
    // })
    // let quest2 = scene.addText({
    //     text: '(ii) বস্তুটি কত সময় পর ভূমিতে পতিত হবে?',
    //     x: 50,
    //     y: 115,
    //     size: 15,
    //     opacity: 0
    // })
    // let quest3 = scene.addText({
    //     text: '(iii) বস্তুটি ভূমিতে পতিত হবার মুহূর্তে বেগ কত?', 
    //     x: 50,
    //     y: 140,
    //     size: 15,
    //     opacity: 0
    // })
    // let quest4 = scene.addText({
    //     text: '(iv) বস্তুটি কত দূরে গিয়ে পতিত হবে?',
    //     x: 50,
    //     y: 165,
    //     size: 15,
    //     opacity: 0
    // })

    // quest1.fadeIn()
    // quest2.fadeIn()
    // quest3.fadeIn()
    // quest4.fadeIn()

    // await delay(2000)

    // let iat = scene.addLatexText({
    //     x: 270, y: 250, text: `h_{max} = \\frac{(v_0sin\\theta)^2}{2g}`, 
    //     size: 72, opacity: 0, color: COLORS.WHITE
    // })
    // iat.fadeIn()
    // await delay(2000)
    // iat.fadeOut()
    // await delay(1000)
    // iat = scene.addLatexText({
    //     x: 270, y: 250, text: `h_{max} = \\frac{(20 \\times sin25)^2}{2\\times 9.8}`, 
    //     size: 72, opacity: 0, color: COLORS.WHITE
    // })
    // iat.fadeIn()
    // await delay(2000)
    // iat.fadeOut()
    // await delay(1000)
    // iat = scene.addLatexText({
    //     x: 270, y: 270, text: `h_{max} = 3.64m`, 
    //     size: 28, opacity: 0, color: COLORS.WHITE
    // })
    // iat.fadeIn()
    // await delay(2000)
    // iat.scale(0.6)
    // iat.changeColor(COLORS.YELLOW.C)
    // iat.moveTo(320, 75)

    // await delay(2000)

    // let iiat = scene.addLatexText({
    //     x: 300, y: 250, text: 't = \\frac{2v_{0}sin\\theta}{g}', 
    //     size: 70, opacity: 0, color: COLORS.WHITE
    // })
    // iiat.fadeIn()
    // await delay(2000)
    // iiat.fadeOut()
    // iiat = scene.addLatexText({
    //     x: 300, y: 250, text: 't = \\frac{2(20) \\times sin25}{9.8}', 
    //     size: 70, opacity: 0, color: COLORS.WHITE
    // })
    // await delay(1000)
    // iiat.fadeIn()
    // await delay(2000)
    // iiat.fadeOut()
    // iiat = scene.addLatexText({
    //     x: 330, y: 260, text: 't = 1.72s', 
    //     size: 28, opacity: 0, color: COLORS.WHITE
    // })
    // await delay(1000)
    // iiat.fadeIn()
    // await delay(2000)
    // iiat.scale(0.5)
    // iiat.changeColor(COLORS.YELLOW.C)
    // iiat.moveTo(345, 100)

    // await delay(2000)
    // let iiiata = scene.addLatexText({
    //     x: 300, y: 250, text: 'v_x = v_0cos\\theta', 
    //     size: 28, opacity: 0, color: COLORS.WHITE
    // })
    // let iiiatb = scene.addLatexText({
    //     x: 300, y: 290, text: 'v_y = v_0sin\\theta - gt', 
    //     size: 28, opacity: 0, color: COLORS.WHITE
    // })
    // iiiata.fadeIn()
    // iiiatb.fadeIn()
    // await delay(2000)
    // iiiata.remove()
    // iiiata = scene.addLatexText({
    //     x: 300, y: 250, text: 'v_x = 18.126ms^{-1}', 
    //     size: 28, color: COLORS.WHITE
    // })
    // await delay(2000)
    // iiiatb.remove()
    // iiiatb = scene.addLatexText({
    //     x: 300, y: 290, text: 'v_y = -8.4ms^{-1}', 
    //     size: 30, color: COLORS.WHITE
    // })

    // await delay(2000)
    // let iiiatc = scene.addLatexText({
    //     x: 300, y: 350, text: 'v = \\sqrt{v_x^2 + v_y^2}', 
    //     size: 60, color: COLORS.WHITE, opacity: 0
    // })
    // iiiatc.fadeIn()
    // await delay(2000)
    // iiiatc.fadeOut()
    // await delay(1000)
    // iiiatc.remove()
    // iiiatc = scene.addLatexText({
    //     x: 300, y: 350, text: 'v = 20ms^{-1}', 
    //     size: 30, color: COLORS.WHITE, opacity: 0
    // })
    // iiiatc.fadeIn()
    // await delay(2000)
    // iiiatc.scale(0.6)
    // iiiatc.changeColor(COLORS.YELLOW.C)
    // iiiata.fadeOut()
    // iiiatb.fadeOut()
    // iiiatc.moveTo(360, 125)

    // await delay(3000)

    // let ivat = scene.addLatexText({
    //     x: 300, y: 150, text: 'R = 31.26ms^{-1}', 
    //     size: 16, color: COLORS.YELLOW.C, opacity: 0
    // })
    // ivat.fadeIn()

    // await delay(3000)

    // fadeOutAll()

    // await delay(3000)

    let fftitle = scene.addText({
        text: 'Fun facts!',
        placement: 'center',
        y: 100,
        size: 30,
        color: COLORS.BLUE.D
    })
    await delay(1000)

    let ff1 = scene.addText({
        text: 'বাস্তবে প্রক্ষেপন গতি একমাত্রিকও হতে পারে। বলতে পারো, সেটা কখন?',
        placement: 'center',
        y: 180,
        size: 25,
        color: COLORS.GREEN.D,
        opacity: 0
    })

    ff1.fadeIn()
    await delay(1000)

    let ff2 = scene.addText({
        text: 'প্রাসের গতির এই সূত্রগুলো একটি নির্দিষ্ট সীমার মাঝে কাজ করে। ',
        placement: 'center',
        y: 250,
        size: 25,
        color: COLORS.RED.D,
        opacity: 0
    })
    
    let ff3 = scene.addText({
        text: 'বেগ তার চেয়ে বেশি হলে আর কাজ করে না। কেন বলোতো?',
        placement: 'center',
        y: 280,
        size: 25,
        color: COLORS.RED.D,
        opacity: 0
    })
    ff2.fadeIn()
    ff3.fadeIn()
    await delay(1000)

    let ff4 = scene.addText({
        text: 'স্থির থেকে পড়ন্ত বস্তুর গতিও প্রক্ষেপন গতি বলে বিবেচিত',
        placement: 'center',
        y: 350,
        size: 25,
        color: COLORS.PURPLE.D,
        opacity: 0
    })
    ff4.fadeIn()

    await delay(10000)
    fadeOutAll()
    
    stopRecording()
})()