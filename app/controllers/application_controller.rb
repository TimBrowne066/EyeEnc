class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  @locations = Location.all

end
