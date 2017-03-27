$(document).ready(function() {
	$('.add-movie-button').on('click', () => {
		$.post('https://movie-backend.herokuapp.com/movie', {
			title: $('.title-input').val(),
			rating: $('.rating-input').val()
		})
		 .done((data) => {
		 	console.log('data posted: ' + data)
		 })
		 .fail((data) => {
		 	console.log('data failed to post')
		 })
	})
});