/**
 * Formatea un número grande de km a una unidad legible
 * (km, miles de km, millones de km, años luz, etc.)
 */
export function formatEscala(km) {
    const ANIO_LUZ_KM = 9.461e12;

    if (km < 1000) {
        return `${km.toLocaleString("es-HN")} km`;
    }

    if (km < 1e9) {
        return `${km.toLocaleString("es-HN")} km`;
    }

    // A partir de cierto punto, tiene más sentido expresarlo en años luz
    const anioLuz = km / ANIO_LUZ_KM;

    if (anioLuz < 1) {
        // todavía en millones/miles de millones de km
        return `${km.toExponential(2)} km`;
    }

    if (anioLuz < 1000) {
        return `${anioLuz.toLocaleString("es-HN", { maximumFractionDigits: 2 })} años luz`;
    }

    if (anioLuz < 1e6) {
        return `${(anioLuz / 1000).toLocaleString("es-HN", { maximumFractionDigits: 1 })} mil años luz`;
    }

    return `${(anioLuz / 1e6).toLocaleString("es-HN", { maximumFractionDigits: 1 })} millones de años luz`;
}

/**
 * Calcula cuántas veces más grande es la escala actual
 * respecto a la anterior, para mostrar algo como:
 * "1,000 veces más grande que la escala anterior"
 */
export function compararConAnterior(escalaActual, escalaAnterior) {
    if (!escalaAnterior) return null;

    const factor = escalaActual / escalaAnterior;

    if (factor < 10) {
        return `${factor.toLocaleString("es-HN", { maximumFractionDigits: 1 })} veces más grande`;
    }

    if (factor < 1e6) {
        return `${Math.round(factor).toLocaleString("es-HN")} veces más grande`;
    }

    // para saltos gigantescos, usamos notación más legible
    return `${factor.toExponential(1)} veces más grande`;
}