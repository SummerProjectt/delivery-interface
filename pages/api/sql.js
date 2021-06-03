var mysql = require("mysql");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Vinbarjam_1",
	database: "menu",
});

var exp = {};
con.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");

	// con.query("use record_company", function (err, result) {
	// 	if (err) throw err; //second
	// 	console.log("Result: " + result);
	// });
	con.query("select * from items;", function (err, result, rows, fields) {
		if (err) throw err; //second
		// console.log(JSON.stringify(result));
		exp = JSON.stringify(result);
	});
});

export default (req, res) => {
	res.status(200).json(exp);
};
