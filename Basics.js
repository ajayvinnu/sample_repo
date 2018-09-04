

function Car() {
	this.name = "Santro"
	this.brnad = "Maruthi"
	this.type = "Mini"
		
	this.getModel = function() {
		console.log("2020 model")
	}
}


module.exports = new Car();