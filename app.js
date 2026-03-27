
class GeneradorReporte {
    //metodo plantilla
    ejecutarProceso() {
        this.limpiarConsola();
        this.extraerDatos();     // Paso común
        this.aplicarFormato();   // Paso específico (Abstracto)
        this.finalizar();        // Paso común
    }

    extraerDatos() {
        this.log("Step 1: Redireccionando al link de mediafire...");
    }

    finalizar() {
        this.log("Step 3: Archivo descargado exitosamente.");
    }

   
    aplicarFormato() {
        throw new Error("El método aplicarFormato() debe ser implementado");
    }

    log(mensaje) {
        const consoleEl = document.getElementById('log');
        consoleEl.innerHTML += `> ${mensaje}<br>`;
    }

    limpiarConsola() {
        document.getElementById('log').innerHTML = "";
    }
}

// IMPLEMENTACIÓN ESPECÍFICA: PDF
class ReporteISO extends GeneradorReporte {
    aplicarFormato() {
        this.log("Step 2: Descargando ISO (The Elder Scrolls VI: Crespo)...");
    }
}

// IMPLEMENTACIÓN ESPECÍFICA: EXCEL
class ReportePSN extends GeneradorReporte {
    aplicarFormato() {
        this.log("Step 2: Descargando PSN (Plantas vs Yepiz 2: Karely´s War)...");
    }
}

// Lógica de la Interfaz
function exportar(tipo) {
    let generador;
    if (tipo === 'ISO') generador = new ReporteISO();
    if (tipo === 'PSN') generador = new ReportePSN();

    generador.ejecutarProceso();
}