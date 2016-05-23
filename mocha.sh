
vagrant up yosemite
vagrant ssh yosemite -c "sh /Users/vagrant/wd/vagrant/node-setup-mac.sh"
vagrant ssh yosemite -c "sh /Users/vagrant/wd/vagrant/run-tests-mac.sh"
vagrant halt yosemite
