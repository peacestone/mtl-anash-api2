# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


file = File.open('./db/people.json', 'r')
json = file.read
file.close


people = JSON.parse(json)

people.each do |person| 
    Person.create(person)
end
