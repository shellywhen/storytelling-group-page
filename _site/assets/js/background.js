let setFirework= 0
const container = document.querySelector('.firework-outer')

document.body.addEventListener('click', (event) => {
  createFirework(event)
})

function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}

const colorGen = new Color('#6d68f4').range("#f4c0e9", {
	space: "lch", // interpolation space
	outputSpace: "srgb"
});

const createFirework = (event) => {
    const xPos = event.pageX
    const yPos = event.pageY
    const color= colorGen(Math.random()).toString({format: 'hex'})
    for (let i = 1; i <= 60; i++) {
      const firework = document.createElement('div')
      firework.className = 'firework'
      firework.classList.add(`firework${i}`)
      firework.classList.add(`set${setFirework}`)
      firework.style.backgroundColor = color
      firework.style.left = xPos + 'px'
      firework.style.top = yPos + 'px'
      firework.style.borderRadius = 5 + 'px'
      container.appendChild(firework)
    }  

    const mark = setFirework
  
    setTimeout(() => {
      const oldFireworks = document.querySelectorAll(`.set${mark}`)
      oldFireworks.forEach(firework => {
        firework.remove()      
      });      
    }, 10000)
  
    setFirework += 1
  }

