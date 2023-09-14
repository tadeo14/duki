
        // Fecha y hora específicas (en este ejemplo, la fecha es el 1 de enero de 2024 a las 12:00 PM).
        const fechaObjetivo = new Date('2023-12-02T20:00:00').getTime();

        const temporizador = document.getElementById('temporizador');

        const actualizarTemporizador = () => {
            const ahora = new Date().getTime();
            const tiempoRestante = fechaObjetivo - ahora;

            if (tiempoRestante <= 0) {
                temporizador.innerHTML = "¡Tiempo cumplido!";
            } else {
                const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
                const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
                const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

                temporizador.innerHTML = `Tiempo restante: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
            }
        };

        setInterval(actualizarTemporizador, 1000); // Actualizar el temporizador cada segundo.
        actualizarTemporizador(); // Llamar a la función para actualizar de inmediato.
