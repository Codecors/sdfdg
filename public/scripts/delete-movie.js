$(document).ready(function() {
	$('.delete-movie-button').on('click', () => {
		$.ajax({
			url: 'https://movie-backend.herokuapp.com/movie',
			type: 'DELETE',
			data: {
				title: $('.title-input').val(),
			},
			success: function(result) {
				console.log('DELETING')
				console.log(result)
			}
		})
	})
});