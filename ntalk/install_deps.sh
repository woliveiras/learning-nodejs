echo "This script is for Ubuntu 16.04"

echo "Add apt-key and repository on sources.list"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list

echo "Updating packages"
sudo apt-get update

echo "Installing MongoDB"
sudo apt-get install -y mongodb-org

sudo service mongod start