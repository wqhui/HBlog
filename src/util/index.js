// 工具类

function getDateTimeStamp (dateStr) {
  return Date.parse(dateStr)
}

function getDateDiff (dateStr) {
  const lastTime = getDateTimeStamp(dateStr) / 1000
  const timeNow = parseInt(new Date().getTime()) / 1000

  //   const date = new Date(lastTime * 1000)
  //   const Y = date.getFullYear()
  //   const M = date.getMonth() + 1
  //   const D = date.getDate()
  //   const H = date.getHours()
  //   const m = date.getMinutes()

  const difDate = timeNow - lastTime

  const difDay = parseInt(difDate / 86400)
  const difHour = parseInt(difDate / 3600)
  const difmin = parseInt(difDate / 60)

  let showTime

  if (difDay >= 11) {
    showTime = dateStr
  } else if (difDay > 0 && difDay < 11) {
    showTime = difDay + '天前'
  } else if (difDay <= 0 && difHour > 0) {
    showTime = difHour + '小时前'
  } else if (difHour <= 0 && difmin > 0) {
    showTime = difmin + '分钟前'
  } else {
    showTime = '刚刚发布'
  }

  return showTime
}

function debounce (fn, time = 0, immediate = false) {
  let t
  return function (args) {
    t && clearTimeout(t)
    if (immediate && !t) fn(args)
    t = setTimeout(() => {
      if (!immediate) fn(args)
    }, time)
  }
}

/**
 * 获取点，这里可以设置点的个数
 * @param {number} num 点个数
 * @param {Array} p1 点坐标
 * @param {Array} p2 点坐标
 * @param {Array} p3 点坐标
 */
function getBezierPoints (num = 20, p1 = [0, 0], p2 = [100, 0], p3 = [100, 60]) {
  const points = []
  for (let i = 0; i < num; i++) {
    points.push(secondBezier(i / num, p1, p2, p3))
  }

  points.push([...p3])

  return points
}

/**
 * 二阶贝塞尔
 * @param {number} t 当前百分比
 * @param {Array} p1 起点坐标 [t,top]
 * @param {Array} cp 控制点 [t,top]
 * @param {Array} p2 终点坐标 [t,top]
 */
function secondBezier (t, p1, cp, p2) {
  const [x1, y1] = p1
  const [cx, cy] = cp
  const [x2, y2] = p2
  const x = (1 - t) * (1 - t) * x1 + 2 * t * (1 - t) * cx + t * t * x2
  const y = (1 - t) * (1 - t) * y1 + 2 * t * (1 - t) * cy + t * t * y2
  return [x, y]
}

/**
 * 滚动函数
 * @param {*} dom 滚动对象
 * @param {*} targetTop 目标距离
 * @param {*} totleTime 预计需要时间 这个时间这是预计时间，真正的时间由目标距离决定
 * @param {*} interval 模拟滚动间隔
 */
function scrollToTop (dom, targetTop = 0, totleTime = 300, interval = 20) {
  if (!dom) return
  let top = dom.scrollTop // 当前滚动条位置
  const gapLength = top - targetTop + 10 // 需要滚动的总距离

  const speed = Math.floor(gapLength / totleTime) // 滚动的速度
  let num = speed * 0.5 + 3 // 速度越快，点越多，最多50个点，最少3个
  if (num > 50) {
    num = 50
  }
  num = Math.floor(num)
  // 滚动应该是由快到慢的，这里使用二阶贝塞尔函数获取点
  const startPoint = [0, top]
  const endPoint = [totleTime, targetTop]
  const controlPoint = [1 / 2 * totleTime, 0]
  const points = getBezierPoints(num, startPoint, controlPoint, endPoint)
  const doScroll = (item) => {
    const gap = top - item[1] // 滚动间隔由快到慢
    dom.scrollTop = top -= gap
    if (top <= 0) {
      dom.scrollTop = top = 0
    }
  }

  let count = 0
  const t = setInterval(() => {
    const point = points[count]
    if (!point) {
      clearInterval(t)
      return
    }
    window.requestAnimationFrame(() => {
      doScroll(point)
    })
    count++
  }, interval)
}

export { getDateDiff, debounce, scrollToTop }
