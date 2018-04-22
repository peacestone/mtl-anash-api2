require 'csv'    

class Person < ApplicationRecord

    def self.create_from_csv(csv_people_file) 
        
        CSV.foreach(csv_people_file, headers: true) do |row| 
        puts row['hi']
        end
    end
end


