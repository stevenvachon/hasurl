"use strict";
const expect = require("chai").expect;
const hasURL = require("./");
const semver = require("semver");



describe("supportExperimental = false", function()
{
	it("works", function()
	{
		if (semver.satisfies(process.version, ">= 7.10") === true)
		{
			expect( hasURL()      ).to.be.true;
			expect( hasURL(false) ).to.be.true;
		}
		else
		{
			expect( hasURL()      ).to.be.false;
			expect( hasURL(false) ).to.be.false;
		}
	});
});



describe("supportExperimental = true", function()
{
	it("works", function()
	{
		if (semver.satisfies(process.version, "7.3 || 7.4 || >=7.6") === true)
		{
			expect( hasURL(true) ).to.be.true;
		}
		else
		{
			expect( hasURL(true) ).to.be.false;
		}
	});
});
