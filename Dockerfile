# syntax=docker/dockerfile:1
FROM ruby:3.1.2
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client npm
WORKDIR /v-for-vehicle
# COPY Gemfile /v-for-vehicle/Gemfile
# COPY Gemfile.lock /v-for-vehicle/Gemfile.lock
COPY ./ /v-for-vehicle
RUN bundle install
# RUN yarn build
RUN npm install --global yarn
RUN yarn install --check-files
RUN bundle exec rails assets:clobber
RUN bundle exec rails assets:precompile

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]
