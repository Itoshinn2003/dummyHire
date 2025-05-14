Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do

    resources :students, only: [:create, :update] do
      collection do
        post :signin
        post :profile
      end
    end


    resources :companies, only: [:show, :update] do
      collection do
        post :profile
        post :signin
      end
    end
  
    resources :interns, only: [:index, :show, :create, :destroy] do
    end
  end

  # Defines the root path route ("/")
  # root "posts#index"
end
