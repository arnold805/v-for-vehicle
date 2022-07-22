Rails.application.routes.draw do
  namespace :api, constraints: { format: 'json' } do
    # Initially Authenticate User
    get '/authorized_user', to: 'users#show'

    # Login / Logout Routes
    post '/login', to: 'sessions#login'
    delete '/logout', to: 'sessions#logout'
    resources :password_reset, only: [:create]

    resources :users, only: [:create]
    resources :vehicles, only: [:index, :show, :create, :destroy] do 
      member do
        post :favorite
      end
    end
  end

  root 'root#index'
  match '*path', constraints: { format: 'html' }, to: "root#index", via: [:get]
end
