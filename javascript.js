window.alert("The website was developed by: Amina Baetova")


    	function myFunk(){

		let x = document.getElementById("initialbid").value;
		let result = (x*2) / 3
  		window.alert("The price for the groom is: $" + result)

		}

		var inp = document.querySelector("[type='button']");
		inp.addEventListener('click',myFunk)