class VM {
  constructor (option) {
    this.data = option.data || {}
    this.el = document.querySelector(option.el)

    // 数据劫持，数据更新时发布消息，调度中心通知观察者更新
    observe(this.data)

    // 模板编译并添加依赖
    compile(this.el, this.data)
  }
}

function observe (obj) {
  Object.keys(obj).forEach(key => {
    var dep = new Dep(key)
    var val = obj[key]

    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: false,
      get() {
        Dep.target && dep.add(Dep.target)
        return val
      },
      set (value) {
        val = value
        dep.notify(value)
      }
    })
  })
}

function compile (el, data) {
  [].forEach.call(el.childNodes, child => {
    if (!child.firstElementChild && /\{\{(.*)\}\}/.test(child.innerHTML)) {
      let key = RegExp.$1.trim()

      Dep.target = new Watcher((value) => {
        replace(child, key, value)
      })
      child.raw = child.innerHTML
      child.innerHTML = child.raw.replace(new RegExp('\\{\\{\\s*' + key + '\\s*\\}\\}', 'g'), data[key])
      Dep.target = null
    } else if (child.firstElementChild) {
      this.compile(child)
    }

    if (child.nodeType === 1 && child.hasAttribute('v-model')) {
      console.log(child)
      let key = child.getAttribute('v-model')
      console.log(key)

      Dep.target = new Watcher((value) => {
        child.value = value
      })
      child.value = data[key]
      Dep.target = null

      child.addEventListener('input', e => {
        data[key] = e.target.value
        console.log(data)
      })
    }
  })
}

class Dep {
  constructor (key) {
    this.key = key
    this.subs = []
  }

  add(node) {
    this.subs.push(node)
  }

  notify (newVal) {
    this.subs.forEach(watcher => {
      watcher.update(newVal)
    })
  }
}

class Watcher {
  constructor (f) {
    this.f = f
  }

  update (val) {
    this.f(val)
  }
}

function replace (node, key, value) {
  node.innerHTML =
    node.raw.replace(
      new RegExp('\\{\\{\\s*' + key + '\\s*\\}\\}', 'g'),
      value)

  new Watcher()
}
