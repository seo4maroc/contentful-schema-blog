#!/usr/bin/env node

var path = require('path')
var argv = require('yargs').argv
var contentfulImport = require('contentful-import')

var spaceId = argv['space-id']
var managementToken = argv['token']

const options = {
	contentFile: path.join(__dirname, 'contentful-export.json'),
	spaceId,
	managementToken,
}

console.log(options);


contentfulImport(options)
	.then(() => {
		console.log('\x1b[32m%s\x1b[0m', 'Data imported successfully!')
	})
	.catch((err) => {
		console.log('Oh no! Some errors occurred!', err)
	})
