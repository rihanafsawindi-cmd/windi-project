import { useState } from 'react'
import foto1 from './assets/foto1.jpeg'
import foto2 from "./assets/foto2.jpeg";
import foto3 from "./assets/foto3.jpeg";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Windi Rihanafsa</h1>
          <p>
            Mahasiswa <code>Pendidikan Ilmu Komputer</code> di Universitas Pendidikan Indonesia
          </p>
        </div>
        <section>
        <button
          type="button"
          className="counter"
          onClick={() => alert("haloooo!")}
        >
          Klik untuk sapa 👋
        </button>
        <div className="foto-container">
        <img src={foto1} alt="Foto 1" />
        <img src={foto2} alt="Foto 2" />
        <img src={foto3} alt="Foto 3" />
</div>
      </section>

      <div className="ticks"></div>
      </section>

      {/* Bsgian Informasi & Kontak */}
      <section id="next-steps">
        <div id="docs">
          <h2>Tentang Saya</h2>
          <p>Latar belakang</p>
          <ul>
            <li>
              <span>🎓 Universitas Pendidikan Indonesia</span>
            </li>
            <li>
              <span>💻 Program Studi: Pendidikan Ilmu Komputer</span>
            </li>
            <li>
              <span>😍 Hobby: Memasak, mendengarkan musik, nonton film</span>
            </li>
          </ul>
        </div>

        {/* Kolom 2: Media Sosial & Kontak */ }
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Hubungi Saya</h2>
          <p>Mari terhubung melalui platform dibawah ini</p>
          <ul>
            <li>
              <a href="https://github.com/rihanafsawindi-cmd">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/windirhnfs?stkn=aGEwaTExZ3EyZTA3">
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:rihanafsawindi@gmail.com">
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
