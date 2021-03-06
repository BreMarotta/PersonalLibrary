Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'


  # resources :books
  # resources :groups, only: [:index, :create, :show]
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
