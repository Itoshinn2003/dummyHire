Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  namespace :api do
    post "/student/create", to: "students#create"
    post "/student/signin", to: "students#signin"
    post "/student/profile", to: "students#profile"
    post "/student/update", to: "students#update"
    


    post "/company/profile", to: "companies#profile"
    post "/company/signin", to: "companies#signin"
    post "/company/update", to: "companies#update"


    post "/intern/create", to: "interns#create"
    post "/intern/show", to: "interns#show"
    delete "/interns/:id", to: "interns#destroy"
  end

  # Defines the root path route ("/")
  # root "posts#index"
end
