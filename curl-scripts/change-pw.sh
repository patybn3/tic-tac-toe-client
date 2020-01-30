#!/bin/bash token + old pw + new pw sh curl-scripts/change-pw.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/change-password" \
--include \
--request PATCH \
--header "Authorization: Token token=${TOKEN}" \
--header "Content-Type: application/json" \
--data '{
  "passwords": {
    "old": "'"${OLDPW}"'",
    "new": "'"${NEWPW}"'"
  }
}'

echo
