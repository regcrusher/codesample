$(function() {


	var $password = $('#password_container');
	var $errorbox = $('#messageBox1');

	setHeight();

	// Call setHeight on all resize events
	$(window).resize(function() {
		setHeight();
	});

	function setHeight() {
		var h = $(window).height();
		console.log($password.outerHeight());
		$password.css('top', h/2 -($password.outerHeight()/2) + "px");
		$errorbox.css('top', h/2 -($password.outerHeight()/2) + 15 + "px");


	}

	// Validate required fields.
	// Getcode.php validates a field from the db
	$("#password-form").validate({
		errorPlacement: function(error, element) {
			$("#messageBox1").html('');
			error.appendTo("#messageBox1");
		},
		onkeyup: false,
		debug: false,
		rules: {
			code: {
				required: true,
				remote: {
					url: "getcode.php",
					type: "post",
					data: {

					}
				}
			}
		},
		messages: {
			code: {
				remote: "This password is invalid"
			}
		},
		// On Submit, fade out before submission.
		submitHandler: function(form) {
			$('#password').fadeOut('slow', function() {
				form.submit();
			});
		}
	});
});