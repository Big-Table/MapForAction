Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/incidents', to: 'incidents#index'
  post '/incidents', to: 'incidents#create'
  resources :tweets 
  resources :actions 


end
