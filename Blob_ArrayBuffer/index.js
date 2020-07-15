let fileBox = document.getElementById('file-box')

function getFile(el) {
  // 获取文件对象
  let fileObj = el.files[0]

  if (/txt/.test(el.id)) {
    // 利用FileReader才能读取file对象中的数据
    let reader = new FileReader()
    reader.readAsText(fileObj, 'utf-8')
    reader.onload = function(e) {
      let p = document.createElement('span')
      p.innerText = e.currentTarget.result
      fileBox.appendChild(p)
    }
  } else if (/file-image|camera-image/.test(el.id)) {
    // 文件对象转换成浏览器内部URL对象
    let url = URL.createObjectURL(fileObj)
    let img = new Image()
    img.src = url
    img.height = 200
    img.onload = function() {fileBox.appendChild(img)}
  } else if (/camera-video/.test(el.id)) {
    console.log('dddddddddd')

    setTimeout(() => {
      let url = URL.createObjectURL(fileObj)
      let video = document.createElement('video')
      console.log(video)
      video.src = url
      video.controls = true
      alert(url)
      fileBox.appendChild(video)
    }, 2000)
  }
}
