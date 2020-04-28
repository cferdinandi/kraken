var marked = require('marked');
var fs = require('fs');


// Configs
var configs = {
	files: ['index.md', 'getting-started.md', 'components.md'],
	pathIn: 'src/docs',
	pathOut: './'
};

// Get the header, footer, and nav
var header = fs.readFileSync(`${configs.pathIn}/header.html`, 'utf8');
var footer = fs.readFileSync(`${configs.pathIn}/footer.html`, 'utf8');
var nav = [
	{
		url: 'getting-started.html',
		label: 'Getting Started'
	},
	{
		url: 'components.html',
		label: 'Components'
	},
	{
		url: 'https://github.com/cferdinandi/kraken/archive/master.zip',
		label: 'Download'
	}
];

// Get the navigation menu
var getNav = function (filename) {
	return nav.map(function (item) {
		if (filename === item.url) return `<li class="text-muted">${item.label}</li>`;
		return `<li><a href="${item.url}">${item.label}</a></li>`;
	}).join('');
};

// Create the directory path
fs.mkdir(configs.pathOut, { recursive: true }, function (err) {

	// If there's an error, throw it
	if (err) throw err;

	// Loop through each doc and convert to markdown
	configs.files.forEach(function (file) {
		var filename = file.slice(0, file.length - 3) + '.html';
		fs.readFile(`${configs.pathIn}/${file}`, 'utf8', function (err, data) {
			if (err) throw err;
			var md = marked(data);
			var head = header.replace('{{navItems}}', getNav(filename));
			fs.writeFile(`${configs.pathOut}/${filename}`, (head + md + footer), function (err){
				if (err) throw err;
				console.log(`Generated ${filename}`);
			});
		});
	});

});

