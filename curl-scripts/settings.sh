#!/bin/bash token + old pw + new pw sh curl-scripts/change-pw.sh

curl "https://tic-tac-toe-wdi.herokuapp.com/settings" \
--include \
--request GET \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}"

echo
