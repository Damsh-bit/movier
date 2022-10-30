const url = 'https://api.themoviedb.org/3/movie/550?api_key=f054f527183944ce445d366fca3564c2&language=es-ES';

export const getAnimes = async () => {
    fetch(url)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
  };


