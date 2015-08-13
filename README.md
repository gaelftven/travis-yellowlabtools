# Setup a performance monitoring with Travis-CI and YellowLabTools

[Travis-CI](https://travis-ci.org/) is a Continuous Integration platform that automatically triggers your tests each time you push a commit to GitHub. It pops a virtual machine for your needs and you can do anything you want on it.

[YellowLabTools](http://yellowlab.tools) is an audit tool that loads a page in PhantomJS and detects front-end **bad practices** and **performance issues**.


## How to

1. Log into GitHub and click the **Fork** button.
2. Edit `Gruntfile.js` according to [this documentation](https://github.com/gmetais/grunt-yellowlabtools#usage-examples). You should be able to edit directly on GitHub's web interface.
3. Commit changes directly to master (the first of the two commit message fields is required, write anything)
4. Sign in to [Travis-CI](https://travis-ci.org/) with your GitHub login
5. Add a new repository and choose "travis-yellowlabtools". This will launch the first test. Adapt if needed, each commit will automatically trigger a new test.
6. Use [nightli.es](https://nightli.es/) to automatically trigger a GitHub commit once a day.



## Set up your API key

YellowLabTools doesn't allow more than 50 runs per day from the same IP address. One run = one url tested. If you put several urls in the Gruntfile, this will be several runs. As Travis-CI probably re-uses the same IP addresses on their virtual machines, you will share these 50 runs with fellow users. That's not much.

Ask for a YellowLabTools key by sending me a quick email (my address is on my GitHub profile). With this key, you'll be able to launch up to 50 runs per day, without sharing :)

Once you get the API key, open Travis-CI to the last run and click on "Settings". Insert your key in an Environment Variable called `API_KEY`. The next run will automatically use the key.



## Note about using Travis-CI and GitHub for a not-so-open-source projects

This is not the basic usage of Travis-CI, which should be used for Continuous Integration on open-source software, not for monitoring proprietary websites. However, I've made this Travis job as light as possible: it's not GPU intensive and all of the hard work is done on my YLT's server. I also sincerely hope that I can bring new users to discover the awesomeness of Travis-CI.

It's pretty much the same with GitHub.


