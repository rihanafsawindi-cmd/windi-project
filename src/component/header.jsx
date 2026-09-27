import foto1 from "../assets/foto1.jpeg";
import foto2 from "../assets/foto2.jpeg";
import foto3 from "../assets/foto3.jpeg";

function Header() {
  return (
    <section id="center">
      <div>
        <h1>Windi Rihanafsa</h1>
        <p>
          Mahasiswa <code>Pendidikan Ilmu Komputer</code> di Universitas
          Pendidikan Indonesia
        </p>
      </div>

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

      <div className="ticks"></div>
    </section>
  );
}

export default Header;