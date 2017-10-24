class ContactsController < ApplicationController
  def show
    @locations = Location.all
  end
end
