class LocationsController < ApplicationController
  def index
    @locations = Location.all
  end

  def show
    @locations = Location.all
    @location = Location.find(params[:id])
  end

end
