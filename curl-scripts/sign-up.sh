#!/bin/bash sh curl-scripts/sign-up.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
  "credentials": {
    "email": "'"${EMAIL}"'",
    "password": "'"${PASSWORD}"'",
    "password_confirmation": "'"${PASSWORD}"'"
  }
}'

echo
