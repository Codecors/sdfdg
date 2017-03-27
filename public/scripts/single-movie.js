$(document).ready(function() {
	function getUrlParameter(sParam) {
		const sPageURL = decodeURIComponent(window.location.search.substring(1));
		const sURLVariables = sPageURL.split('&');
		let id;
		sURLVariables.forEach((paraName) => {
			const sParameterName = paraName.split('=');
			if (sParameterName[0] === sParam) {
				id = sParameterName[1] === undefined ? false : sParameterName[1];
			}
		});
		return id;
	}
	var movieId = getUrlParameter('id');
	console.log(movieId)

	$(".getSingleMovieButton").on('click', () => {
		$.get(`https://movie-backend.herokuapp.com/movie/${movieId}`, (data) => {
			console.log(data[0])
			var source = $("#single-movie-template").html();
			var template = Handlebars.compile(source);

			data.forEach((element) => {
				var html = template(element)
				$('.single-movie-placeholder').append(html)
			})
		})
	})
});