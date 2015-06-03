Rails.application.routes.draw do
  root 'client#index'

  get '/users', to: 'application#users', as: :users
end
