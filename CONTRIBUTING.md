# How to contribute to this website:

You do not need to be part of this school to contribute, if you have an idea on how to improve the site, please do make a Pull Request and we will take a look at it.

- [Setup the environment](#setup-the-environment)
    - [Install necessary applications](#install-necessary-applications)
        - [Installing the applications on Windows](#installing-the-applications-on-windows)
        - [Installing the applications on macOS](#installing-the-applications-on-macos)
        - [Installing the applications on Linux](#installing-the-applications-on-linux)
    - [Configuring the environment](#configuring-the-environment)
        - [Windows configuration](#windows-configuration)
        - [macOS and Linux configuration](#macos-and-linux-configuration)
- [Use the environment](#use-the-environment)


## Setup the environment

In this step we will install the necessary applications and packages, configure the environment and generate or create the necessary files

### Install necessary applications

This step is different for different OSes, make sure to follow the steps for your specific Operating System!

#### Installing the applications on Windows

You should be on either Windows 11 or an up-to-date version of Windows 10 in order for these commands to work. We will start by installing the applications that are available using Window's package manager `winget`:

```
winget install OpenJS.NodeJS
```
```
winget install Microsoft.VisualStudioCode
```
```
winget install Git.Git
```
```
winget install GitHub.GitHubDesktop
```

To test and see if these installs worked, try the following commands in powershell:

```
npm --version
```
```
git --version
```

These commands should both print out version information, if they don't something went wrong during the install, and you should have gotten an error message during install or in the command output while installing it with `winget`.

Github Desktop and VSCode should both be available to start in your Start Menu by now too.

Now we will install the other applications we will need:

- **PHP**: To install PHP, go to [php's download site for windows](https://windows.php.net/download#php-8.1) and download the latest thread-safe version as a zip file.

    Extract the zip file to a location of your choosing, preferably not in the `Program Files` or `Program Files (x86)` folder, as that could result in permission errors.

    The next thing to do is add the php binary folder to Window's `PATH` variable, so that we can access it from the command line. To do that go into the file explorer and locate the php folder on your disk. It could be `C:\php\` for example. Now open the Start Menu and start typing `environment variable`. You shouldn't have to type it out, but you should be able to access a panel looking somewhat like this:

    [![Screenshot-2022-03-15-114933.png](https://i.postimg.cc/nVPhGtPr/Screenshot-2022-03-15-114933.png)](https://postimg.cc/dDGFJgvc)

    In this panel you should be able to click on `Environment Variables...`, which should open a panel somewhat resembling the following:

    [![Screenshot-2022-03-15-115535.png](https://i.postimg.cc/fTSTHgGK/Screenshot-2022-03-15-115535.png)](https://postimg.cc/GHrCtzh8)

    In the top section, click on the line which has `Path` in the beginning and then click on `Edit`. This should open the Edit panel.

    [![Screenshot-2022-03-15-120051.png](https://i.postimg.cc/NFSGs1Hm/Screenshot-2022-03-15-120051.png)](https://postimg.cc/wR5YFRFj)

    In this panel click on `New` on the right side and paste the path for the php folder from before, which could be `C:\php\`. After that affirm every dialogue and php should be in your path. You may need to log out and back in or even reboot for this to be picked up, but it should work now. To test if it does execute this in powershell:
    ```
    php --version
    ```
    If windows throws an error then something went wrong or you haven't rebooted yet. If it gives you a version number then everything should work. The next thing to configure for php on Windows is to enable the required extensions. To do this execute:
    ```
    php --ini
    ```
    This should output a path to a `php.ini` file. Open this php.ini file and look for the lines starting with `extension` or `;extension`. The ';' comments out a line. After editing it should look somewhat like this:
    ```ini
    extension=bz2
    extension=curl
    ;extension=ffi
    ;extension=ftp
    extension=fileinfo
    ;extension=gd
    extension=gettext
    ;extension=gmp
    ;extension=intl
    ;extension=imap
    ;extension=ldap
    extension=mbstring
    extension=exif      ; Must be after mbstring as it depends on it
    extension=mysqli
    ;extension=oci8_12c  ; Use with Oracle Database 12c Instant Client
    ;extension=oci8_19  ; Use with Oracle Database 19 Instant Client
    ;extension=odbc
    ;extension=openssl
    ;extension=pdo_firebird
    extension=pdo_mysql
    ;extension=pdo_oci
    ;extension=pdo_odbc
    ;extension=pdo_pgsql
    extension=pdo_sqlite
    ;extension=pgsql
    ;extension=shmop
    ```
    And voila you have setup php for use with this project.
- **Composer**: This software is used to install php based packages for our project. Go to [Composer's download site](https://getcomposer.org/download/) and download the Windows installer. Execute it and follow the onscreen prompts. You may have to log out and back in or restart again to use composer from the command line. To test if it worked, execute:
    ```
    composer --version
    ```
    This should output version information for composer, if executing it throws an error like "command not found" or similar, something went wrong or you haven't relogged in or restarted yet.

#### Installing the applications on macOS

If you scrolled through the instructions for windows and think "why are these so long", it's Window's fault, on macOS the install process is a little bit simpler

The first thing you should install are the developer commands for the Terminal. To do this open a Terminal window and execute:
```
git --version
```
Doing so will lead to a little popup opening, asking you to install the developer tools. Confirm the installation and wait for it to complete.

The next thing we will need to install is the `brew` package manager. You could do all of the setup without this too, but it would be a lot harder, so we will just use brew. To install brew we will execute the command [from brew's website](https://brew.sh/):
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
If it asks you to enter your password, do so. The install process will take a while and at some point it may look like nothing is happening. There is still something happening in the background. If you want to confirm it's still running, open the Activity Monitor and sort by CPU Usage. A process concerning the installation should be at the top if you aren't doing anything else CPU intensive at the same time.

Now we will use brew to install the necessary applications for our project:
```
brew install php npm php-sqlite php-iconv composer
```
After the install has completed, you may want to take a look at the output of:
```
brew doctor
```
and fix any major issues. Concerning the portion about the $PATH variable, you can fix this with the following command (which `brew doctor` should also tell you):
```
echo 'export PATH="$PATH:/usr/local/sbin"' >> ~/.zshrc
```

The next step is to install something called ["Laravel Valet"](https://laravel.com/docs/9.x/valet), which lets you run a laravel project effortlessly on macOS. To do this, execute the following command:
```
composer global require laravel/valet
```
This will make Valet available globally. However you won't be able to execute Valet from the Terminal just yet, as its executable also isn't in the `$PATH` yet. To fix this, execute the following command:
```
echo 'export PATH="$PATH:$HOME/.composer/vendor/bin"' >> ~/.zshrc
```
Now you should be able to use the valet command line tool. The next step is to actually install Valet on your system, by executing:
```
valet install
```
To edit the project and push to github more easily you can install [Visual Studio Code](https://code.visualstudio.com/download) and [Github Desktop](https://desktop.github.com/). 

#### Installing the applications on Linux

The first thing we'll do is install the needed packages with the packages of your distro. We will need `npm`, `php`, `composer`, `php-fileinfo`, `php-iconv`, `php-sqlite`. These packages may be called something different on your distribution. A rather common difference is the `php` packages being called `php8-...` instead of `php-...`. If you can't find the packages, please make use of your package managers search function, or browse the web for what the packages are called on your distribution. There is no single way to install these packages, as every Linux distro does things a little differently.

After install, make sure the version of PHP you installed is PHP 8+, as this is needed for our framework (Laravel). Check the version of php installed by running:

```
php --version
```

We will also need basic developer command line tools. On Arch-based distributions these are included in the package group `base-devel`, but if there is no such bundle for your distribution, please install `git`.

For easier code editing you may install any code editor of your preference, but preferably one with git integration, as Microsoft decided not to make Github Desktop available for Linux. The recommended one is VSCode, which should be available in your distro's repositories, but is also available as a flatpak or snap and as an `.rpm`, `.deb` or tar archive from [its website](https://code.visualstudio.com/download). If you dislike the fact that it's made by Microsoft there should also be the open source binaries generally called `VSCodium` or just `code` available.

After that you should have all software for contributing to this project installed.

### Configuring the environment

Now we will download the actual repository and set up the environment for contributing. 

Before being able to, you will have to create your own fork of <a href="https://github.com/Willibald-Gluck-Gymnasium/wgg-homepage" target="_blank">this repository</a>, by clicking on the `Fork` button on the top right of GitHub and then clicking on your username. Any changes you make, commit and push will be on this fork and if you want the changes to be implemented you will have to create a Pull Request.

#### Windows configuration

- Open GitHub Desktop
- Log into GitHub Desktop
- Clone your fork of `wgg-homepage` into a directory of your choice, the default `C:\Users\USERNAME\Documents\GitHub\wgg-homepage` should be fine
- A popup should open, asking you wether you want to set the project up for contributing. Confirm this selection.
- Wait for everything to download
- Click on the button on the right `Open in Visual Studio Code`
- When Visual Studio Code finishes opening up, select that you trust the authors of the code
- Create a file `database.sqlite` in the directory `database`
- Right-click on this `database.sqlite` file and click on `Copy Path`
- Copy the file `.env.example` and rename the copy to `.env`.
- Open `.env`
- Replace the part after the '=' the line `DB_DATABASE=/absolute/path/to/database.sqlite` to the path you just copied.
- Save the file by pressing `Ctrl` + `S`
- Click on `Terminal` in the menu bar and then on `New Terminal`. After that a powershell should open on the bottom on the screen.
- Execute the following commands:
    ```
    composer install
    ```
    ```
    npm install
    ```
    ```
    php artisan migrate:fresh
    ```
    ```
    npm run watch
    ```
- When the last command finishes and you see the message that `webpack compiled successfully`, press `Ctrl` + `C` to cancel the process, as it will not automatically end.

And now the project should be readily configured for contributing on Windows.

#### macOS and Linux configuration

macOS and Linux make it far easier to run many commands at once, because of this and because they are both UNIX-based the configuring process is very similar between the two, which is why we will be able to use a lot of commands on bot OSes.

However, one thing is still different between the two OSes is how to clone the project.

- **macOS**: You will be able to use GitHub Desktop for cloning the project as on Windows
    - Open GitHub Desktop
    - Log into GitHub Desktop
    - Clone your fork of `wgg-homepage` into a directory of your choice, the default `/Users/USERNAME/Documents/GitHub/wgg-homepage` should be fine
    - A popup should open, asking you wether you want to set the project up for contributing. Confirm this selection.
    - Wait for everything to download
    - Click on the button on the right `Open in Visual Studio Code`
- **Linux**: You will need to use the git command line for cloning your fork:
    - Clone the repository by executing the following command in a directory of your choice:
        ```
        git clone https://github.com/USERNAME/wgg-homepage.git
        ```
    - Open VSCode or VSCodium or your editor of choice and open the folder you just cloned

The next step is to open a Terminal or shell in the directory you just cloned. In VSCode you can do this easily by clicking on `Terminal` in the menu bar and then on `New Terminal`. If you text editor of choice doesn't have an integrated Terminal, just open your system's terminal and use `cd` to change to the directory you just cloned. You should now have a shell prompt in a directory called `wgg-homepage`.

The next command can be copied and pasted into the shell and executed, almost everything is readily set up for contributing.

```
composer install && npm install && touch ./database/database.sqlite && sed "s/\/absolute\/path\/to/$(pwd | sed 's/\//\\\//g')\/database/g" .env.example > .env && php artisan migrate:fresh && npm run watch
```

The last command of this construct (`npm run watch`) will not exit once completed. It will only display a message that the webpack compilation was successful. To exit it and return to the shell press `Ctrl` + `C`.

If you are on **macOS** you can now just run:

```
valet link wgg
```

and you will be able to go to [wgg.test](wgg.test) in your browser and the site will display. For the other two Operating Systems you will have to execute a command each time you open the project in order for it to be displayed in your browser, but as every OS has to run one command anyways that should not be too much effort required.

## Use the environment

The environment is now ready to be used for development. If you try to push from VSCode/VSCodium/code it will ask you to log in when you do it for the first time, after that it should be seamless.

Because certain files need to be recompiled when changing them there is a command you will have to execute to watch for changes and recompile if there are any. The command is one we executed previously:

```
npm run watch
```

As said before this command will not exit and we don't want it to. It should remain running during the complete development process in order to watch for changes and recompile if needed.

For **Windows** and **Linux** we have to run another command each time, in another terminal, which you can open by going to `Terminal` in the menu bar and pressing on `New Terminal` again:

```
php artisan serve
```

This should start a php development server on port 8000 and you should be able to access the website in your browser by going to [localhost:8000](localhost:8000)