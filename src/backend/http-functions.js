import { ok, notFound, serverError } from 'wix-http-functions';
import wixData from 'wix-data';

let newCourse = {
	courseId: '4',
  golfCourse: "Tumwater Valley Golf Club"
  /*
  age: 47,
  _id: "mary.jones@myemail.com",
  phone: "(345)123-4567",
  pic: "Mary.jpg",
  labels: ["female", "adult", "hiking"],
  relatives: ["husband", "daughter"],
  purchases: [
    {item: "watch", material: "gold", price: "2000.00"},
    {item: "ring", material: "platinum", price: "500.00"},
    {item: "bracelet", material: "silver", price: "250.00"}
  ]
  */
};

/*
	wixData.insert("tbl_golfCourses", newCourse);
*/
wixData.query("tbl_golfCourses")
	.find()
	.then ( (results) => {
		console.log(results.items);
	});

/*
export function get_golfCourses() {
	let options = {
		"headers": {
			"Content-Type": "application/json"
		}
	};

	return wixData.query("golfCourses")
		.find()
		.then(results => {
			if (results.items.length > 0){
				options.body = {
					"items":results.items
				}
				return ok(options);
			}

		})
}*/