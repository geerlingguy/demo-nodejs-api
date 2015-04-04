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

<iframe width="160" height="400" src="https://leanpub.com/ansible-for-devops/embed" frameborder="0" allowtransparency="true"></iframe>
[![Ansible for DevOps Cover](https://s3.amazonaws.com/titlepages.leanpub.com/ansible-for-devops/medium)](https://leanpub.com/ansible-for-devops)

You can buy [Ansible for DevOps](https://leanpub.com/ansible-for-devops) on LeanPub.
