"use strict";
const expect = require("chai").expect;
const hasURL = require("./");
const semver = require("semver");



it("works", function()
{
	if (semver.satisfies(process.version, ">= 8"))
	{
		expect(hasURL()).to.be.true;
	}
	else
	{
		expect(hasURL()).to.be.false;
	}
});
