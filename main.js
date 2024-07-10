// add alert and prompt
alert("Hello world!");
let name = prompt("Enter your name:");
if (name) {
	alert("Hello " + name + "!!!");
	document.getElementById("greeting").textContent = "Hello " + name;
}
else {
	alert("Are you nameless???!!!");
	document.getElementById("greeting").textContent = "Hello nameless dude";
}

// prompt for other information
let info = prompt("Tell us something about yourself:");
document.getElementById("info").textContent = info;

// get current date and time
let now = new Date();
let dateStr = now.toLocaleDateString();
let timeStr = now.toLocaleTimeString();
document.getElementById("datetime").innerHTML = "Date: <b>" + dateStr + "</b><br>";
document.getElementById("datetime").innerHTML += "Date: <b>" + timeStr + "</b><br>";