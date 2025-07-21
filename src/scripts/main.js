AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contadorDeTempo = setInterval(function () {
  const agora = new Date();
  const TimeStampAtual = agora.getTime();

  const tempoAteEvento = timeStampDoEvento - TimeStampAtual;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(tempoAteEvento / diaEmMs);
  const horasAteEvento = Math.floor((tempoAteEvento % diaEmMs) / horaEmMs);
  const minutosAteEvento = Math.floor((tempoAteEvento % horaEmMs) / minutoEmMs);
  const segundosAteEvento = Math.floor((tempoAteEvento % minutoEmMs) / 1000);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

  if (tempoAteEvento < 0) {
    clearInterval(contadorDeTempo);
    document.getElementById("contador").innerHTML = "Evento expirado";
  }
}, 1000);
