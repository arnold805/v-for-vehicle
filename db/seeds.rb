# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "destroying vehicle seed data..."
Vehicle.destroy_all
puts "destroying vehicle seed data..."
Image.destroy_all

puts "seeding vehicles data..."

v1 = Vehicle.create(year: 2019, make: "Toyota", model: "Corolla", condition: "Used", price: 17000, odometer: 55584, engine_type: "gas", engine_displacement: "1.8 L", cylinder_count: 4, power: 158, torque: 138, transmission: "automatic", body_style: "sedan", drive_type: "FWD", interior_color: "grey", exterior_color: "green", zipcode: 43210)
v2 = Vehicle.create(year: 2019, make: "Honda", model: "Civic", condition: "Used", price: 12000, odometer: 74250, engine_type: "gas", engine_displacement: "2.0 L", cylinder_count: 4, power: 158, torque: 138, transmission: "manual", body_style: "sedan", drive_type: "FWD", interior_color: "black", exterior_color: "red", zipcode: 43210)
v3 = Vehicle.create(year: 2022, make: "Cadillac", model: "CT4 V", condition: "New", price: 45895, odometer: 0, engine_type: "gas", engine_displacement: "2.7 L", cylinder_count: 4, power: 325, torque: 380, transmission: "automatic", body_style: "sedan", drive_type: "AWD", interior_color: "black", exterior_color: "black", zipcode: 43210)
v4 = Vehicle.create(year: 2006, make: "BMW", model: "330i", condition: "Used", price: 8000, odometer: 174500, engine_type: "gas", engine_displacement: "3.0 L", cylinder_count: 6, power: 255, torque: 220, transmission: "manual", body_style: "sedan", drive_type: "RWD", interior_color: "beige", exterior_color: "blue", zipcode: 43210)
v5 = Vehicle.create(year: 1991, make: "Dodge", model: "Dakota", condition: "Used", price: 4000, odometer: 225500, engine_type: "gas", engine_displacement: "3.9 L", cylinder_count: 6, power: 150, torque: 205, transmission: "automatic", body_style: "truck", drive_type: "4WD", interior_color: "grey", exterior_color: "red", zipcode: 43210)
v6 = Vehicle.create(year: 2019, make: "Porsche", model: "944", condition: "Used", price: 11500, odometer: 35000, engine_type: "gas", engine_displacement: "2.5 L", cylinder_count: 4, power: 161, torque: 142, transmission: "manual", body_style: "coupe", drive_type: "RWD", interior_color: "beige", exterior_color: "white", zipcode: 43210)
v7 = Vehicle.create(year: 2019, make: "VW", model: "Golf GTI", condition: "new", price: 35000, odometer: 0, engine_type: "gas", engine_displacement: "2.0 L", cylinder_count: 4, power: 241, torque: 273, transmission: "manual", body_style: "hatchback", drive_type: "FWD", interior_color: "black", exterior_color: "grey", zipcode: 43210)
v8 = Vehicle.create(year: 2019, make: "Chevrolet", model: "Suburban", condition: "Used", price: 7500, odometer: 125000, engine_type: "gas", engine_displacement: "5.7 L", cylinder_count: 4, power: 225, torque: 330, transmission: "automatic", body_style: "suv", drive_type: "4WD", interior_color: "beige", exterior_color: "green", zipcode: 43210)
v9 = Vehicle.create(year: 2019, make: "Toyota", model: "Prius", condition: "new", price: 25075, odometer: 0, engine_type: "hybrid", engine_displacement: "1.8 L", cylinder_count: 4, power: 121, torque: 105, transmission: "automatic", body_style: "hatchback", drive_type: "FWD", interior_color: "beige", exterior_color: "silver", zipcode: 43210)
v10 = Vehicle.create(year: 2019, make: "Ram", model: "1500", condition: "new", price: 48340, odometer: 0, engine_type: "diesel", engine_displacement: "3.0 L", cylinder_count: 6, power: 260, torque: 410, transmission: "automatic", body_style: "truck", drive_type: "4WD", interior_color: "black", exterior_color: "red", zipcode: 43210)
v11 = Vehicle.create(year: 1998, make: "BMW", model: "M3", condition: "used", price: 17500, odometer: 84250, engine_type: "gas", engine_displacement: "3.2 L", cylinder_count: 6, power: 240, torque: 236, transmission: "manual", body_style: "coupe", drive_type: "RWD", interior_color: "black", exterior_color: "black", zipcode: 43210)

puts "vehicle data seeded"

puts "seeding images data..."

Image.create(img_url: "https://images.autotrader.com/hn/c/d471e05f4cbd453b98f48d4d2a1de7cb.jpg", vehicle: v1)
Image.create(img_url: "https://images.autotrader.com/hn/c/ea4a2965a37a4c258d429bbb72db72d1.jpg", vehicle: v1)
Image.create(img_url: "https://images.autotrader.com/hn/c/f5379056bc934e5aba81485e2a622b11.jpg", vehicle: v1)
Image.create(img_url: "https://images.autotrader.com/hn/c/348de3fd1943447e883de676eff021fa.jpg", vehicle: v1)
Image.create(img_url: "https://images.autotrader.com/hn/c/4de16927441346ed96543f95ab9601cc.jpg", vehicle: v1)
Image.create(img_url: "https://images.autotrader.com/hn/c/0ecad26dc68c48a8887ecce2291b9f8f.jpg", vehicle: v1)
Image.create(img_url: "https://images.autotrader.com/hn/c/efd5edf2ec704b71866bf8ca76f26a59.jpg", vehicle: v1)
Image.create(img_url: "https://images.autotrader.com/hn/c/be74182223b640d7a93bf82865884d34.jpg", vehicle: v1)
Image.create(img_url: "https://images.autotrader.com/hn/c/fb867b136df1448aa8b67f09467fd737.jpg", vehicle: v1)

Image.create(img_url: "https://www.cnet.com/a/img/resize/5ad5ba0e3b30db7b737df5b99ef6096791fd133f/hub/2019/05/20/206ebe75-ceca-4a48-85f9-0ee77584d676/2019-honda-civic-touring-sedan-ogi-1.jpg?auto=webp&fit=crop&height=675&width=1200", vehicle: v2)

Image.create(img_url: "https://cloudflareimages.dealereprocess.com/resrc/images/c_limit,fl_lossy,w_700/v1/dvp/1631/5349286460/Used-2022-Cadillac-CT4-V-V-Series-ID5349286460-aHR0cDovL2ltYWdlcy51bml0c2ludmVudG9yeS5jb20vdXBsb2Fkcy9waG90b3MvMC8yMDIyLTAyLTIyLzEtNzQyNDM4OS02MjE1MzI0YTZjYmZkLmpwZw==", vehicle: v3)

Image.create(img_url: "https://bringatrailer.com/wp-content/uploads/2022/01/1999_chevrolet_suburban_d083c5f5-76d5-46f7-8bdb-3d141ae304aa-1-20305.jpeg?fit=940%2C627", vehicle: v8)

Image.create(img_url: "https://upload.wikimedia.org/wikipedia/commons/f/fc/BMW_M3_E36_coupe.jpg?20061121092403", vehicle: v11)



puts "images data seeded"
