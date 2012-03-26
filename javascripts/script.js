// Wait for PhoneGap to load
//
// document.addEventListener("deviceready", onDeviceReady, false);

var jqxhr = $.get('prenoms.csv')
.success(prenomsLoaded)
.error(prenomsError);

// PhoneGap is ready
//
function onDeviceReady() {
	$.get('data/prenoms.csv', prenomsLoaded);
}

function prenomsLoaded(data) {
	alert('Data Loaded: ' + data);
}

function prenomsError(data) {
	alert('Error: ' + data);
}