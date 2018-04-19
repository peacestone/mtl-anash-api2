Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/api/people', to: 'people#index', as: 'people'
  get '/people/new', to: 'people#new', as: 'new_person'
  post '/people', to: 'people#create', as: 'create_people'
end
