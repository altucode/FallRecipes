class Api::ShopItemsController < ApplicationController
  before_action :require_current_user!

  def create
    @shop_item = current_shop_list.find_by(usda_id: USDAIngredient.find_by_name(params[:shop_item][:name]).id)
    @shop_item ||= current_shop_list.create(shop_item_params)
    if @shop_item.save
      render json: @shop_item
    else
      render json: @shop_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    @shop_item = ShopItem.find(params[:id])
    if @shop_item.update_attributes(shop_item_params)
      render json: @shop_item
    else
      render json: @shop_item.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @shop_item = ShopItem.find(params[:id])
    @shop_item.try(:destroy)
    render json: {}
  end

  private
  def current_shop_list
    if params[:id]
      @shop_item = ShopItem.find(params[:id])
      @shop_list = @shop_item.shop_list
    else
      @shop_list = ShopList.find(params[:shop_item][:shop_list_id])
    end
  end

  def shop_item_params
    params.require(:shop_item).permit(:name, :unit, :unit_qty)
  end
end
