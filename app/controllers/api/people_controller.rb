class Api::PeopleController < ApplicationController
  skip_before_action :require_login
  def index 
    @people = Person.all.order(:last_name)
    render json: @people
  end
end
