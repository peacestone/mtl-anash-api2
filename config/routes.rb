Rails.application.routes.draw do
  get  '/', to: 'session#new', as: 'new_session'
  post '/session', to: 'session#create', as: 'login'
  delete '/session', to: 'session#destroy', as: 'logout'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/api/people', to: 'people#index', as: 'people'
  get '/people', to: 'people#index'
  get '/people/new', to: 'people#new', as: 'new_person'
  post '/people', to: 'people#create', as: 'create_people'
  get 'react', to: 'home#index'
end
