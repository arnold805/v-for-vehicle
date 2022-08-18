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
v2 = Vehicle.create(year: 2019, make: "Honda", model: "Civic", condition: "Used", price: 12000, odometer: 74250, engine_type: "gas", engine_displacement: "2.0 L", cylinder_count: 4, power: 158, torque: 138, transmission: "manual", body_style: "sedan", drive_type: "FWD", interior_color: "black", exterior_color: "black", zipcode: 43210)
v3 = Vehicle.create(year: 2022, make: "Cadillac", model: "XT4", condition: "New", price: 53305, odometer: 0, engine_type: "gas", engine_displacement: "2.0 L", cylinder_count: 4, power: 237, torque: 258, transmission: "automatic", body_style: "SUV", drive_type: "AWD", interior_color: "black", exterior_color: "black", zipcode: 43210)
v4 = Vehicle.create(year: 2003, make: "BMW", model: "330i", condition: "Used", price: 8000, odometer: 127000, engine_type: "gas", engine_displacement: "3.0 L", cylinder_count: 6, power: 255, torque: 220, transmission: "automatic", body_style: "sedan", drive_type: "RWD", interior_color: "tan", exterior_color: "blue", zipcode: 43210)
v5 = Vehicle.create(year: 1998, make: "Dodge", model: "Dakota", condition: "Used", price: 7999, odometer: 125500, engine_type: "gas", engine_displacement: "3.9 L", cylinder_count: 6, power: 175, torque: 230, transmission: "automatic", body_style: "truck", drive_type: "4WD", interior_color: "grey", exterior_color: "red", zipcode: 43210)
v6 = Vehicle.create(year: 1984, make: "Porsche", model: "944", condition: "Used", price: 11500, odometer: 35000, engine_type: "gas", engine_displacement: "2.5 L", cylinder_count: 4, power: 161, torque: 142, transmission: "manual", body_style: "coupe", drive_type: "RWD", interior_color: "black", exterior_color: "red", zipcode: 43210)
v7 = Vehicle.create(year: 2022, make: "Volkswagen", model: "GTI", condition: "new", price: 35000, odometer: 0, engine_type: "gas", engine_displacement: "2.0 L", cylinder_count: 4, power: 241, torque: 273, transmission: "manual", body_style: "hatchback", drive_type: "FWD", interior_color: "black", exterior_color: "silver", zipcode: 43210)
v8 = Vehicle.create(year: 1999, make: "Chevrolet", model: "Suburban", condition: "Used", price: 200, odometer: 225000, engine_type: "gas", engine_displacement: "5.7 L", cylinder_count: 4, power: 225, torque: 330, transmission: "automatic", body_style: "suv", drive_type: "4WD", interior_color: "grey", exterior_color: "grey", zipcode: 43210)
v9 = Vehicle.create(year: 2019, make: "Toyota", model: "Prius", condition: "new", price: 25075, odometer: 0, engine_type: "hybrid", engine_displacement: "1.8 L", cylinder_count: 4, power: 121, torque: 105, transmission: "automatic", body_style: "hatchback", drive_type: "FWD", interior_color: "grey", exterior_color: "blue", zipcode: 43210)
v10 = Vehicle.create(year: 2022, make: "Ram", model: "1500", condition: "new", price: 48340, odometer: 0, engine_type: "diesel", engine_displacement: "3.0 L", cylinder_count: 6, power: 260, torque: 410, transmission: "automatic", body_style: "truck", drive_type: "4WD", interior_color: "black", exterior_color: "black", zipcode: 43210)
v11 = Vehicle.create(year: 1995, make: "BMW", model: "M3", condition: "used", price: 17500, odometer: 84250, engine_type: "gas", engine_displacement: "3.2 L", cylinder_count: 6, power: 240, torque: 236, transmission: "manual", body_style: "coupe", drive_type: "RWD", interior_color: "black", exterior_color: "black", zipcode: 43210)

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

Image.create(img_url: "https://images.autotrader.com/hn/c/814672a800ef4f54b6bf090af3468bf3.jpg", vehicle: v2)
Image.create(img_url: "https://images.autotrader.com/hn/c/249cb0c9a6224f408761ae68cdfa5445.jpg", vehicle: v2)
Image.create(img_url: "https://images.autotrader.com/hn/c/adb60245925d4a79a7078e8bf73139ef.jpg", vehicle: v2)
Image.create(img_url: "https://images.autotrader.com/hn/c/81e4a6daac604f59b88b5a8a884d1658.jpg", vehicle: v2)
Image.create(img_url: "https://images.autotrader.com/hn/c/eac7452f83ef41e4b1d6c0bcd60a31c9.jpg", vehicle: v2)
Image.create(img_url: "https://images.autotrader.com/hn/c/bda292595f054482a13974b40edf91ef.jpg", vehicle: v2)
Image.create(img_url: "https://images.autotrader.com/hn/c/8ebc657b76f34795a5bdc31e824ba86c.jpg", vehicle: v2)
Image.create(img_url: "https://images.autotrader.com/hn/c/088225187d7f4cef9938c4642e71aa10.jpg", vehicle: v2)
Image.create(img_url: "https://images.autotrader.com/hn/c/832d9207b4764263ba8670fd1e50e804.jpg", vehicle: v2)

Image.create(img_url: "https://images.autotrader.com/hn/c/71d22c8327824930aea6a1f87dfcf1ff.jpg", vehicle: v3)
Image.create(img_url: "https://images.autotrader.com/hn/c/f420958b6fd74d11926a92b49ffedd01.jpg", vehicle: v3)
Image.create(img_url: "https://images.autotrader.com/hn/c/ae82da0669874033bc8c6183b0f9ac22.jpg", vehicle: v3)
Image.create(img_url: "https://images.autotrader.com/hn/c/752c340e8d83444da2c160bc9ba41687.jpg", vehicle: v3)
Image.create(img_url: "https://images.autotrader.com/hn/c/5f29711446e6459db5cfeb00f327896e.jpg", vehicle: v3)

Image.create(img_url: "https://images.autotrader.com/images/2022/8/10/652/935/43716575209.652935678.IM1.MAIN.1600x1200_A.1600x1200.jpg", vehicle: v4)
Image.create(img_url: "https://images.autotrader.com/images/2022/8/10/652/935/43716575210.652935678.IM1.02.1600x1200_A.1600x1200.jpg", vehicle: v4)
Image.create(img_url: "https://images.autotrader.com/images/2022/8/10/652/935/43716575211.652935678.IM1.03.1600x1200_A.1600x1200.jpg", vehicle: v4)
Image.create(img_url: "https://images.autotrader.com/images/2022/8/10/652/935/43716575212.652935678.IM1.04.1600x1200_A.1600x1200.jpg", vehicle: v4)
Image.create(img_url: "https://images.autotrader.com/images/2022/8/10/652/935/43716575213.652935678.IM1.05.1600x1200_A.1600x1200.jpg", vehicle: v4)

Image.create(img_url: "https://images.autotrader.com/hn/c/bcaad8eb7c964be79385bff971039059.jpg", vehicle: v5)
Image.create(img_url: "https://images.autotrader.com/hn/c/ea03461766a7456ead7a6737d8095012.jpg", vehicle: v5)
Image.create(img_url: "https://images.autotrader.com/hn/c/ee11470ca23249efb4739972aff8e1b7.jpg", vehicle: v5)
Image.create(img_url: "https://images.autotrader.com/hn/c/b660468a17c948fe9856d12798405eff.jpg", vehicle: v5)
Image.create(img_url: "https://images.autotrader.com/hn/c/51331229e2c249b3ab433e41090a0e38.jpg", vehicle: v5)
Image.create(img_url: "https://images.autotrader.com/hn/c/e5fc479a78db45ef93243d795294a3d2.jpg", vehicle: v5)
Image.create(img_url: "https://images.autotrader.com/hn/c/1c2d6278af6e4b5dbbac9cf9f34fb392.jpg", vehicle: v5)
Image.create(img_url: "https://images.autotrader.com/hn/c/ef0a8883642b46019cf7d898711fb975.jpg", vehicle: v5)

Image.create(img_url: "https://0.cdn.autotraderspecialty.com/1984-Porsche-944-Import%20Classics--Car-101749211-0c7cc348614a3ac866115c614be7cac0.jpg?c=%2523f5f5f5&h=551&r=pad&w=735", vehicle: v6)
Image.create(img_url: "https://1.cdn.autotraderspecialty.com/1984-Porsche-944-Import%20Classics--Car-101749211-7285ada7bb940e8ede0e41bcad241798.jpg?c=%2523f5f5f5&h=551&r=pad&w=735", vehicle: v6)
Image.create(img_url: "https://0.cdn.autotraderspecialty.com/1984-Porsche-944-Import%20Classics--Car-101749211-ba093c295e895c63c4e44f32095dbb58.jpg?c=%2523f5f5f5&h=551&r=pad&w=735", vehicle: v6)
Image.create(img_url: "https://0.cdn.autotraderspecialty.com/1984-Porsche-944-Import%20Classics--Car-101749211-78108f9cb48cee82145875799ebc2635.jpg?c=%2523f5f5f5&h=551&r=pad&w=735", vehicle: v6)
Image.create(img_url: "https://0.cdn.autotraderspecialty.com/1984-Porsche-944-Import%20Classics--Car-101749211-99cca284d00df4114843890f72ff565d.jpg?c=%2523f5f5f5&h=551&r=pad&w=735", vehicle: v6)

Image.create(img_url: "https://images.autotrader.com/hn/c/875335de794b49e1bb9666591afd4148.jpg", vehicle: v7)
Image.create(img_url: "https://images.autotrader.com/hn/c/66efe46d38ec4b6180b633253ae45774.jpg", vehicle: v7)
Image.create(img_url: "https://images.autotrader.com/hn/c/2d681ef80c27492abebcbd893b610fdb.jpg", vehicle: v7)
Image.create(img_url: "https://images.autotrader.com/hn/c/3b795c9c0b8b4ce090346db3ebbe63df.jpg", vehicle: v7)
Image.create(img_url: "https://images.autotrader.com/hn/c/8de00b14824745a987b185dd41d5bbb8.jpg", vehicle: v7)
Image.create(img_url: "https://images.autotrader.com/hn/c/01a1db365bb544c7938687a50421ba20.jpg", vehicle: v7)
Image.create(img_url: "https://images.autotrader.com/hn/c/c1dc3bb40185451ea3d94766c13b6148.jpg", vehicle: v7)
Image.create(img_url: "https://images.autotrader.com/hn/c/f94d5cd2e1814c45a67ed3dfc12cbe8f.jpg", vehicle: v7)
Image.create(img_url: "https://images.autotrader.com/hn/c/838677e0915a4d9585e2a3f3db07074f.jpg", vehicle: v7)

Image.create(img_url: "https://images.autotrader.com/hn/c/6ac2e9b08db44c9398eef18f991aec23.jpg", vehicle: v8)
Image.create(img_url: "https://images.autotrader.com/hn/c/601cf684c5ce410d994da11741328ba8.jpg", vehicle: v8)
Image.create(img_url: "https://images.autotrader.com/hn/c/12902be1dda848a69ff7212def30dcff.jpg", vehicle: v8)
Image.create(img_url: "https://images.autotrader.com/hn/c/217fa8b542a54def879dd05e2f2468d0.jpg", vehicle: v8)
Image.create(img_url: "https://images.autotrader.com/hn/c/45fc737fe34f4e1cad05e48ba37aaa8b.jpg", vehicle: v8)
Image.create(img_url: "https://images.autotrader.com/hn/c/391e14dab9344558ba0a207211c7783e.jpg", vehicle: v8)

Image.create(img_url: "https://images.autotrader.com/hn/c/3ed060b6a6d047a4ba1a9f218a16ba4c.jpg", vehicle: v9)
Image.create(img_url: "https://images.autotrader.com/hn/c/07aab37f1a3f48fe8e01afebc059d44e.jpg", vehicle: v9)
Image.create(img_url: "https://images.autotrader.com/hn/c/c44508f86e5e48aba78a76125d21d410.jpg", vehicle: v9)
Image.create(img_url: "https://images.autotrader.com/hn/c/ae0b126fd8e54cb0b8a622a32f27ccb9.jpg", vehicle: v9)
Image.create(img_url: "https://images.autotrader.com/hn/c/7387557f2e4649aeb1c8feb8cba2e74f.jpg", vehicle: v9)
Image.create(img_url: "https://images.autotrader.com/hn/c/20b35e19a5be4b608ba1e4ead4451142.jpg", vehicle: v9)
Image.create(img_url: "https://images.autotrader.com/hn/c/a77a01162ee04013a9cae18c262819f1.jpg", vehicle: v9)

Image.create(img_url: "https://images.autotrader.com/hn/c/01295bb0efef41a6884dd5bd18eafa56.jpg", vehicle: v10)
Image.create(img_url: "https://images.autotrader.com/hn/c/8fdea9d4ed8d444c9b8cb65abccb8e58.jpg", vehicle: v10)
Image.create(img_url: "https://images.autotrader.com/hn/c/c0dfe8e90509451abc24d9cf26d2dbce.jpg", vehicle: v10)
Image.create(img_url: "https://images.autotrader.com/hn/c/c63801f03960430cbd72112ab4ba95f6.jpg", vehicle: v10)
Image.create(img_url: "https://images.autotrader.com/hn/c/bd329e7ca3904610a1185c8600715375.jpg", vehicle: v10)
Image.create(img_url: "https://images.autotrader.com/hn/c/b24f628e66804e02abfb1242e4cbc57a.jpg", vehicle: v10)
Image.create(img_url: "https://images.autotrader.com/hn/c/2e263504cff54bf7bf0938c6c519eb1d.jpg", vehicle: v10)
Image.create(img_url: "https://images.autotrader.com/hn/c/e21ef7c68f284571ac0ba1a0537fed6a.jpg", vehicle: v10)

Image.create(img_url: "https://images.autotrader.com/images/2022/7/9/650/100/43714762833.650100010.IM1.03.1024x768_A.1024x768.jpg", vehicle: v11)
Image.create(img_url: "https://images.autotrader.com/images/2022/7/9/650/100/43714762832.650100010.IM1.02.1024x768_A.1024x768.jpg", vehicle: v11)
Image.create(img_url: "https://images.autotrader.com/images/2022/7/9/650/100/43714762834.650100010.IM1.04.768x1024_A.1024x768.jpg", vehicle: v11)
Image.create(img_url: "https://images.autotrader.com/images/2022/7/9/650/100/43714762839.650100010.IM1.09.768x1024_A.1024x768.jpg", vehicle: v11)
Image.create(img_url: "https://images.autotrader.com/images/2022/7/9/650/100/43714762841.650100010.IM1.11.1024x768_A.1024x768.jpg", vehicle: v11)

puts "images data seeded"
