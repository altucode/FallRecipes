Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update]
    resources :recipes, only: [:create, :destroy, :index, :show, :update]
    resources :recipe_boxes, only: [:create, :destroy, :update]
    resources :menus, only: [:create, :destroy, :update]
    resources :reviews, only: [:create, :destroy, :update]
    resources :favorites, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end

  resource :static_pages, only: [:root]

  resource :session, only: [:new, :create, :destroy]

  resources :users, only: [:new]
end
