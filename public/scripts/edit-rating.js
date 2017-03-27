$(document).ready(function() {
	$('.edit-movie-rating-button').on('click', () => {
		$.ajax({
			url: 'https://movie-backend.herokuapp.com/movie',
			type: 'PATCH',
			data: {
				title: $('.title-input').val(),
				rating: $('.rating-input').val()
			},
			success: function(result) {
				console.log('PATCHING')
				console.log(result)
			}
		})
	})

});