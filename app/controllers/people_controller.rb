class PeopleController < ApplicationController
    def index 
        @people = Person.all
        @people_first = Person.take(5) 
        @people_last = Person.last(5)
        @people_count = @people.count

        respond_to do |res|
            res.json {render json: @people}
            res.html
        end
    end

    def new
    end

    def create
        

        
        if (params[:people_csv].nil?) || (params[:people_csv].original_filename.last(3) != 'csv')
            redirect_to :new_person, notice: 'Invalid File Uploaded'
        else
            Person.all.destroy_all
            Person.create_from_csv(params.require(:people_csv).to_io)
            redirect_to '/people', notice: "Succsefully updated database!"
        end
        

    end

    
    
end
