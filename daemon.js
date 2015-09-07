var exec = require('child_process').exec,
	util = require('util'),
	fs = require('fs'),
	cmd;

var args = {
		port: 22,
		localDir: "./",
		remoteDir: "./",
		ssh: "user@host"
		}

var options = [];

process.argv.forEach(function (val, index, array) {
		if(val.split('-').length === 2) options.push(val);		
		switch (val){
			case "-p":
				args.port = array[index+1];
				break;	
		  	case "-l":
				args.localDir = array[index+1];
				break;
			case "-r":
				args.remoteDir = array[index+1];
				break;
			case "-s":
				args.ssh = array[index+1]
				break;
			case "-h":
				console.log("usage: %s -l local_dir -r remote_dir -s user@host",process.argv[1].split('/').pop());	
		}
});

fs.watch(args.localDir, function (event, filename) {
	if(filename){
		var rsyncArgs = util.format('rsync -azP --delete -e \"ssh -p %d\" %s %s:~/%s', args.port, args.localDir, args.ssh, args.remoteDir); 
		rsync(rsyncArgs);
	}
})

var rsync = function(cmd){
	exec(cmd,function(err, stdout, stderr){
		if(err) console.log(err);
		console.log(stdout);
	});
}


