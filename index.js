// code your solution here

const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]

function superbowlWin(record) {
	let item = record.find(function (item) {
		return item.result === "W";
	});
	if (typeof item === "undefined") {
		return undefined;
	} else {
		return item.year;
	}
}