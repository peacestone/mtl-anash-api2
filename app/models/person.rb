require 'csv'    

class Person < ApplicationRecord
    validates :first_name, :last_name, :address, :city, :state, :zip_code, :country, :phone_number, presence: true

    def self.create_from_csv(csv_people_file) 
        
        CSV.foreach(csv_people_file, headers: true) do |row| 
            Person.create!(row.to_h)
        end
    end
end


