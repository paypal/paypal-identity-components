#/bin/sh

# Publish and push!
git push;
git push --tags;
git push git@github.com:paypal/paypal-identity-components.git main;
npm publish;
