Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
<<<<<<< HEAD
  resources :tweets 
  resources :actions 

  get '/incidents', to: 'incidents#index'

=======

  get '/incidents', to: 'incidents#index'

  resources :tweets 
  resources :actions 


>>>>>>> f8b5883b423669930db7d15c0422a5ea61b7e668
end
