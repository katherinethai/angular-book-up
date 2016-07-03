Rails.application.routes.draw do
  root 'application#index'

  scope 'api' do 
    get 'all', to: 'books#all'
    resources :books
  end
  get '*path', to: 'application#index'
end
