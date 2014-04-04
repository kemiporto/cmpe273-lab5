$(":button").click(function() {
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);

    $.ajax({
	type: "PUT",
	contentType: "application/json",
	url: "http://localhost:8001/library/v1/books/" + isbn + "?status=lost",
	success: function (msg) {
            alert('Success: book ' + isbn + ' status changed to lost');
	},
	error: function (err){
            alert('Error. Please try again.');
	}
    });
});
