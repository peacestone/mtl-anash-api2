require 'csv'    

class Person < ApplicationRecord

    def self.create_from_csv(csv_people_file) 
        
        CSV.foreach(csv_people_file, headers: true) do |row| 
            Person.create!(row.to_h)
        end
    end
end


['first_name', 'last_name', 'address', 'city', 'state', 'zip_code', 'country', 'phone_number']