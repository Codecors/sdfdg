$(document).ready(function() {
	$(".get-movies-button").on('click', () => {
		console.log('lcikadf')
		$.get('https://movie-backend.herokuapp.com/movie', (data) => {
			console.log(data)
			var source = $("#movie-template").html()
			var template = Handlebars.compile(source)
			data.forEach((element) => {
				var html = template(element)
				$('.movies-placeholder').append(html)
			})
		})
	})
});