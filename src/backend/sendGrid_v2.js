//sendGrid.js

import {fetch} from 'wix-fetch';  

export function sendWithService(key, sender, recipient, subject, body) {
 const url = "https://api.sendgrid.com/api/mail.send.json";
 
 const headers = {
 //"Authorization": "Bearer " + key,
 "Authorization": "Bearer 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",
 "Content-Type": "application/x-www-form-urlencoded"
  };

//use this for multiple recipients
const recipients = recipient.split(";").map( (x) => "to[]=" + x + "&" ).join("");
const data = `from=${sender}&${recipients}&subject=${subject}&text=${body}`;

// const data = `from=${sender}&to=${recipient}&subject=${subject}&text=${body}`;

 
 const request = {
 "method": "post", 
 "headers": headers, 
 "body": data
  };
 
 return fetch(url, request)
   .then(response => response.json());
}


/*
	file = sendGrid.js
	author = james bui
	date = 07.14.2021
*/
/*
console.log("----------start sendGrid.js");
import {fetch} from 'wix-fetch';

export function sendWithService(key, sender, recipient, subject, body) {
  const url = "https://api.sendgrid.com/api/mail.send.json";
  //const url = "https://api.sendgrid.com/v3/mail/send";
  
  const headers = {
    "Authorization": "Bearer " + key,
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const data = `from=${sender}&to=${recipient}&subject=${subject}&text=${body}`;
 
  const request = {
    "method": "post", 
    "headers": headers, 
    "body": data
  };
 
  return fetch(url, request)
   .then(response => response.json());
}
console.log("----------end sendGrid.js");
*/