class PeopleController < ApplicationController
    def index 
        people = Person.all 
        render json: people
    end

    def new
    end

    def create
        Person.create_from_csv(params[:people_csv].to_io)

        render plain: 'good job!'
    end
    
end
