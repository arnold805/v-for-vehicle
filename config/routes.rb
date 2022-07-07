Rails.application.routes.draw do
  match '*path', constraints: { format: 'html' }, to: "root#index", via: [:get]
  resources :users, only: [:create]

  # Initially Authenticate User
  get '/authorized_user', to: 'users#show'

  # Login / Logout Routes
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  root 'root#index'
end
