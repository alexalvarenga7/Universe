import scalesData from "./data/scalesData";
import useActiveScale from "./hooks/useActiveScale";
import { formatEscala, compararConAnterior } from "./utils/escalaUtils";
import "./App.css";

function App() {
  const { activeIndex, sectionRefs, scrollToIndex, goNext, goPrev } =
    useActiveScale(scalesData);

  return (
    <div className="app">
      {/* Header con logo y navegación */}
      <header className="app-header">
        <div className="logo">
          <span className="logo-icon">🌌</span>
          <span className="logo-text">COSMOS</span>
        </div>
        <nav className="header-nav">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); scrollToIndex(0); }}>Inicio</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>About</a>
        </nav>
      </header>

      {/* Indicador de progreso (dots) */}
      <nav className="scale-indicator" aria-label="Navegación por escalas">
        {scalesData.map((scale, index) => (
          <button
            key={scale.id}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Ir a ${scale.nombre}`}
            title={scale.nombre}
          />
        ))}
      </nav>

      {/* Contador de progreso */}
      <div className="progress-counter">
        <span>{activeIndex + 1}</span>
        <span className="separator">/</span>
        <span>{scalesData.length}</span>
      </div>

      {/* Secciones scrollables, una por escala */}
      <main className="scales-container">
        {scalesData.map((scale, index) => {
          const escalaAnterior = index > 0 ? scalesData[index - 1].escalaKm : null;
          const comparacion = compararConAnterior(scale.escalaKm, escalaAnterior);

          return (
            <section
              key={scale.id}
              id={index === 0 ? "inicio" : ""}
              ref={(el) => (sectionRefs.current[index] = el)}
              data-index={index}
              className="scale-section"
              style={{ backgroundImage: `url(${scale.imagen})` }}
            >
              <div className="scale-overlay"></div>
              <div className="scale-content">
                <span className="scale-categoria">{scale.categoria}</span>
                <h1>{scale.nombre}</h1>
                <p className="scale-distancia">{scale.distanciaDesdeAnterior}</p>

                {/* Tamaño formateado */}
                <div className="scale-info-card">
                  <div className="info-item">
                    <span className="info-icon">📐</span>
                    <div>
                      <span className="info-label">Escala</span>
                      <strong className="info-value">{formatEscala(scale.escalaKm)}</strong>
                    </div>
                  </div>
                  
                  {/* Comparación con la escala anterior (si existe) */}
                  {comparacion && (
                    <div className="info-item comparison">
                      <span className="info-icon">📊</span>
                      <div>
                        <span className="info-label">Comparación</span>
                        <span className="comparison-text">{comparacion} mayor</span>
                      </div>
                    </div>
                  )}
                </div>

                <p className="scale-descripcion">{scale.descripcion}</p>
                
                <div className="dato-curioso">
                  <span className="curiosity-icon">💡</span>
                  <p className="scale-dato">{scale.datoCurioso}</p>
                </div>
              </div>
              
              {/* Indicador de scroll */}
              {index === 0 && (
                <div className="scroll-indicator">
                  <span>Explora</span>
                  <div className="scroll-arrow">↓</div>
                </div>
              )}
            </section>
          );
        })}
      </main>

      {/* Botones de navegación fijos */}
      <div className="nav-buttons">
        <button 
          onClick={goPrev} 
          disabled={activeIndex === 0}
          className="nav-btn prev"
          aria-label="Sección anterior"
        >
          <span className="btn-icon">↑</span>
          <span className="btn-text">Anterior</span>
        </button>
        <button
          onClick={goNext}
          disabled={activeIndex === scalesData.length - 1}
          className="nav-btn next"
          aria-label="Siguiente sección"
        >
          <span className="btn-text">Siguiente</span>
          <span className="btn-icon">↓</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <p>© 2024 Cosmos - Explorando el Universo</p>
      </footer>
    </div>
  );
}

export default App;