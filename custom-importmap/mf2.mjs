/**
 * @param {HTMLElement} root
 */
export default function(root) {
  const display = document.createElement('h2')
  root.replaceChildren(display)

  const timer = setInterval(updateDisplay, 500)
  updateDisplay()

  console.log('MF2: started')

  return unload

  function updateDisplay() {
    display.innerText = `MF2: ${new Date().toLocaleString('pl')}`
  }

  function unload() {
    clearInterval(timer)
    root.removeChild(display)
    console.log('MF2: unloaded')
  }
}
