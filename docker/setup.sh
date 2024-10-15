#!/bin/sh

# Install dependencies
yarn install

# Wait for the dependencies to be available
/opt/bin/wait-for-it.sh qik_postgres.postgres:5432 --timeout=0

# Generate the prisma types
yarn db:generate

# Run migrations
yarn db:migrate

# Seed the database
yarn db:seed

# Run the process
# yarn start:dev

tail -f /dev/null