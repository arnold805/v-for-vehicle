#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /v-for-vehicle/tmp/pids/server.pid

# Run the migrations
RAILS_ENV=$RAILS_ENV bundle exec rails db:create db:migrate

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
