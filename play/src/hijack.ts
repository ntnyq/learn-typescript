export function hijackViaDefineProperty() {
  const map: Record<string, any> = {}
  let initialValue = `foo`

  Object.defineProperty(map, `key`, {
    // enumerable: false, // enum
    // writable: true,
    // configurable: false, // redefinable or deletable
    // value: initialValue,
    get() {
      console.log(`getter is called`)
      return initialValue
    },

    set(v) {
      console.log(`setter is called`)
      initialValue = v
    },
  })

  console.log(map.key)
  map.key = `bar`
  console.log(map.key)
}

export function hijackViaProxy() {
  const state = {
    user: {
      name: `ntnyq`,
      age: 30,
    },
    list: [`eat`, `sleep`],
  }

  const handler1: ProxyHandler<typeof state.user> = {
    get(target, key) {
      if (target[key] > 25) {
        console.log(`Your age is greater than 25`)
        return 1
      } else {
        console.log(`Your age is less than 25`)
        return 2
      }
    },
  }

  const handler2: ProxyHandler<typeof state.list> = {
    get(target, key) {
      return target[key]
    },
  }

  const p1 = new Proxy(state.user, handler1)
  const v1 = p1.age
  console.log(v1)

  const p2 = new Proxy(state.list, handler2)
  const v2 = p2[0]
  console.log(v2)
}
