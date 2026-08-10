import scalesData from "./data/scalesData";
import useActiveScale from "./hooks/useActiveScale";
import { formatEscala, compararConAnterior } from "./utils/escalaUtils";
import "./App.css";

function App() {
  const { activeIndex, sectionRefs, scrollToIndex, goNext, goPrev } =
    useActiveScale(scalesData);

  return (




    <div className="app">
      {/* Indicador de progreso (dots) */}
      <nav className="scale-indicator">
        {scalesData.map((scale, index) => (
          <button
            key={scale.id}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Ir a ${scale.nombre}`}
          />
        ))}
      </nav>

      {/* Secciones scrollables, una por escala */}
      <main className="scales-container">
        {scalesData.map((scale, index) => {
          const escalaAnterior = index > 0 ? scalesData[index - 1].escalaKm : null;
          const comparacion = compararConAnterior(scale.escalaKm, escalaAnterior);

          return (
            <section
              key={scale.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className="scale-section"
              style={{ backgroundImage: `url(${scale.imagen})` }}
            >
              <div className="scale-content">
                <span className="scale-categoria">{scale.categoria}</span>
                <h1>{scale.nombre}</h1>
                <p className="scale-distancia">{scale.distanciaDesdeAnterior}</p>

                {/* Tamaño formateado */}
                <p className="scale-tamano">
                  Tamaño/distancia: <strong>{formatEscala(scale.escalaKm)}</strong>
                </p>

                {/* Comparación con la escala anterior (si existe) */}
                {comparacion && (
                  <p className="scale-comparacion">
                    📏 {comparacion} que la escala anterior
                  </p>
                )}

                <p className="scale-descripcion">{scale.descripcion}</p>
                <p className="scale-dato"> {scale.datoCurioso}</p>
              </div>
            </section>
          );
        })}
      </main>

      {/* Botones de navegación fijos */}
      <div className="nav-buttons">
        <button onClick={goPrev} disabled={activeIndex === 0}>
          ↑ Anterior
        </button>
        <button
          onClick={goNext}
          disabled={activeIndex === scalesData.length - 1}
        >
          Siguiente ↓
        </button>
      </div>
    </div>
  );
}

export default App;