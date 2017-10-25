class LaboratoriesController < ApplicationController
  def show
    @locations = Location.all
  end
end
