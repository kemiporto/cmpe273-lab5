$(":button").click(function() {
    var isbn = this.id;
    if (!confirm('About to report lost on ISBN ' + isbn)) {
	return;
    }
    var btn = this;
    $.ajax({
	type: "PUT",
	contentType: "application/json",
	url: "http://localhost:8001/library/v1/books/" + isbn + "?status=lost",
	success: function (msg) {
            alert('Success: book ' + isbn + ' status changed to lost');
	    btn.disabled = true;
	    $("#status" + isbn).text("lost");
	},
	error: function (err){
            alert('Error. Please try again.');
	}
    });
});
