## Install && Run

Before installing and running this simple Node script, make sure you have enabled ssh Public key authentication to your server.

```
git clone https://github.com/DonaldDerek/xync.git
cd xync
node daemon.js -l local_dir -r remote_dir -p 22 -s user@host
```

## How it works
This simple script watches over any changes in your dir via [Node.js FS](https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener) then it triggers [rsync](http://linux.die.net/man/1/rsync) to sync your local files and folders with the specified remote directory.

```
node daemon.js -h
```

## Using pm2 to run this script as a daemon

Install the awesome Node.js process manager [pm2](https://github.com/Unitech/pm2)

```
npm install pm2 -g
```

then

```
pm2 start daemon.js -- -l local_dir -r remote_dir -p 2222 -s user@hostname  
``` 

DropDropBox FTW!
