const BG_CANVAS = 'bgCanvas'
export default function doBg () {
  try {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      console.warn('移动端不支持')
    } else {
      let canvas = document.getElementById(BG_CANVAS)
      if (!canvas) {
        canvas = document.createElement('canvas')
        canvas.setAttribute('id', BG_CANVAS)
        canvas.innerText = ''
        document.body.appendChild(canvas)
        canvas.style.position = 'fixed'
        canvas.style.zIndex = '-3'
      }
      const ctx = canvas.getContext('2d')
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      ctx.lineWidth = 0.3
      ctx.strokeStyle = (new Color(150)).style

      var mousePosition = {
        x: 85 * canvas.width / 100,
        y: 80 * canvas.height / 100
      }

      var dots = {
        nb: 250,
        distance: 100,
        d_radius: 150,
        array: []
      }

      document.addEventListener('mousemove', function (e) {
        // console.log(e)
        mousePosition.x = e.pageX
        mousePosition.y = e.pageY
        window.requestAnimationFrame(animateDots)
      })

      document.addEventListener('mouseleave', function () {
        mousePosition.x = canvas.width / 2
        mousePosition.y = canvas.height / 2
      })

      const animateDots = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        moveDots(dots, canvas)
        connectDots(dots, mousePosition, ctx)
        drawDots(dots)
        // window.requestAnimationFrame(animateDots)
      }

      createDots(dots, canvas, ctx)
      window.requestAnimationFrame(animateDots)
    }
  } catch (e) {
    console.error(e)
  }
}

// function setStyle (dom, style) {

// }

function colorValue (min) {
  return Math.floor(Math.random() * 255 + min)
}

function createColorStyle (r, g, b) {
  return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)'
}

function mixComponents (comp1, weight1, comp2, weight2) {
  return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2)
}

function averageColorStyles (dot1, dot2) {
  var color1 = dot1.color
  var color2 = dot2.color

  var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius)
  var g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius)
  var b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius)
  return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b))
}

function Color (min) {
  min = min || 0
  this.r = colorValue(min)
  this.g = colorValue(min)
  this.b = colorValue(min)
  this.style = createColorStyle(this.r, this.g, this.b)
}

function Dot (canvas, ctx) {
  this.x = Math.random() * canvas.width
  this.y = Math.random() * canvas.height

  this.vx = -0.5 + Math.random()
  this.vy = -0.5 + Math.random()

  this.radius = Math.random() * 2

  this.color = new Color()
  this.ctx = ctx
}

Dot.prototype = {
  draw: function () {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.fillStyle = this.color.style
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    ctx.fill()
  }
}

function createDots (dots, canvas, ctx) {
  for (let i = 0; i < dots.nb; i++) {
    dots.array.push(new Dot(canvas, ctx))
  }
}

function moveDots (dots, canvas) {
  for (let i = 0; i < dots.nb; i++) {
    var dot = dots.array[i]

    if (dot.y < 0 || dot.y > canvas.height) {
      // dot.vx = dot.vx
      dot.vy = -dot.vy
    } else if (dot.x < 0 || dot.x > canvas.width) {
      dot.vx = -dot.vx
      // dot.vy = dot.vy
    }
    dot.x += dot.vx
    dot.y += dot.vy
  }
}

function connectDots (dots, mousePosition, ctx) {
  for (let i = 0; i < dots.nb; i++) {
    for (let j = 0; j < dots.nb; j++) {
      const iDot = dots.array[i]
      const jDot = dots.array[j]

      if ((iDot.x - jDot.x) < dots.distance && (iDot.y - jDot.y) < dots.distance && (iDot.x - jDot.x) > -dots.distance && (iDot.y - jDot.y) > -dots.distance) {
        if ((iDot.x - mousePosition.x) < dots.d_radius && (iDot.y - mousePosition.y) < dots.d_radius && (iDot.x - mousePosition.x) > -dots.d_radius && (iDot.y - mousePosition.y) > -dots.d_radius) {
          ctx.beginPath()
          ctx.strokeStyle = averageColorStyles(iDot, jDot)
          ctx.moveTo(iDot.x, iDot.y)
          ctx.lineTo(jDot.x, jDot.y)
          ctx.stroke()
          ctx.closePath()
        }
      }
    }
  }
}

function drawDots (dots) {
  for (let i = 0; i < dots.nb; i++) {
    var dot = dots.array[i]
    dot.draw()
  }
}

doBg()
