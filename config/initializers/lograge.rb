Rails.application.configure do
    config.lograge.enabled = true
    config.lograge.base_controller_class = ['ActionController::API', 'ActionController::Base']

    config.lograge.formatter = Lograge::Formatters::Logstash.new
  
    # add time to lograge
    config.lograge.custom_options = lambda do |event|
      { time: Time.now }
    end
end