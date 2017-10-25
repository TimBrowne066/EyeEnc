Rails.application.routes.draw do
  root to: "locations#index"
  resources :locations

  resource :glasses, only: [:show]
  resource :contacts, only: [:show]
  resource :insurances, only: [:show]
  resource :laboratory, only: [:show]


end
