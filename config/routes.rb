Rails.application.routes.draw do
  
  namespace :api do
    get '/people', to: 'people#index', as: 'json_people'
  end
  
  get  '/login', to: 'session#new', as: 'new_session'
  post '/session', to: 'session#create', as: 'login'
  delete '/logout', to: 'session#destroy', as: 'logout'
  get '/people', to: 'people#index'
  get '/people/new', to: 'people#new', as: 'new_person'
  post '/people', to: 'people#create', as: 'create_people'
  root to: 'home#index'
end
