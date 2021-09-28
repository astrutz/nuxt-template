# ABLE Nuxt.js Template

## Usage

### Initial Setup

To follow this tutorial replace '_YOURAPPNAME_' with the name of your new app and '_YOURUSERNAME_' with your GitHub username.

* Clone this repository
* Find and replace 'able-nuxt-template' with your appname, e.g. 'able-_YOURAPPNAME_'
* Rename the folder 'nuxt-template' to '_YOURAPPNAME_'

```bash
# open your project
$ cd YOURAPPNAME

# serve with hot reload at localhost:3000
$ npm run dev

# change the repository origin
$ git remote add origin https://github.com/YOURUSERNAME/YOURAPPNAME.git

# push to your new remote origin
$ git push -u origin master
```

* Transfer ownership to user `ecm-cc`, credentials can be found in Keepass#
* Connect to the Azure VM via WinSCP, credentials can be found in Keepass
* Create a new folder under `/home/adm_ecm` named _YOURAPPNAME_
* Copy the whole content of your local `/YOURAPPNAME` to the remote folder `/YOURAPPNAME`
* Connect to the Azure VM via SSH, credentials can be found in Keepass

```bash
# Open Nuxt.js configuration
$ sudo nano /home/adm_ecm/YOURAPPNAME/nuxt.config.js

# Add the following entry, replacing PORTNUMBER with a available port
server: {
    port: PORTNUMBER,
}

# Open NGINX proxy configuration
$ sudo nano /etc/nginx/sites-enabled/default

# Add the following lines as a new entry to both server entries with your chosen port

location /able-YOURAPPNAME/ {
    #try_files $uri $uri/ =404;
    proxy_pass http://127.0.0.1:PORTNUMBER;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
	
# Open PM2 configuration
$ sudo nano /home/adm_ecm/ecosystem.config.js

# Add the following entry under 'apps', replacing PORTNUMBER with a available port
{
  name: 'YOURAPPNAME',
  exec_mode: 'cluster',
  instances: 'max',
  script: './node_modules/nuxt/bin/nuxt.js',
  args: 'start'
}

# Restart PM2 and all Nuxt.js instances with it
$ sudo pm2 restart all
```

The app should now be available under https://able-customapps.westeurope.cloudapp.azure.com/able-YOURAPPNAME and can be used with d.3

### Build/Deploy Setup
To build and deploy the app, a build script (credentials included) can be found in the KeePass entry 'Azure/Linux VM Deployment'.

* Open the KeePass entry
* Create a file `.passwd` and copy the entry
* Replace YOURAPPNAME with the name of your app
* **Make sure `.passwd` is included in your .gitignore, as it should by default**
* To build and deploy just copy the command in your terminal and run it

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### Changing server middleware

If the server middleware is changed, the corresponding files need to be transfered "by hand" via WinSCP onto the machine.

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).
