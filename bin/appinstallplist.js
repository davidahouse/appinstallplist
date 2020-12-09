#!/usr/bin/env node
const program = require("commander");

program
  .option("-u, --url <url>", "The url for the ipa")
  .option("-b, --bundleid <bundleid>", "The bundle id of the app")
  .option("-v, --version <version>", "The version of the app")
  .option("-t, --title <title>", "The title of the app")

  program.parse(process.argv);

  console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>")
  console.log("<!DOCTYPE plist PUBLIC \"-//Apple//DTD PLIST 1.0//EN\" \"http://www.apple.com/DTDs/PropertyList-1.0.dtd\">")
  console.log("<plist version=\"1.0\">")
  console.log("<dict>")
	console.log("<key>items</key>")
	console.log("<array>")
	console.log("<dict>")
  console.log("<key>assets</key>")
  console.log("<array>")
	console.log("<dict>")
	console.log("<key>kind</key>")
	console.log("<string>software-package</string>")
	console.log("<key>url</key>")
	console.log("<string>" + program.url + "</string>")
	console.log("</dict>")
	console.log("</array>")
	console.log("<key>metadata</key>")
	console.log("<dict>")
	console.log("<key>bundle-identifier</key>")
	console.log("<string>" + program.bundleid + "</string>")
	console.log("<key>bundle-version</key>")
	console.log("<string>" + program.version + "</string>")
	console.log("<key>kind</key>")
	console.log("<string>software</string>")
	console.log("<key>title</key>")
	console.log("<string>" + program.title + "</string>")
  console.log("</dict>")
  console.log("</dict>")
  console.log("</array>")
  console.log("</dict>")
  console.log("</plist>")
