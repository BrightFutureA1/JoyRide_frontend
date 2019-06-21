class JoyridesController < ApplicationController
  before_action :set_joyride, only: [:show, :update, :destroy]

  # GET /joyrides
  def index
    @joyrides = Joyride.all

    render json: @joyrides
  end

  # GET /joyrides/1
  def show
    render json: @joyride
  end

  # POST /joyrides
  def create
    @joyride = Joyride.new(joyride_params)

    if @joyride.save
      render json: @joyride, status: :created, location: @joyride
    else
      render json: @joyride.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /joyrides/1
  def update
    if @joyride.update(joyride_params)
      render json: @joyride
    else
      render json: @joyride.errors, status: :unprocessable_entity
    end
  end

  # DELETE /joyrides/1
  def destroy
    @joyride.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_joyride
      @joyride = Joyride.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def joyride_params
      params.require(:joyride).permit(:name, :image, :location, :comments)
    end
end
