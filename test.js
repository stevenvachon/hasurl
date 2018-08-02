"use strict";
const expect = require("chai").expect;
const hasURL = require("./");
const it = require("mocha").it;
const semver = require("semver");



it("works", () =>
{
	if (semver.satisfies(process.version, ">= 6.13.0"))
	{
		expect(hasURL()).to.be.true;
	}
	else
	{
		expect(hasURL()).to.be.false;
	}
});
