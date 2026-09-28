const playerMusica = document.querySelector('#player-musica');
const audioStatus = document.querySelector('.audio-status');

if (playerMusica && audioStatus) {
	if (playerMusica.error) {
		audioStatus.textContent = 'Não foi possível carregar audio.mp3. Verifique se o arquivo está na mesma pasta.';
	} else if (playerMusica.readyState >= HTMLMediaElement.HAVE_METADATA) {
		audioStatus.textContent = 'Áudio pronto. Clique em play para ouvir.';
	} else {
		audioStatus.textContent = 'Carregando áudio...';
	}

	playerMusica.addEventListener('loadstart', () => {
		audioStatus.textContent = 'Carregando áudio...';
	});

	playerMusica.addEventListener('loadedmetadata', () => {
		audioStatus.textContent = 'Áudio pronto. Clique em play para ouvir.';
	});

	playerMusica.addEventListener('play', () => {
		audioStatus.textContent = 'Música reproduzindo.';
	});

	playerMusica.addEventListener('pause', () => {
		audioStatus.textContent = 'Música pausada.';
	});

	playerMusica.addEventListener('error', () => {
		audioStatus.textContent = 'Não foi possível carregar audio.mp3. Verifique se o arquivo está na mesma pasta.';
	});
}
