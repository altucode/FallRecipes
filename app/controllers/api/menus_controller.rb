class Api::MenusController < ApplicationController
  before_action :require_current_user!, except: [:show]

  def show
    @menu = Menu.find(params[:id])
  end

  def create
    @menu = current_user.menus.create(menu_params)

    if @menu.valid?
      current_user.notify(Menu.CREATED, @menu)
      render json: @menu
    else
      render json: @menu.errors.full_messages
    end
  end

  def destroy
    @menu = current_user.menus.find(params[:id])
    @menu.try(:destroy)
    render json: {}
  end

  def update
    @menu = current_user.menus.find(params[:id])

    if @menu.update_attributes(menu_params)
      @menu.notify(Menu.UPDATED)
      render json: @menu
    else
      render json: @menu.errors.full_messages
    end
  end

  private
  def menu_params
    params.require(:menu).permit(:name)
  end
end
