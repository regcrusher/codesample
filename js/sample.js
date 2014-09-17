$(function() {


	var $password = $('#password_container');
	var $errorbox = $('#messageBox1');

	setHeight();

	$(window).resize(function() {
		setHeight();
	});

	function setHeight() {
		var h = $(window).height();
		console.log($password.outerHeight());
		$password.css('top', h/2 -($password.outerHeight()/2) + "px");
		$errorbox.css('top', h/2 -($password.outerHeight()/2) + 15 + "px");


	}

	// Validate required fields
	$("#password-form").validate({
		errorPlacement: function(error, element) {
			$("#messageBox1").html('');
			error.appendTo("#messageBox1");
		},
		onkeyup: false,
		debug: true,
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
		submitHandler: function(form) {
			$('#password').fadeOut('slow', function() {
				form.submit();
			});
		}
	});
});