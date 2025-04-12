AOS.init();

// 1. Cria um objeto Date com a data e hora do evento
const dataDoEvento = new Date("Dec 12, 2025 19:00:00");

// 2. Converte a data do evento para timestamp (milissegundos desde 01/01/1970)
const timeStampDoEvento = dataDoEvento.getTime();

// 3. Inicia um intervalo que será executado a cada segundo (1000ms)
const contaAsHoras = setInterval(function() {
    
    // 4. Pega a data e hora atuais
    const agora = new Date();

    // 5. Converte a data atual em timestamp
    const timeStampAtual = agora.getTime();

    // 6. Calcula a diferença entre a data do evento e a data atual
    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    // 7. Define constantes para conversões de tempo
    const diaEmMs = 1000 * 60 * 60 * 24;      // milissegundos em um dia
    const horaEmMs = 1000 * 60 * 60;          // milissegundos em uma hora
    const minutoEmMs = 1000 * 60;             // milissegundos em um minuto

    // 8. Calcula quantos dias faltam até o evento
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);

    // 9. Calcula as horas restantes, depois de remover os dias
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);

    // 10. Calcula os minutos restantes, depois de remover as horas
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);

    // 11. Calcula os segundos restantes, depois de remover os minutos
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    // 12. Atualiza o conteúdo do elemento com id "contador" com os valores calculados
    document.getElementById('contador').innerHTML = 
        `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    // 13. Se o tempo já passou, para o intervalo e exibe "Evento expirado"
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras); // para o setInterval
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }

}, 1000); // intervalo de 1 segundo (1000ms)
