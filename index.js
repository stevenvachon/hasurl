"use strict";
let hasComplete,hasExperimental;



function checkComplete()
{
	try
	{
		const URL = require("url").URL;
		const url = new URL("http://domain?p&&p");

		// https://github.com/nodejs/node/pull/11234#issuecomment-282914161
		if (url.searchParams.getAll("").length === 0)
		{
			return true;
		}
	}
	catch (error) {}

	return false;
}



// TODO :: limit to 7.5 when http.request and https.request added URL support ?
function checkExperimental()
{
	try
	{
		const URL = require("url").URL;
		const url = new URL("http://domain?p");
		
		// https://github.com/nodejs/node/issues/9302
		if (url.searchParams.get("p") === "")
		{
			// https://github.com/nodejs/node/issues/11101
			url.search = "";
			url.searchParams.append("p", "v");

			if (url.searchParams.get("p") === "v")
			{
				return true;
			}
		}
	}
	catch (error) {}

	return false;
}



function hasURL(supportExperimental/*=false*/)
{
	if (hasExperimental === undefined)
	{
		hasExperimental = checkExperimental();
	}

	if (supportExperimental === true)
	{
		return hasExperimental;
	}

	if (hasComplete === undefined)
	{
		hasComplete = hasExperimental && checkComplete();
	}

	return hasComplete;
}



module.exports = hasURL;
