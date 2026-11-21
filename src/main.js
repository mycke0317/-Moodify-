
import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="container">
    <h1>Moodify 🎧</h1>
    <p class="subtitle">YOUR MOOD, YOUR MUSIC</p>

    <h2>오늘 기분은 어때?</h2>

    <div class="moods">
      <button data-mood="행복해">😊 행복해</button>
      <button data-mood="슬퍼">😢 슬퍼</button>
      <button data-mood="피곤해">😴 피곤해</button>
      <button data-mood="신나">😎 신나</button>
    </div>

    <p id="result">기분을 선택해 줘!</p>
  </main>
`

document.querySelectorAll('[data-mood]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#result').textContent =
      `지금 기분은 "${button.dataset.mood}"! 음악을 추천할 준비가 됐어 🎵`
  })
})
