class Api::ShopListsController < ApplicationController
  before_action :require_current_user!

  def create
    @shop_list = current_user.shop_lists.create(shop_list_params)
    if @shop_list.save
      render json: @shop_list
    else
      render json: @shop_list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @shop_list = current_user.shop_lists.find(params[:id])
    if @shop_list.update_attributes(shop_list_params)
      render json: @shop_list
    else
      render json: @shop_list.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @shop_list = current_user.shop_lists.find(params[:id])
    @shop_list.try(:destroy)
    render json: {}
  end

  private
  def shop_list_params
    params.require(:shop_list).require(:name)
  end
end
