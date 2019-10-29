echo -e "************************************"
echo -e "Authenticating Shell using Azure CLI"
echo -e "************************************\n"

subscriptions="$(az.cmd login -o tsv | awk 'BEGIN { FS = "\t" } ; { print $2 " | " $4 }')"

echo "Subscription ID                      | Subscription Name"
echo "------------------------------------ | ------------------------------------"
echo "$subscriptions"

echo -e "\nEnter Subscription ID:"
read azure_subscription

echo -e "Setting account subscription"
az.cmd account set --subscription="${azure_subscription}"