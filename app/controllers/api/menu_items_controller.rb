class Api::MenuItemsController < ApplicationController
  before_action :require_current_user!

  def create
    @menu_item = current_menu.menu_items.create(menu_params)

    if @menu_item.valid?
      @menu_item.menu.notify(Menu.UPDATED)
      render json: @menu_item
    else
      render json: @menu_item.errors.full_messages
    end
  end

  def destroy
    @menu_item = MenuItem.find(params[:id])
    if @menu_item.try(:destroy)
      @menu_item.menu.notify(UPDATED)
    end
    render json: {}
  end

  private
  def current_menu
    if params[:id]
      @menu_item = MenuItem.find(params[:id])
      @menu = @menu_item.menu
    else
      @menu = Recipe.find(params[:menu_item][:menu_id])
    end
  end

  def menu_params
    params.require(:menu_item).permit(:recipe_id)
  end
end
