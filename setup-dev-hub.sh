# Get the private key from the environment variable
#echo "Setting up Dev Hub Connection..."
#mkdir keys
#echo ${SFDC_SERVER_KEY} | base64 -d > keys/server.key
#
## Authenticate to salesforce
#echo "Authenticating..."
#sfdx force:auth:jwt:grant --clientid ${SFDC_PROD_CLIENTID} --jwtkeyfile keys/server.key --username ${SFDC_PROD_USER} --setdefaultdevhubusername -a DevHub
sudo npm install -global sfdx-cli

sudo npm install -g json

sudo npm install -g slack-cli

FILE_NAME="sfdx-auth-url.txt"
# Creation of a temp file that contains Sfdx Auth Url
echo ${SFDX_AUTH_URL} > ${FILE_NAME}
# Login
echo "Authenticating..."
sfdx force:auth:sfdxurl:store -f ${FILE_NAME} -d -a DevHub
# Removing the file
rm ${FILE_NAME}
