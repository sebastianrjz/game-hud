import './adivina.css'

// Lógica del juego Adivina el número

// Crear la estructura HTML del juego dinámicamente
document.body.style.fontFamily = 'Arial, sans-serif'
document.body.style.margin = 0
document.body.style.padding = 0
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.height = '100vh'
document.body.style.backgroundColor = '#f4f4f9'

export const initMole = () => {
  // Limpiar el contenedor principal
  const divContent = document.querySelector('.content')
  divContent.innerHTML = '' // Limpiar cualquier contenido anterior

  const gameContainer = document.createElement('div')
  gameContainer.id = 'game-container' // Asignamos un id para el contenedor
  document.body.appendChild(gameContainer)

  // Título
  const title = document.createElement('h1')
  title.textContent = 'Adivina el Número'
  gameContainer.appendChild(title)

  // Instrucciones
  const instructions = document.createElement('p')
  instructions.textContent = '¡Adivina un número entre 1 y 100!'
  gameContainer.appendChild(instructions)

  // Caja de entrada para el número
  const guessInput = document.createElement('input')
  guessInput.type = 'number'
  guessInput.placeholder = 'Ingresa tu número'
  gameContainer.appendChild(guessInput)

  // Botón de comprobar
  const submitGuess = document.createElement('button')
  submitGuess.textContent = 'Comprobar'
  gameContainer.appendChild(submitGuess)

  // Pista y contador de intentos
  const hint = document.createElement('p')
  gameContainer.appendChild(hint)

  const attemptsText = document.createElement('p')
  gameContainer.appendChild(attemptsText)
  divContent.appendChild(gameContainer)

  // Número aleatorio
  const targetNumber = Math.floor(Math.random() * 100) + 1 // Número aleatorio entre 1 y 100
  let attempts = 0 // Contador de intentos

  // Función para manejar la comprobación de la adivinanza
  submitGuess.addEventListener('click', function () {
    const guess = parseInt(guessInput.value)

    // Validación de número ingresado
    if (isNaN(guess) || guess < 1 || guess > 100) {
      hint.textContent = 'Por favor, ingresa un número válido entre 1 y 100.'
      hint.style.color = '#d9534f'
      return
    }

    attempts++ // Incrementar el contador de intentos
    attemptsText.textContent = `Intentos: ${attempts}`

    // Verificar si el número adivinado es correcto
    if (guess === targetNumber) {
      // Si el número adivinado está entre 80 y 100
      if (guess >= 80 && guess <= 100) {
        hint.textContent = `¡Adivinaste el número ${targetNumber} en ${attempts} intentos!`
        hint.style.color = 'blue' // Mensaje en azul
      } else {
        hint.textContent = `¡Felicidades! Has adivinado el número ${targetNumber} en ${attempts} intentos.`
        hint.style.color = '#5bc0de' // Mensaje en verde
      }
      guessInput.disabled = true
      submitGuess.disabled = true
    } else if (guess < targetNumber) {
      hint.textContent = '¡El número es mayor!'
      hint.style.color = '#d9534f' // Mensaje en rojo
    } else {
      hint.textContent = '!ADIVINASTE!'
      hint.style.color = '#555' // Mensaje en rojo
    }

    // Limpiar el input después de cada intento
    guessInput.value = ''
    guessInput.focus() // Focar el input para que el usuario pueda seguir jugando
  })
}