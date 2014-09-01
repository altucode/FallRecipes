Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :update] do
      resources :recipe_boxes, only: [:index]
      resources :menus, only: [:index]
    end
    resources :recipes, only: [:create, :destroy, :index, :show, :update] do
      resources :reviews, only: [:index]
    end
    resources :recipe_boxes, only: [:create, :destroy, :update]
    resources :menus, only: [:create, :destroy, :update]
    resources :reviews, only: [:create, :destroy, :update]
    resources :subscriptions, only: [:create, :destroy]
    resources :notifications, only: [:create, :destroy]
  end

  resource :static_pages, only: [:root]

  resource :session, only: [:create, :destroy]

  resources :users, only: [:new, :create]
end
