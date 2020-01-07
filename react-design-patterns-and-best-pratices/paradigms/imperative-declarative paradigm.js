// EX: 1
/*---------------IMPERATIVE-------------- */
const toLowerCase = input => {
	const output = [];
	for (let i = 0; i < input.length; i++) {
		output.push(input[i].toLowerCase());
	}
}
/*---------------IMPERATIVE-------------- */

/*---------------DECLARATIVE-------------- */
const toLowerCase = input => input.map(
	input => value.toLowerCase()
);
/*---------------DECLARATIVE-------------- */


// EX: 2
/*---------------IMPERATIVE-------------- */
const map = new google.maps.Map(document.getElementById('map'), {
	zoom: 4,
	center: myLatLng,
})

const marker = new google.maps.Marker({
	position: myLatLng,
	title: 'Hello World!',
})
/*---------------IMPERATIVE-------------- */

/*---------------DECLARATIVE-------------- */
<Gmaps zoom={4} center={myLatLng}>
	<Marker position={myLatLng} Hello world! />
</Gmaps>
/*---------------DECLARATIVE-------------- */
