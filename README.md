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

###License

Copyright (c) 2015 [Donald Derek](http://donaldderek.com/)

The MIT License (MIT)

> <sup>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</sup>
>
> <sup>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</sup>
>
> <sup>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</sup>

