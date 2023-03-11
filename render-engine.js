var objects = []
var canvas = null
var ctx = null
var sceneProps = {}

//constants
const SIGNS = {
    PLUS: "+",
    MINUS: "-",
    MULTIPLY: "×",
    DIVIDE: "÷",
    EQUAL: "=",
    NEQUAL: "≠",
    PLUSMINUS: "±",
    LESS: "<",
    GREATER: ">",
    DEG: "°",
    PERCENT: "%",
    DELTA: "∆",
    SQRT: "√",
    PROPTO: "∝",
    INFINITY: "∞",
    APPROX: "≈",
    FUNC: "ƒ",
    PI: "π",
    LAMBDA: "λ"
}

const COLORS = {
    BLUE: {
        A: "#1C758A",
        B: "#29ABCA",
        C: "#58C4DD",
        D: "#9CDCEB",
        E: "#C7E9F1"
    },
    RED: {
        A: "#CF5044",
        B: "#E65A4C",
        C: "#FC6255",
        D: "#FF8080",
        E: "#F7A1A3"
    },
    GREEN: {
        A: "#699C52",
        B: "#77B05D",
        C: "#83C167",
        D: "#A6CF8C",
        E: "#C9E2AE"
    },
    YELLOW: {
        A: "#E8C11C",
        B: "#F4D345",
        C: '#FFFF00',
        D: "#FFEA94",
        E: "#FFF1B6"
    },
    PURPLE: {
        A: "#FFF1B6",
        B: "#715582",
        C: "#9A72AC",
        D: "#B189C6",
        E: "#CAA3E8"
    },
    WHITE: '#FFFFFF'
}

const FUNCTIONS = {
    QuadraticBezier: (percent, {start, control, end}) => {
        const x =
            Math.pow(1 - percent, 2) * start.x +
            2 * (1 - percent) * percent * control.x +
            Math.pow(percent, 2) * end.x
        const y =
            Math.pow(1 - percent, 2) * start.y +
            2 * (1 - percent) * percent * control.y +
            Math.pow(percent, 2) * end.y
        return { x, y }
    }
}


//general functions
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

const startRecording = () => {
    media_recorder && media_recorder.start()
}

const stopRecording = () => {
    media_recorder && media_recorder.stop()
}

const getDistance = (x1, x2, y1, y2) => Math.sqrt(((x1 - x2) ** 2) + ((y1 - y2) ** 2))

const interpolate = (color1, color2, factor) => {
    factor ??= 0.5
    if(typeof color1 === 'string' && color1.startsWith('#')) color1 = h2r(color1)
    if(typeof color2 === 'string' && color2.startsWith('#')) color2 = h2r(color2)

    var result = color1.slice();
    for (var i=0;i<3;i++) {
      result[i] = Math.round(result[i] + factor*(color2[i]-color1[i]));
    }
    return result;
};
  
const h2r = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
};

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
const r2h = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function easeInCubic(currentProgress, start, distance, steps) {
    currentProgress /= steps/2;
    if (currentProgress < 1) {
      return (distance/2)*(Math.pow(currentProgress, 3)) + start;
    }
    currentProgress -= 2;
    return distance/2*(Math.pow(currentProgress, 3)+ 2) + start;
}


function calcStraightLine (startCoordinates, endCoordinates) {
    var coordinatesArray = new Array();
    // Translate coordinates
    var x1 = startCoordinates.x;
    var y1 = startCoordinates.y;
    var x2 = endCoordinates.x;
    var y2 = endCoordinates.y;
    // Define differences and error check
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var sx = (x1 < x2) ? 1 : -1;
    var sy = (y1 < y2) ? 1 : -1;
    var err = dx - dy;
    // Set first coordinates
    coordinatesArray.push([y1, x1]);
    // Main loop
    while (!((x1 == x2) && (y1 == y2))) {
        var e2 = err << 1;
        if (e2 > -dy) {
            err -= dy;
            x1 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y1 += sy;
        }
        // Set coordinates
        coordinatesArray.push([y1, x1]);
    }
    // Return the result
    return coordinatesArray;
}


function createAxis(range, interval) {
    let nums = []
    for(let i = range[0]; i < range[1]; i+=interval) {
        nums.push(i)
    }
    return nums
}

//main functions
function createScene(id, props) {
    sceneProps = props
    canvas = document.getElementById(id)
    if(props?.dimension) {
        canvas.width = props?.dimension[0]
        canvas.height = props?.dimension[1]
    } 
    ctx = canvas.getContext('2d')
    objects = []
    window.requestAnimationFrame(draw)
    return {
        createRect: params => createRect(params),
        createCircle: params => createCircle(params),
        createArc: params => createArc(params),
        createCurve: params => createCurve(params),
        createArrow: params => createArrow(params),
        createGraph: params => createGraph(params),
        addText: params => addText(params),
        addLatexText: params => addLatexText(params)
    }
}

let lastFrame = performance.now()
function draw(timestamp) {
    if(timestamp - lastFrame < 13) {
        window.requestAnimationFrame(draw)
        return
    } else {
        if(sceneProps?.background) {
            ctx.fillStyle = sceneProps?.background
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.fillStyle = 'black'
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
        
        objects.forEach(el => {
            drawObject(el)
        })
        lastFrame = performance.now()
        window.requestAnimationFrame(draw)
    }
}

function drawObject(el) {
    const {
        type,
        x,
        y,
        endCoord,
        w,
        h,
        radius,
        curveType,
        controlPoints,
        outlineOnly,
        outlineType,
        arrowType,
        color,
        opacity,
        text,
        img,
        font,
        prevSize,
        prevSizeX,
        prevSizeY,
        size,
        rotation,
        angles,
        points,
        xAxis,
        yAxis,
        transformRate,
        transformTo,
        changeInX,
        changeInY,
        beginningValue,
        movementTime,
        movementSteps,
        targetColor,
        colorStops,
        fadeRate,
        scaleFactor,
        currentScale,
        scaleSteps,
        scaleXFactor,
        scaleXSteps,
        currentXScale,
        scaleYFactor,
        scaleYSteps,
        currentYScale,
        rotationAngle,
        rotationSteps,
        currRotationStep,
        rotationStart,
        animation,
        animationFunction,
        animationFnRange,
        animationStepsArray,
        animationStep,
        animationIncrement,

    } = el
    const idx = objects.indexOf(el)

    switch (type) {
        case 'rect':
            drawRect()
            break;
        case 'circle':
            drawCircle()
            break;
        case 'arc':
            drawArc()
            break;
        case 'curve':
            drawCurve()
            break;
        case 'arrow':
            drawArrow()
            break;
        case 'graph':
            drawGraph()
            break;
        case 'text':
            drawText()
            break;
        case 'latex':
            drawLatexText()
            break;
        default:
            break;
    }

    if(transformRate) {
        if(transformTo === 'circle') {
            if((radius + transformRate/10) > (w / 2) && (radius + transformRate/10) > (h/2)) {
                objects[idx] = {
                    ...objects[idx],
                    type: 'circle',
                    transformRate: 0, transformTo: ''
                }
            } else {
                objects[idx].radius += transformRate/10
            }
        }
    } 

    if(changeInX) {
        if(objects[idx].x !== (changeInX + beginningValue.x)) {
            objects[idx].x = easeInCubic(movementTime, beginningValue.x, changeInX, movementSteps)
            objects[idx].movementTime++
        } else {
            objects[idx] = {
                ...objects[idx],
                changeInX: 0,
            }
            delete objects[idx].beginningValue.x
        }
    }

    if(changeInY) {
        if(objects[idx].y !== (changeInY + beginningValue.y)) {
            objects[idx].y = easeInCubic(movementTime, beginningValue.y, changeInY, movementSteps)
            objects[idx].movementTime++
        } else {
            objects[idx] = {
                ...objects[idx],
                changeInY: 0,
            }
            delete objects[idx].beginningValue.y
        }
    }

    if(animation?.includes('fadein')) {
        objects[idx].opacity += fadeRate

        if(Math.abs(1 - (opacity + fadeRate)) < 0.05) {
            objects[idx].animation = objects[idx].animation.filter(el => el !== 'fadein')
            objects[idx].fadeRate =  0 
            objects[idx].opacity = 1
        }
    }

    if(animation?.includes('fadeout')) {
        objects[idx].opacity -= fadeRate

        if(Math.abs(0 - (opacity - fadeRate)) < 0.05) {
            objects[idx].animation = objects[idx].animation.filter(el => el !== 'fadeout')
            objects[idx].fadeRate =  0 
            objects[idx].opacity = 0
        }
    }

    if(animation?.includes('colorChange')) {
        if(colorStops.indexOf(color) < colorStops.length - 1) {
            objects[idx].color = colorStops[colorStops.indexOf(color) + 1]
            if(type === 'latex') {
                let svg = img
                svg.style.color = color
                let i = document.createElement('img');
                i.onload = (e) => {
                    objects[idx].w = e.target.naturalWidth
                    objects[idx].h = e.target.naturalHeight
                    objects[idx].text = e.target
                }
                i.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg.outerHTML);
            }
        } else {
            objects[idx].color = targetColor
            objects[idx].targetColor = ''
            objects[idx].colorStops = []
            objects[idx].animation = objects[idx].animation.filter(el => el !== 'colorChange')
        }
    }

    if(animation?.includes('scale')) {
        if(currentScale !== scaleSteps) {
            if(size) {
                objects[idx].size = easeInCubic(currentScale, prevSize, ((scaleFactor * prevSize) - prevSize), scaleSteps)
            } else if(radius) {
                objects[idx].radius = easeInCubic(currentScale, prevSize, ((scaleFactor * prevSize) - prevSize), scaleSteps)
            } else {
                objects[idx].w = easeInCubic(currentScale, prevSize.w, ((scaleFactor * prevSize.w) - prevSize.w), scaleSteps)
                objects[idx].h = easeInCubic(currentScale, prevSize.h, ((scaleFactor * prevSize.h) - prevSize.h), scaleSteps)
            }
            
            objects[idx].currentScale++
        } else {
            delete objects[idx].currentScale
            delete objects[idx].scaleSteps
            delete objects[idx].scaleFactor
            delete objects[idx].prevSize
            objects[idx].animation = objects[idx].animation.filter(el => el !== 'scale')
        }
    }

    if(animation?.includes('scaleX')) {
        if(currentXScale !== scaleXSteps) {
            objects[idx].w = easeInCubic(currentXScale, prevSizeX, ((scaleXFactor * prevSizeX) - prevSizeX), scaleXSteps)
            objects[idx].currentXScale++
        } else {
            delete objects[idx].currentXScale
            delete objects[idx].scaleXSteps
            delete objects[idx].scaleXFactor
            delete objects[idx].prevSizeX
            objects[idx].animation = objects[idx].animation.filter(el => el !== 'scaleX')
        }
    }

    if(animation?.includes('scaleY')) {
        if(currentYScale !== scaleYSteps) {
            objects[idx].h = easeInCubic(currentYScale, prevSizeY, ((scaleYFactor * prevSizeY) - prevSizeY), scaleYSteps)
            objects[idx].currentYScale++
        } else {
            delete objects[idx].currentYScale
            delete objects[idx].scaleYSteps
            delete objects[idx].scaleYFactor
            delete objects[idx].prevSizeY
            objects[idx].animation = objects[idx].animation.filter(el => el !== 'scaleY')
        }
    }

    if(animation?.includes('rotate')) {
        if(currRotationStep !== rotationSteps) {
            objects[idx].rotation = easeInCubic(currRotationStep, rotationStart, rotationAngle, rotationSteps)
            objects[idx].currRotationStep++
        } else {
            delete objects[idx].currRotationStep
            delete objects[idx].rotationAngle
            delete objects[idx].rotationSteps
            delete objects[idx].rotationStart
            objects[idx].animation = objects[idx].animation.filter(el => el !== 'rotate')
        }
    }

    if(animation?.includes('function')) {
        if(animationFnRange[1] === parseFloat(animationStep.toFixed(2))) {
            objects[idx] = {
                ...objects[idx],
                animationFnRange: null,
                animationIncrement: null,
                animationFunction: null,
                animation: objects[idx].animation.filter(el => el !== 'function')
            }
        } else {
            let { x, y } = animationFunction.func(animationStep, animationFunction?.args)
            objects[idx].x = x
            objects[idx].y = y
            objects[idx].animationStep += animationIncrement
        }
    }

    if(animation?.includes('drawArrow')) {
        if(animationStep < 100) {
            let i = easeInCubic(animationStep, 0, animationStepsArray.length, 100)
            let coords = animationStepsArray[Math.round(i)]
            if(coords) objects[idx].endCoord = {x: coords[1], y: coords[0]}
            objects[idx].animationStep += 1.5
        } else {
            objects[idx] = {
                ...objects[idx],
                animationStepsArray: null,
                animationIncrement: null,
                animationStep: null,
                animation: objects[idx].animation.filter(el => el !== 'drawArrow')
            }
        }
    }

    if(animation?.includes('drawGraph')) {
        if(animationStep < animationStepsArray.length) {
            let i = easeInCubic(animationStep, 0, animationStepsArray.length, 100)
            objects[idx].points = animationStepsArray.slice(0, i)
            objects[idx].animationStep += 1
        } else {
            objects[idx] = {
                ...objects[idx],
                animationStepsArray: null,
                animationIncrement: null,
                animationStep: null,
                animation: objects[idx].animation.filter(el => el !== 'drawGraph')
            }
        }
    }
    
    function drawRect() {
        if(rotation) {
            ctx.save()
            let rad = rotation * Math.PI / 180
            ctx.translate(x + (w / 2), y + (h / 2))
            ctx.rotate(rad)
            ctx.translate(-(x+w/2),-(y+h/2))
        }
        if(outlineType === 'dotted') {
            ctx.setLineDash([5, 3])
        } 
        ctx.beginPath()
        ctx.roundRect(x, y, w, h, radius)
        ctx.globalAlpha = opacity
        ctx.strokeStyle = color
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.strokeStyle = 'black'
        ctx.fillStyle = color
        if(!outlineOnly) ctx.fill()
        ctx.globalAlpha = 1
        ctx.fillStyle = 'black'
        ctx.setLineDash([])
    }

    function drawCircle() {
        if(rotation) {
            ctx.save()
            let rad = rotation * Math.PI / 180
            ctx.translate(x + (w / 2), y + (h / 2))
            ctx.rotate(rad)
            ctx.translate(-(x+w/2),-(y+h/2))
        }
        if(outlineType === 'dotted') {
            ctx.setLineDash([5, 3])
        } 
        ctx.beginPath()
        ctx.roundRect(x, y, radius*2, radius*2, radius)
        ctx.globalAlpha = opacity
        ctx.strokeStyle = color
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.strokeStyle = 'black'
        ctx.fillStyle = color
        if(!outlineOnly) ctx.fill()
        ctx.globalAlpha = 1
        ctx.fillStyle = 'black'
        ctx.setLineDash([])
    }

    function drawArc() {
        if(rotation) {
            ctx.save()
            let rad = rotation * Math.PI / 180
            ctx.translate(x + (w / 2), y + (h / 2))
            ctx.rotate(rad)
            ctx.translate(-(x+w/2),-(y+h/2))
        }
        if(outlineType === 'dotted') {
            ctx.setLineDash([5, 3])
        } 
        ctx.beginPath()
        ctx.arc(x, y, radius, angles[0], angles[1])
        ctx.globalAlpha = opacity
        ctx.strokeStyle = color
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.strokeStyle = 'black'
        ctx.fillStyle = color
        if(!outlineOnly) ctx.fill()
        ctx.globalAlpha = 1
        ctx.fillStyle = 'black'
        ctx.setLineDash([])
    }

    function drawCurve() {
        if(rotation) {
            ctx.save()
            let rad = rotation * Math.PI / 180
            ctx.translate(x + (w / 2), y + (h / 2))
            ctx.rotate(rad)
            ctx.translate(-(x+w/2),-(y+h/2))
        }
        if(outlineType === 'dotted') {
            ctx.setLineDash([5, 3])
        } 
        ctx.beginPath()
        ctx.moveTo(x, y)
        if(curveType === 'quadratic') {
            ctx.quadraticCurveTo(controlPoints[0].x, controlPoints[0].y, endCoord.x, endCoord.y)
        }
        ctx.globalAlpha = opacity
        ctx.strokeStyle = color
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.strokeStyle = 'black'
        ctx.fillStyle = color
        if(!outlineOnly) ctx.fill()
        ctx.globalAlpha = 1
        ctx.fillStyle = 'black'
        ctx.setLineDash([])
    }

    function drawArrow(){
        //variables to be used when creating the arrow
        const headlen = 10
        var angle = Math.atan2(endCoord.y-y, endCoord.x-x)
        
        ctx.save()
        if(arrowType === 'dotted') {
            ctx.setLineDash([5, 3])
        }    
        ctx.globalAlpha = opacity
        ctx.strokeStyle = color
     
        //starting path of the arrow from the start square to the end square
        //and drawing the stroke
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(endCoord.x, endCoord.y)
        ctx.lineWidth = w
        ctx.stroke()
     
        //starting a new path from the head of the arrow to one of the sides of
        //the point
        ctx.beginPath()
        ctx.moveTo(endCoord.x, endCoord.y)
        ctx.lineTo(endCoord.x-headlen*Math.cos(angle-Math.PI/7),
        endCoord.y-headlen*Math.sin(angle-Math.PI/7))
     
        //path from the side point of the arrow, to the other side point
        ctx.lineTo(endCoord.x-headlen*Math.cos(angle+Math.PI/7),
        endCoord.y-headlen*Math.sin(angle+Math.PI/7))
     
        //path from the side point back to the tip of the arrow, and then
        //again to the opposite side point
        ctx.lineTo(endCoord.x, endCoord.y)
        ctx.lineTo(endCoord.x-headlen*Math.cos(angle-Math.PI/7),
        endCoord.y-headlen*Math.sin(angle-Math.PI/7))
     
        //draws the paths created above
        ctx.setLineDash([])
        ctx.stroke()
        ctx.restore()
    }

    function gradient(a, b) {
        return (b[1]-a[1])/(b[0]-a[0]);
}

    function drawGraph() {
        ctx.globalAlpha = opacity
        ctx.strokeStyle = color
        ctx.fillStyle = color
        ctx.font = "14px Georgia"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(x + (w/2), y)
        ctx.lineTo(x + (w/2), y+h)
        ctx.moveTo(x, y + (h/2))
        ctx.lineTo(x+w, y + (h/2))
        
        let xAxisCopy = [...xAxis]
        let stepsXBefore0 = xAxisCopy.slice(0, xAxis.indexOf(0))
        let stepDistXB = (w/2)/(stepsXBefore0.length)
        let stepsXAfter0 = xAxisCopy.slice(xAxis.indexOf(0))
        let stepDistXA = (w/2)/(stepsXAfter0.length)

        for(let i = 0; i < stepsXBefore0.length; i++) {
            ctx.moveTo(x+(stepDistXB*i), y+(h/2)-5)
            ctx.lineTo(x+(stepDistXB*i), y+(h/2)+5)
            ctx.fillText(stepsXBefore0[i], x+(stepDistXB*i)-(ctx.measureText(stepsXBefore0[i]).width/2), y+(h/2)+20)
        }

        for(let i = 0; i < stepsXAfter0.length; i++) {
            ctx.moveTo(x+(stepDistXA*i)+(w/2), y+(h/2)-5)
            ctx.lineTo(x+(stepDistXA*i)+(w/2), y+(h/2)+5)
            ctx.fillText(stepsXAfter0[i], x+(w/2)+(stepDistXA*i)-(ctx.measureText(stepsXAfter0[i]).width/2), y+(h/2)+20)
        }

        let yAxisCopy = [...yAxis]
        let stepsYBefore0 = yAxisCopy.slice(0, yAxis.indexOf(0))
        let stepDistYB = (h/2)/(stepsYBefore0.length)
        let stepsYAfter0 = yAxisCopy.slice(yAxis.indexOf(0))
        let stepDistYA = (h/2)/(stepsYAfter0.length)

        stepsYBefore0 = stepsYBefore0.reverse()
        for(let i = 0; i < stepsYBefore0.length; i++) {
            ctx.moveTo(x+(w/2)-5, y+(stepDistYB*(i+1))+(h/2))
            ctx.lineTo(x+(w/2)+5, y+(stepDistYB*(i+1))+(h/2))
            ctx.fillText(stepsYBefore0[i], x+(w/2)+20,y+(stepDistYB*(i+1))+(h/2)+6)
        }

        stepsYAfter0 = stepsYAfter0.reverse()
        for(let i = 0; i < stepsYAfter0.length; i++) {
            ctx.moveTo(x+(w/2)-5, y+(stepDistYA*(i+1)))
            ctx.lineTo(x+(w/2)+5, y+(stepDistYA*(i+1)))
            ctx.fillText(stepsYAfter0[i], x+(w/2)+20,y+(stepDistYA*(i+1))+6)
        }

        ctx.stroke()

        const f = 0.3
        const t = 0.6
        
        ctx.lineWidth = 2
        ctx.beginPath()
      
        var m = 0;
        var dx1 = 0;
        var dy1 = 0;
  
        var preP = points[0];

        stepDistXA = (w/2)/(stepsXAfter0[stepsXAfter0.length - 1])
        stepDistXB = (w/2)/(-stepsXBefore0[0])
        stepDistYA = (h/2)/(stepsYAfter0[0])
        stepDistYB = (h/2)/(-stepsYBefore0[stepsYBefore0.length - 1])
        
        // let xPointi = points[0][0] > 0 ? (curP[0] * stepDistXA) : (curP[0] * stepDistXB)
        // let yPointi = curP[1] > 0 ? (curP[1] * stepDistYA) : (curP[1] * stepDistYB)
        // ctx.moveTo((x+w/2) + points[0][0], (y+h/2) - points[0][1])

        for (var i = 1; i < points.length; i++) {
            if(i == 1) ctx.strokeStyle = 'red'
            var curP = points[i];
            let xPointPre = preP[0] > 0 ? (preP[0] * stepDistXA) : (preP[0] * stepDistXB)
            let xPoint = curP[0] > 0 ? (curP[0] * stepDistXA) : (curP[0] * stepDistXB)
            let yPointPre = preP[1] > 0 ? (preP[1] * stepDistYA) : (preP[1] * stepDistYB)
            let yPoint = curP[1] > 0 ? (curP[1] * stepDistYA) : (curP[1] * stepDistYB)

            nexP = points[i + 1]

            if (nexP) {
                let xPointNext = nexP[0] > 0 ? (nexP[0] * stepDistXA) : (nexP[0] * stepDistXB)
                m = gradient(preP, nexP);
                dx2 = (((x+w/2) + xPointNext) - ((x+w/2) + xPoint)) * -f;
                dy2 = dx2 * m * t;
            } else {
                dx2 = 0;
                dy2 = 0;
            }
            
            
            ctx.bezierCurveTo(
                ((x+w/2) + xPointPre) - dx1, ((y+h/2) - yPointPre) - dy1,
                ((x+w/2) + xPoint)  + dx2, ((y+h/2) - yPoint) + dy2,
                ((x+w/2) + xPoint), ((y+h/2) - yPoint)
            );
          
            dx1 = dx2;
            dy1 = dy2;
            preP = curP;
            if(i == 1) ctx.strokeStyle = 'white'
        }

        ctx.stroke()
        ctx.globalAlpha = 1
        ctx.fillStyle = 'black'
    }

    function drawText() {
        if(rotation) {
            ctx.save()
            let m = ctx.measureText(text)
            let rad = rotation * Math.PI / 180
            ctx.translate(x+(m.width/2), y-size/2)
            ctx.rotate(rad)
            ctx.translate(-(x+(m.width/2)), -(y-size/2))
        }
        ctx.globalAlpha = opacity
        ctx.fillStyle = color
        ctx.font = size + 'px ' + font
        ctx.fillText(text, x, y)
        ctx.fillStyle = 'black'
        ctx.globalAlpha = 1
    }

    function drawLatexText() {
        if(rotation) {
            ctx.save()
            let m = ctx.measureText(text)
            let rad = rotation * Math.PI / 180
            ctx.translate(x+(m.width/2), y-size/2)
            ctx.rotate(rad)
            ctx.translate(-(x+(m.width/2)), -(y-size/2))
        }
        
        ctx.globalAlpha = opacity
        if(typeof text === 'object') {
            ctx.drawImage(text, x, y, (w*(size/h)), size)
        }
        ctx.globalAlpha = 1
    }

    ctx.restore()
}

function createRect(params) {
    var {
        w, h, x, y, radius, outlineOnly, outlineType, color, opacity, rotation
    } = params

    radius ??= 0
    opacity ??= 1
    outlineOnly ??= false
    rotation ??= 0

    objects.push({
        type: 'rect',
        w,
        h,
        x,
        y,
        radius,
        outlineOnly,
        outlineType,
        color,
        opacity,
        rotation
    })

    const idx = objects.length - 1

    return {
        getIndex: () => idx,
        remove: () => remove(idx),
        getProperties: () => getProperties(idx),
        changeProperties: (props) => changeProperties(idx, props),
        transformToCircle: rate => transformRectToCircle(idx, rate),
        moveTo: (x, y, steps) => moveTo(idx, x, y, steps),
        moveWithFunction: (func, range, stepIncrement) => moveWithFunction(idx, func, range, stepIncrement),
        fadeIn: () => fadeIn(idx),
        fadeOut: () => fadeOut(idx),
        changeColor: (color) => changeColor(idx, color),
        scale: (factor, steps) => scale(idx, factor, steps),
        scaleX: (factor, steps) => scaleX(idx, factor, steps),
        scaleY: (factor, steps) => scaleY(idx, factor, steps),
        rotate: (angle, steps) => rotate(idx, angle, steps)
    }
}

function createCircle(params) {
    var {
        x, y, radius, outlineOnly, outlineType, color, opacity, rotation
    } = params

    opacity ??= 1
    rotation ??= 0

    objects.push({
        type: 'circle',
        x,
        y,
        radius,
        outlineOnly,
        outlineType,
        color,
        opacity,
        rotation
    })

    const idx = objects.length - 1

    return {
        getIndex: () => idx,
        remove: () => remove(idx),
        getProperties: () => getProperties(idx),
        changeProperties: (props) => changeProperties(idx, props),
        moveTo: (x, y, steps) => moveTo(idx, x, y, steps),
        moveWithFunction: (func, range, stepIncrement) => moveWithFunction(idx, func, range, stepIncrement),
        fadeIn: () => fadeIn(idx),
        fadeOut: () => fadeOut(idx),
        changeColor: (color) => changeColor(idx, color),
        scale: (factor) => scale(idx, factor),
        rotate: (angle, steps) => rotate(idx, angle, steps)
    }
}

function createArc(params) {
    var {
        x, y, radius, angles, outlineOnly, outlineType, color, opacity, rotation
    } = params

    opacity ??= 1
    rotation ??= 0
    color ??= COLORS.WHITE
    outlineOnly ??= true

    objects.push({
        type: 'arc',
        x,
        y,
        radius,
        angles,
        outlineOnly,
        outlineType,
        color,
        opacity,
        rotation
    })

    const idx = objects.length - 1

    return {
        getIndex: () => idx,
        remove: () => remove(idx),
        getProperties: () => getProperties(idx),
        changeProperties: (props) => changeProperties(idx, props),
        moveTo: (x, y, steps) => moveTo(idx, x, y, steps),
        moveWithFunction: (func, range, stepIncrement) => moveWithFunction(idx, func, range, stepIncrement),
        fadeIn: () => fadeIn(idx),
        fadeOut: () => fadeOut(idx),
        changeColor: (color) => changeColor(idx, color),
        scale: (factor) => scale(idx, factor),
        rotate: (angle, steps) => rotate(idx, angle, steps)
    }
}

function createCurve(params) {
    var {
        x, y, endCoord, type, controlPoints, outlineOnly, outlineType, color, opacity, rotation
    } = params

    opacity ??= 1
    rotation ??= 0
    color ??= COLORS.WHITE
    outlineOnly ??= true

    objects.push({
        type: 'curve',
        x,
        y,
        endCoord,
        curveType: type,
        controlPoints,
        outlineOnly,
        outlineType,
        color,
        opacity,
        rotation
    })

    const idx = objects.length - 1

    return {
        getIndex: () => idx,
        remove: () => remove(idx),
        getProperties: () => getProperties(idx),
        changeProperties: (props) => changeProperties(idx, props),
        moveTo: (x, y, steps) => moveTo(idx, x, y, steps),
        moveWithFunction: (func, range, stepIncrement) => moveWithFunction(idx, func, range, stepIncrement),
        fadeIn: () => fadeIn(idx),
        fadeOut: () => fadeOut(idx),
        changeColor: (color) => changeColor(idx, color),
        scale: (factor) => scale(idx, factor),
        rotate: (angle, steps) => rotate(idx, angle, steps)
    }
}

function createArrow(params) {
    var {
        x, y, w, endCoord, color, opacity, rotation, arrowType
    } = params

    w ??= 3
    opacity ??= 1
    rotation ??= 0
    color ??= COLORS.WHITE
    let parr = calcStraightLine({x, y}, endCoord)
    objects.push({
        type: 'arrow',
        w,
        x, 
        y,
        endCoord: {x: parr[0][1], y: parr[0][0]},
        color,
        arrowType,
        opacity,
        rotation,
        animation: ['drawArrow'],
        animationStepsArray: parr,
        animationStep: 0
    })

    const idx = objects.length - 1

    return {
        getIndex: () => idx,
        remove: () => remove(idx),
        getProperties: () => getProperties(idx),
        changeProperties: (props) => changeProperties(idx, props),
        moveTo: (x, y, steps) => moveTo(idx, x, y, steps),
        moveWithFunction: (func, range, stepIncrement) => moveWithFunction(idx, func, range, stepIncrement),
        fadeIn: () => fadeIn(idx),
        fadeOut: () => fadeOut(idx),
        changeColor: (color) => changeColor(idx, color),
        scale: (factor) => scale(idx, factor),
        rotate: (angle, steps) => rotate(idx, angle, steps)
    }
}

function createGraph(params) {
    var {
        x, y, w, h, points, xAxis, yAxis, xAxisStep, yAxisStep, color, opacity
    } = params

    opacity ??= 1
    color ??= COLORS.WHITE
    w ??= 100
    h ??= 100
    x ??= 0
    y ??= 0

    // let p = []
    // points.forEach(el => {
    //     if(el[0] >= xAxis[xAxis.length - 1] || el[0] <= xAxis[0]) {
    //         return
    //     }
    //     if(el[1] >= yAxis[yAxis.length - 1] || el[1] <= yAxis[0]) {
    //         return
    //     }
    //     p.push(el)
    // })

    let xRange = {min: 0, max: 0}
    let yRange = {min: 0, max: 0}
    points.forEach(el => {
        if(el[0] > xRange.max) xRange.max = Math.round(el[0])
        if(el[0] < xRange.min) xRange.min = Math.round(el[0])
        if(el[1] > yRange.max) yRange.max = Math.round(el[1])
        if(el[1] < yRange.min) yRange.min = Math.round(el[1])
    })
    

    xAxis ??= createAxis([xRange.min, xRange.max], xAxisStep)
    yAxis ??= createAxis([yRange.min, yRange.max], yAxisStep)

    objects.push({
        type: 'graph',
        w, 
        h,
        x,
        y,
        color,
        opacity,
        xAxis,
        yAxis,
        xAxisStep,
        yAxisStep,
        points: [],
        animation: ['drawGraph'],
        animationStepsArray: points,
        animationStep: 0
    })

    const idx = objects.length - 1

    return {
        getIndex: () => idx,
        remove: () => remove(idx),
        getProperties: () => getProperties(idx),
        changeProperties: (props) => changeProperties(idx, props),
        moveTo: (x, y, steps) => moveTo(idx, x, y, steps),
        fadeIn: () => fadeIn(idx),
        fadeOut: () => fadeOut(idx),
        changeColor: (color) => changeColor(idx, color),
        scale: (factor) => scale(idx, factor)
    }
}

function addText(params) {
    var {
        x, y, text, font, size, color, opacity, rotation, placement
    } = params

    font ??= "Georgia"
    size ??= 30
    color ??= "white"
    opacity ??= 1
    rotation ??= 0

    if(placement) {
        if(placement === 'center') {
            ctx.font = size + 'px ' + font
            x = (canvas.width/2) - (ctx.measureText(text).width/2) 
        }
    }

    objects.push({
        type: 'text',
        x,
        y,
        color,
        font,
        size,
        text,
        opacity,
        rotation
    })

    const idx = objects.length - 1

    return {
        getIndex: () => idx,
        remove: () => remove(idx),
        getProperties: () => getProperties(idx),
        changeProperties: (props) => changeProperties(idx, props),
        moveTo: (x, y, steps) => moveTo(idx, x, y, steps),
        moveWithFunction: (func, range, stepIncrement) => moveWithFunction(idx, func, range, stepIncrement),
        fadeIn: () => fadeIn(idx),
        fadeOut: () => fadeOut(idx),
        changeColor: (color) => changeColor(idx, color),
        scale: (factor, steps) => scale(idx, factor, steps),
        rotate: (angle, steps) => rotate(idx, angle, steps)
    }
}

function addLatexText(params) {
    var {
        x, y, text, size, color, opacity, rotation
    } = params

    size ??= 30
    color ??= COLORS.WHITE
    opacity ??= 1
    rotation ??= 0

    
    objects.push({
        type: 'latex',
        x,
        y,
        color,
        size,
        text,
        opacity,
        rotation
    })

    const idx = objects.length - 1
    MathJax.texReset();
    MathJax.tex2svgPromise(text).then((node) => {
        let svg = node.firstElementChild
        svg.style.color = color
        let img = document.createElement('img');
        img.onload = (e) => {
            objects[idx].w = e.target.naturalWidth
            objects[idx].h = e.target.naturalHeight
            objects[idx].text = e.target
            objects[idx].img = svg
        }

        img.src = 'data:image/svg+xml;base64,' + btoa('<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n' + svg.outerHTML);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
    })

    return {
        getIndex: () => idx,
        remove: () => remove(idx),
        getProperties: () => getProperties(idx),
        changeProperties: (props) => changeProperties(idx, props),
        moveTo: (x, y, steps) => moveTo(idx, x, y, steps),
        moveWithFunction: (func, range, stepIncrement) => moveWithFunction(idx, func, range, stepIncrement),
        fadeIn: () => fadeIn(idx),
        fadeOut: () => fadeOut(idx),
        changeColor: (color) => changeColor(idx, color),
        scale: (factor, steps) => scale(idx, factor, steps),
        rotate: (angle, steps) => rotate(idx, angle, steps)
    }
}


//object functions
function changeProperties(idx, props) {
    objects[idx] = {
        ...objects[idx],
        ...props
    }
}

function getProperties(idx) {
    return objects[idx]
}

function remove(idx) {
    objects[idx].type = 'removed'
}

//basic animations
function transformRectToCircle(idx, rate) {
    objects[idx].transformRate = rate
    objects[idx].transformTo = 'circle'
}

function moveTo(idx, x, y, steps) {
    steps ??= 50
    objects[idx].movementSteps = steps
    objects[idx].changeInX = x - objects[idx].x
    objects[idx].changeInY = y - objects[idx].y
    objects[idx].beginningValue = {
        x: objects[idx].x,
        y: objects[idx].y
    }
    objects[idx].movementTime = 0
}

function fadeIn(idx) {
    objects[idx].fadeRate =  (1 - objects[idx].opacity) / 20
    objects[idx].animation ? objects[idx].animation.push('fadein') : objects[idx].animation = ['fadein']
}

function fadeOut(idx) {
    objects[idx].fadeRate =  (objects[idx].opacity - 0) / 20
    objects[idx].animation ? objects[idx].animation.push('fadeout') : objects[idx].animation = ['fadeout']
}

function changeColor(idx, color) {
    let colorStops = []
    for(let i = 0; i < 20; i++) {
        let c = interpolate(objects[idx].color, color, i/20)
        colorStops.push(r2h(c[0], c[1], c[2]))
    }
    objects[idx].colorStops = colorStops
    objects[idx].targetColor = color
    objects[idx].animation ? objects[idx].animation.push('colorChange') : objects[idx].animation = ['colorChange']
}

function scale(idx, factor, steps) {
    steps ??= 50
    objects[idx].scaleFactor = factor
    objects[idx].scaleSteps = steps
    objects[idx].currentScale = 1
    objects[idx].prevSize = objects[idx].size ? objects[idx].size : objects[idx].radius ? objects[idx].radius : {w: objects[idx].w, h: objects[idx].h}
    objects[idx].animation ? objects[idx].animation.push('scale') : objects[idx].animation = ['scale']
}

function scaleX(idx, factor, steps) {
    steps ??= 50
    objects[idx].scaleXFactor = factor
    objects[idx].scaleXSteps = steps
    objects[idx].currentXScale = 1
    objects[idx].prevSizeX = objects[idx].w
    objects[idx].animation ? objects[idx].animation.push('scaleX') : objects[idx].animation = ['scaleX']
}

function scaleY(idx, factor, steps) {
    steps ??= 50
    objects[idx].scaleYFactor = factor
    objects[idx].scaleYSteps = steps
    objects[idx].currentYScale = 1
    objects[idx].prevSizeY = objects[idx].h
    objects[idx].animation ? objects[idx].animation.push('scaleY') : objects[idx].animation = ['scaleY']
}


function rotate(idx, angle, steps) {
    steps ??= 50
    objects[idx].rotationAngle = angle
    objects[idx].rotationSteps = steps
    objects[idx].currRotationStep = 0
    objects[idx].rotationStart = objects[idx].rotation
    objects[idx].animation ? objects[idx].animation.push('rotate') : objects[idx].animation = ['rotate']
}

function moveWithFunction(idx, fn, range, stepIncrement) {
    stepIncrement ??= 0.2
    range ??= [0, 1]

    objects[idx].animationFunction = fn
    objects[idx].animationFnRange = range
    objects[idx].animationStep = range[0]
    objects[idx].animationIncrement = stepIncrement
    objects[idx].animation ? objects[idx].animation.push('function') : objects[idx].animation = ['function']
}

//preset animation

async function indicate(elem) {
    let prevColor = objects[elem.getIndex()].color
    elem.scale(6/5)
    await delay(500)
    elem.changeColor(COLORS.YELLOW.C)
    await delay(300)
    elem.scale(5/6)
    await delay(500)
    elem.changeColor(prevColor)
}

async function wiggle(elem) {
    elem.scale(7/6)
    elem.rotate(2, 20)
    await delay(200)
    elem.rotate(-4, 20)
    await delay(200)
    elem.rotate(4, 10)
    await delay(200)
    elem.rotate(-4, 10)
    await delay(200)
    elem.rotate(1, 20)
    elem.scale(6/7)
}

function fadeOutAll() {
    for (let i = 0; i < objects.length; i++) {
        fadeOut(i)
    }
}