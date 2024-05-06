const calculateSection = document.getElementById('calculate-section')

const windowScroll = document.getElementById('window-scroll')
const viewportScroll = document.getElementById('viewport-scroll')

function handleWindowScroll(e) {
  windowScroll.innerText = window.scrollY
}

function handleViewportScroll(e) {
  viewportScroll.innerText = e.target.offsetTop
}

window.addEventListener('scroll', handleWindowScroll)
visualViewport.addEventListener('scroll', handleViewportScroll)

const bodyHeight = document.getElementById('body-height')
const windowHeight = document.getElementById('window-height')
const viewportHeight = document.getElementById('viewport-height')

function handleViewportResize() {
  bodyHeight.innerText = document.body.offsetHeight
  windowHeight.innerText = window.innerHeight
  viewportHeight.innerText = visualViewport.height
}

visualViewport.addEventListener('resize', handleViewportResize)
