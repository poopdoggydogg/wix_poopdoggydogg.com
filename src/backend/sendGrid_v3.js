import {fetch} from 'wix-fetch'; 

export function sendInstruction(APIKey, Sender, RecipientEmail, Subject, body, testInfo) {
	const url = "https://api.sendgrid.com/v3/mail/send";
		
	const MyHeaders = {
		"Authorization": "Bearer " + APIKey,
		"Content-Type": "application/json"
	};
	const MyBody = {
		"personalizations": [{
			"to": [{
				"email": RecipientEmail
			}],
			"dynamic_template_data": {
				"title":testInfo.one,
				"title2":testInfo.two
			}
		}],
		"from": {
			"email": Sender
		},
		"subject": Subject,
		"content": [{
			"type": "text/html",
			"value": body
		}],
		//sendGrid Dynamic Template = testWTFKINDOFAPIISTHISBS
		//"template_id" : "d-6020e84bdc924ae9a31f37d121d985a2"
		"template_id" : "d-2e7acfcde76941f5b2799da31d30babd"
	};

	return fetch(url, {
			"method": "POST",
			"headers": MyHeaders,
			"body": JSON.stringify(MyBody)
		})
		.then(Response => Response.text);		
}