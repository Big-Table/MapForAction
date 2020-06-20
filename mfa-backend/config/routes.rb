Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/incidents', to: 'incidents#index'
  post '/incidents', to: 'incidents#create'
  get '/incidents/tweets/:id', to: 'incidents#incidents_tweets'
  post '/incidents/:id', to: 'incidents#approved'
  post '/incidents/:id', to: 'incidents#rejected'

  post '/actions', to: 'actions#create'
  
  resources :tweets 
  resources :actions 


end
