Rails.application.routes.draw do
  root 'application#index'
  scope 'api' do 
    resources :books
  end
  get '*path', to: 'application#index'
end
