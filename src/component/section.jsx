function Section() {
  return (
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
            <a href="https://www.instagram.com/windirhnfs">
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
  );
}

export default Section;