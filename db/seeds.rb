# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "seeding vehicles data..."

Vehicle.create(year: 2019, make: "Honda", model: "Civic", condition: "Used", price: 12000, odometer: 74250, engine_type: "gas", engine_displacement: "2.0 L", cylinder_count: 4, power: 158, torque: 138, transmission: "manual", body_style: "sedan", drive_type: "FWD", interior_color: "black", exterior_color: "red", zipcode: 43210)
Vehicle.create(year: 2022, make: "Cadillac", model: "CT4 V", condition: "New", price: 45895, odometer: 0, engine_type: "gas", engine_displacement: "2.7 L", cylinder_count: 4, power: 325, torque: 380, transmission: "automatic", body_style: "sedan", drive_type: "AWD", interior_color: "black", exterior_color: "black", zipcode: 43210)
Vehicle.create(year: 2006, make: "BMW", model: "330i", condition: "Used", price: 8000, odometer: 174500, engine_type: "gas", engine_displacement: "3.0 L", cylinder_count: 6, power: 255, torque: 220, transmission: "manual", body_style: "sedan", drive_type: "RWD", interior_color: "beige", exterior_color: "blue", zipcode: 43210)
Vehicle.create(year: 1991, make: "Dodge", model: "Dakota", condition: "Used", price: 4000, odometer: 225500, engine_type: "gas", engine_displacement: "3.9 L", cylinder_count: 6, power: 150, torque: 205, transmission: "automatic", body_style: "truck", drive_type: "4WD", interior_color: "grey", exterior_color: "red", zipcode: 43210)
Vehicle.create(year: 2019, make: "Porsche", model: "944", condition: "Used", price: 11500, odometer: 35000, engine_type: "gas", engine_displacement: "2.5 L", cylinder_count: 4, power: 161, torque: 142, transmission: "manual", body_style: "coupe", drive_type: "RWD", interior_color: "beige", exterior_color: "white", zipcode: 43210)
Vehicle.create(year: 2019, make: "VW", model: "Golf GTI", condition: "new", price: 35000, odometer: 0, engine_type: "gas", engine_displacement: "2.0 L", cylinder_count: 4, power: 241, torque: 273, transmission: "manual", body_style: "hatchback", drive_type: "FWD", interior_color: "black", exterior_color: "grey", zipcode: 43210)
Vehicle.create(year: 2019, make: "Chevrolet", model: "Suburban", condition: "Used", price: 7500, odometer: 125000, engine_type: "gas", engine_displacement: "5.7 L", cylinder_count: 4, power: 225, torque: 330, transmission: "automatic", body_style: "suv", drive_type: "4WD", interior_color: "grey", exterior_color: "grey", zipcode: 43210)
Vehicle.create(year: 2019, make: "Toyota", model: "Prius", condition: "new", price: 25075, odometer: 0, engine_type: "hybrid", engine_displacement: "1.8 L", cylinder_count: 4, power: 121, torque: 105, transmission: "automatic", body_style: "hatchback", drive_type: "FWD", interior_color: "beige", exterior_color: "silver", zipcode: 43210)
Vehicle.create(year: 2019, make: "Ram", model: "1500", condition: "new", price: 48340, odometer: 0, engine_type: "diesel", engine_displacement: "3.0 L", cylinder_count: 6, power: 260, torque: 410, transmission: "automatic", body_style: "truck", drive_type: "4WD", interior_color: "black", exterior_color: "red", zipcode: 43210)

puts "vehicle data seeded"
