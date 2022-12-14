const password 	  = document.getElementById("password");
const confirmPass = document.getElementById("confirm-password");
const signup	  = document.querySelector(".submit-button");


signup.addEventListener('click', passwordMatchChecker());

function passwordMatchChecker () {
	return	() => {
		if (password.value.length !== 0) {
			if (password.value !== confirmPass) {
				password.setCustomValidity("Password doesn't match.");
				confirmPass.setCustomValidity("Password doesn't match.");

			}
			else {
				password.setCustomValidity("");
				confirmPass.setCustomValidity("");
			}
		}
	}	
}

