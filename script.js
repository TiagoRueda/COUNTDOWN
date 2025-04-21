
  function atualizarContagem() {
    const dataAlvo = new Date('August 23, 2025 00:00:00').getTime();
    const agora = new Date().getTime();
    const diferenca = dataAlvo - agora;

    if (diferenca < 0) {
      document.getElementById('contagem').innerHTML = "A data chegou!";
      return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
  }

  setInterval(atualizarContagem, 1000);
  atualizarContagem();