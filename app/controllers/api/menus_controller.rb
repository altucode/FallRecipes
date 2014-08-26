class Api::MenusController < ApplicationController
  before_action :require_current_user!

  def show

  end

  def create
    @menu = current_user.menus.create(menu_params)

    if @menu.save
      render json: @menu
    else
      render json: @menu.errors.full_messages
    end
  end

  private
  def menu_params
    params.require(:menu).permit(:name, recipes: [])
  end
end
