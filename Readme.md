# My personal webpage created in Hugo

# Files that can be changed:
 * config.toml
 * content/about.md
 * content/projects.md

# Code to generate a new static website
Start the Hugo server normally and stop it manually (Ctrl-c)
```commandline
hugo server --renderToDisk --logFile output.log --verboseLog --verbose --debug
```
After the Hugo server has been stopped, the static website will be on the folder named **public**.
# Testing the website locally
The best way to test the code locally is to run the above code, but this time do not stop it:
```commandline
hugo server --renderToDisk --logFile output.log --verboseLog --verbose --debug
```
With this server running, open a web browser with the URL: **http://localhost:1313/**
