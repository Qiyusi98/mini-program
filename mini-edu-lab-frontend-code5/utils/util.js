const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const requestPromise = myUrl => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: myUrl,
      headers: {
        'Content-Type': 'application/json'
      },
      success: res => resolve(res)
    })
  })
}

module.exports = {
  formatTime: formatTime,
  requestPromise:requestPromise
}
