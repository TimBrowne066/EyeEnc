class GlassesController < ApplicationController
  def show
    @locations = Location.all
  end
end
