/**
 * @param selector - selector
 */
export function waitForElement(selector: string) {
  return new Promise(resolve => {
    if (document.querySelectorAll(selector).length) {
      resolve(document.querySelectorAll(selector))
    }
    const observer = new MutationObserver(() => {
      if (document.querySelectorAll(selector).length) {
        resolve(document.querySelectorAll(selector))
        observer.disconnect()
      }
    })
    try {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })
    } catch (err) {
      console.log(err)
      setTimeout(() => {
        resolve(waitForElement(selector))
      }, 100)
    }
  })
}
