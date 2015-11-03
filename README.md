# Demonstration Node.js API Application

[![Build Status](https://travis-ci.org/geerlingguy/demo-nodejs-api.svg?branch=master)](https://travis-ci.org/geerlingguy/demo-nodejs-api)

This repository contains an extremely simple Node.js API app.

The app is meant for demonstration purposes in [Ansible for DevOps](http://ansiblefordevops.com/), a book on [Ansible](http://www.ansible.com/) by [Jeff Geerling](http://jeffgeerling.com/). See, specifically, the [rolling deployments example](https://github.com/geerlingguy/ansible-for-devops/tree/master/rolling-deployments) in the official Ansible for DevOps repository.

If you'd like to run the example locally, make sure you have Node.js and `npm` installed, then do the following (from within this repository's directory):

  1. `npm install`
  2. `node app.js`

After the app starts listening, you should be able to send a request to `http://localhost:8080/hello/dave`, and get back a response like `hello dave`.

## License

MIT

## Buy the Book

[![Ansible for DevOps Cover](https://s3.amazonaws.com/titlepages.leanpub.com/ansible-for-devops/medium)](http://www.ansiblefordevops.com/)

Buy [Ansible for DevOps](http://www.ansiblefordevops.com/) for your e-reader or in paperback format.
