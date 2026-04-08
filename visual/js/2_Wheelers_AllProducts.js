// =============================================
// 2_Wheelers_AllProducts.js — All Products Page
// Aggregates products from every section/category
// =============================================

// --- Full Product Database ---
const allProducts = [
    // === Hero / Featured Bikes ===
    { name: "Apex Mountain Pro X9", price: 1299, originalPrice: 2199, category: "Mountain Bikes", badge: "Best Seller", badgeClass: "badge-best", img: "../assets/hero_bike_1.png", desc: "Full suspension carbon fiber frame with 29-inch wheels. Built for the toughest terrain and steepest descents.", rating: 4.8, reviews: 2450 },
    { name: "Velocity Road Racer", price: 899, originalPrice: 1299, category: "Road Bikes", badge: "Trending", badgeClass: "badge-best", img: "../assets/hero_bike_2.png", desc: "Aerodynamic alloy frame with Shimano 22-speed drivetrain. Featherlight at just 8.5kg for maximum speed.", rating: 4.7, reviews: 1890 },
    { name: "EcoVolt E-Bike 500", price: 1649, originalPrice: 2199, category: "Electric Bikes", badge: "New", badgeClass: "badge-new", img: "../assets/hero_ebike.png", desc: "500W motor, 80km range, regenerative braking. The future of eco-friendly urban commuting.", rating: 4.9, reviews: 3120 },
    { name: "CityGlide Hybrid 7", price: 549, originalPrice: 749, category: "Hybrid Bikes", badge: "Best Deal", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", desc: "21-speed drivetrain with ergonomic saddle and puncture-resistant tires for everyday adventures.", rating: 4.5, reviews: 1560 },
    { name: "KidStar BMX Blaze", price: 279, originalPrice: 399, category: "BMX Bikes", badge: "Kids Fav", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Reinforced steel frame with trick-ready pegs. Vibrant green graphics that pop on the skatepark.", rating: 4.6, reviews: 980 },
    { name: "TrailBlazer Fat Tire", price: 989, originalPrice: 1299, category: "Fat Tire Bikes", badge: "Adventure", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=400&h=300&fit=crop", desc: "4.8-inch fat tires crush sand, snow, and mud. Hydro disc brakes and dropper post included.", rating: 4.7, reviews: 1240 },

    // === Cycling Helmets ===
    { name: "AeroShield Pro Helmet", price: 89, originalPrice: 129, category: "Cycling Helmets", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1557803175-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "MIPS protection system with 18 ventilation channels. Aerodynamic design weighing just 260g.", rating: 4.8, reviews: 3200 },
    { name: "UrbanGuard City Helmet", price: 59, originalPrice: null, category: "Cycling Helmets", badge: "New", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1557803175-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Integrated LED rear light with magnetic buckle. Sleek matte finish for urban commuters.", rating: 4.4, reviews: 870 },
    { name: "KidSafe Junior Helmet", price: 39, originalPrice: 55, category: "Cycling Helmets", badge: "Kids Fav", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1557803175-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Fun designs with maximum protection. Adjustable fit system grows with your child.", rating: 4.7, reviews: 1450 },

    // === Bike Locks & Security ===
    { name: "TitanLock U-Lock Pro", price: 49, originalPrice: 69, category: "Bike Locks", badge: "Top Pick", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1596460650993-90d2354830ba?q=80&w=400&h=300&fit=crop", desc: "16mm hardened steel shackle with anti-drill, anti-pick cylinder. Double-lock mechanism for maximum security.", rating: 4.6, reviews: 2100 },
    { name: "FlexiChain 6ft Cable Lock", price: 29, originalPrice: null, category: "Bike Locks", badge: "Budget Pick", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?q=80&w=400&h=300&fit=crop", desc: "Braided steel cable with 4-digit customizable combination. Lightweight and flexible, ideal for quick stops.", rating: 4.2, reviews: 1680 },
    { name: "SmartLock GPS Tracker", price: 129, originalPrice: 179, category: "Bike Locks", badge: "High-Tech", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1558223175-0b41510afcb6?q=80&w=400&h=300&fit=crop", desc: "Built-in GPS with real-time smartphone alerts. Auto-locks when you walk away and unlocks on approach via Bluetooth.", rating: 4.5, reviews: 560 },

    // === Cycling Gloves ===
    { name: "GripMaster Full Finger", price: 34, originalPrice: 49, category: "Cycling Gloves", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?q=80&w=400&h=300&fit=crop", desc: "Gel-padded palms with touchscreen-compatible fingertips. Breathable mesh back panel for all-day riding comfort.", rating: 4.5, reviews: 2340 },
    { name: "ProRide Half Finger", price: 24, originalPrice: null, category: "Cycling Gloves", badge: "Popular", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1582231242350-0239f1c79a1f?q=80&w=400&h=300&fit=crop", desc: "Lightweight summer gloves with anti-slip silicone grip. Quick-pull tabs make them easy to remove even when sweaty.", rating: 4.3, reviews: 1890 },
    { name: "WinterShield Thermal Gloves", price: 45, originalPrice: 65, category: "Cycling Gloves", badge: "Winter Pick", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&h=300&fit=crop", desc: "3-layer insulated windproof shell with reflective accents. Keeps hands warm and dry down to -10°C.", rating: 4.6, reviews: 780 },

    // === Bike Lights ===
    { name: "BeamMax 1200 Front Light", price: 59, originalPrice: 79, category: "Bike Lights", badge: "Brightest", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1506505030201-1e96f1b3f947?q=80&w=400&h=300&fit=crop", desc: "1200 lumens with 6 modes including daytime flash. USB-C fast charging and 8hr runtime on medium setting.", rating: 4.8, reviews: 1920 },
    { name: "TailSafe Rear Light Set", price: 25, originalPrice: null, category: "Bike Lights", badge: "Essential", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1544133782-b7ce932599f5?q=80&w=400&h=300&fit=crop", desc: "180° visibility with an ultra-bright smart brake sensor. IPX6 waterproof rated for safe all-weather riding.", rating: 4.4, reviews: 3450 },
    { name: "WheelGlow Spoke LEDs", price: 19, originalPrice: 29, category: "Bike Lights", badge: "Fun Pick", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&h=300&fit=crop", desc: "32 vibrant color patterns with motion-activated display. Enhances side visibility and adds style to your ride.", rating: 4.1, reviews: 2100 },

    // === Tyres & Tubes ===
    { name: "GripKing All-Terrain 29\"", price: 45, originalPrice: 59, category: "Tyres & Tubes", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1544191746-e3d1746c1c38?q=80&w=400&h=300&fit=crop", desc: "Dual-compound rubber with an aggressive tread pattern for superior trail grip. Tubeless-ready design.", rating: 4.7, reviews: 4200 },
    { name: "SpeedLine Slick 700c", price: 35, originalPrice: null, category: "Tyres & Tubes", badge: "Road Pick", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1533561052604-c3deb6d596c3?q=80&w=400&h=300&fit=crop", desc: "Ultra-low rolling resistance with a high-density puncture protection belt. Premium 120 TPI casing.", rating: 4.5, reviews: 2890 },
    { name: "PunctureShield Tubes (Pack of 2)", price: 15, originalPrice: 22, category: "Tyres & Tubes", badge: "Value Pack", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1544191746-e3d1746c1c38?q=80&w=400&h=300&fit=crop", desc: "Self-sealing latex tubes with Presta valves. Instantly handles thorns and small debris while you ride.", rating: 4.3, reviews: 5600 },

    // === Cycling Apparel ===
    { name: "AeroFit Pro Jersey", price: 69, originalPrice: 95, category: "Cycling Apparel", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Italian fabric with 4-way stretch and UPF 50+ sun protection. Three rear pockets for essentials.", rating: 4.6, reviews: 1780 },
    { name: "ComfortRide Padded Shorts", price: 55, originalPrice: 75, category: "Cycling Apparel", badge: "Comfort+", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "High-density chamois pad with flatlock seams. Compressive fabric reduces muscle fatigue.", rating: 4.7, reviews: 2340 },
    { name: "StormBreaker Rain Jacket", price: 89, originalPrice: 129, category: "Cycling Apparel", badge: "All-Weather", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Fully seam-sealed with 10,000mm waterproof rating. Packable into its own pocket.", rating: 4.5, reviews: 890 },

    // === Bike Repair & Tools ===
    { name: "ProFix Multi-Tool 18-in-1", price: 28, originalPrice: 39, category: "Bike Tools", badge: "Essential", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", desc: "CNC machined hardened steel with chain breaker, Allen keys, and spoke wrench. Fits any saddle bag.", rating: 4.8, reviews: 4500 },
    { name: "TireDoc Patch Kit", price: 12, originalPrice: null, category: "Bike Tools", badge: "Must-Have", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", desc: "6 self-adhesive patches with tire levers and portable air cartridge. Fits in jersey pocket.", rating: 4.4, reviews: 6200 },
    { name: "TorqueMaster Pump Floor", price: 45, originalPrice: 59, category: "Bike Tools", badge: "Top Rated", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", desc: "160 PSI max with oversized gauge and dual Presta/Schrader head. Steel barrel for durability.", rating: 4.7, reviews: 3100 },

    // === Water Bottles & Cages ===
    { name: "HydroFlow Insulated 750ml", price: 22, originalPrice: 29, category: "Bottles & Cages", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop", desc: "Double-wall vacuum insulation keeps drinks cold for 24hrs. BPA-free with one-hand squeeze valve.", rating: 4.5, reviews: 3800 },
    { name: "CarbonLite Bottle Cage", price: 18, originalPrice: null, category: "Bottles & Cages", badge: "Lightweight", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop", desc: "Full carbon construction at just 25g. Secure grip with side-loading design for tight frames.", rating: 4.3, reviews: 1200 },

    // === Saddles & Seats ===
    { name: "CloudRide Gel Saddle", price: 65, originalPrice: 89, category: "Saddles & Seats", badge: "Comfort+", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", desc: "Memory foam core with central pressure relief channel. Fits all standard seatpost clamps.", rating: 4.6, reviews: 2670 },
    { name: "SportFit Racing Saddle", price: 95, originalPrice: 139, category: "Saddles & Seats", badge: "Pro Choice", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", desc: "Carbon-reinforced shell with microfiber cover. Designed with 3D body-mapping technology.", rating: 4.7, reviews: 890 },

    // === GPS & Bike Computers ===
    { name: "RideNav GPS Pro", price: 199, originalPrice: 279, category: "GPS & Computers", badge: "High-Tech", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop", desc: "Color touchscreen with turn-by-turn navigation. ANT+ and Bluetooth sensors compatible.", rating: 4.8, reviews: 1560 },
    { name: "SpeedMeter Basic Wireless", price: 35, originalPrice: null, category: "GPS & Computers", badge: "Value Pick", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop", desc: "Speed, distance, time, and calories on a clear LCD. Wireless sensor with easy mount.", rating: 4.2, reviews: 4300 },

    // === Panniers & Bags ===
    { name: "TrekHauler Pannier Bags (Pair)", price: 79, originalPrice: 109, category: "Panniers & Bags", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "40L total capacity with waterproof roll-top closure. Quick-release rack mounting system.", rating: 4.6, reviews: 1890 },
    { name: "FramePack Top Tube Bag", price: 25, originalPrice: 35, category: "Panniers & Bags", badge: "Handy", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Touchscreen-compatible phone window with waterproof zipper. Velcro straps fit any frame.", rating: 4.4, reviews: 2560 },

    // === Cycling Shoes ===
    { name: "ClipMaster Road Shoes", price: 129, originalPrice: 179, category: "Cycling Shoes", badge: "Pro Choice", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=400&h=300&fit=crop", desc: "Stiff carbon sole for maximum power transfer. BOA dial closure for micro-adjustable fit.", rating: 4.7, reviews: 1340 },
    { name: "TrailStep MTB Shoes", price: 99, originalPrice: 139, category: "Cycling Shoes", badge: "Trail Pick", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=400&h=300&fit=crop", desc: "Vibram outsole for walk-ability with SPD cleat compatibility. Reinforced toe box protection.", rating: 4.5, reviews: 980 },
    { name: "CasualRide Flat Pedal Shoes", price: 69, originalPrice: null, category: "Cycling Shoes", badge: "Everyday", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=400&h=300&fit=crop", desc: "Sticky rubber sole grips flat pedals like glue. Looks like sneakers, rides like bike shoes.", rating: 4.4, reviews: 1670 },

    // === Bike Bells & Horns ===
    { name: "PingClear Classic Bell", price: 12, originalPrice: null, category: "Bells & Horns", badge: "Classic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop", desc: "Brass resonance chamber with spring-loaded striker. Clear ring audible from 50 meters.", rating: 4.3, reviews: 5800 },
    { name: "HornBlast 120dB Electric", price: 24, originalPrice: 34, category: "Bells & Horns", badge: "Loud!", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=400&h=300&fit=crop", desc: "USB rechargeable with 3 sound modes. Impossible to ignore — great for city traffic.", rating: 4.5, reviews: 2100 },

    // === Bike Stands & Storage ===
    { name: "WallMount Pro Rack", price: 35, originalPrice: 49, category: "Stands & Storage", badge: "Space Saver", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", desc: "Holds 2 bikes vertically. Rubber-coated hooks prevent frame scratches. Includes hardware.", rating: 4.6, reviews: 1890 },
    { name: "FloorStand Adjustable", price: 28, originalPrice: null, category: "Stands & Storage", badge: "Versatile", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=400&h=300&fit=crop", desc: "Fits 20\" to 29\" wheels. Foldable steel design for garage, shed, or apartment.", rating: 4.4, reviews: 3200 },

    // === Kids Bikes & Gear ===
    { name: "LittleRider Balance Bike", price: 89, originalPrice: 119, category: "Kids Gear", badge: "Age 2-5", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Lightweight aluminium frame weighing just 3kg. Adjustable seat height grows with your toddler.", rating: 4.8, reviews: 2900 },
    { name: "StarCruiser 16\" Kids Bike", price: 169, originalPrice: 219, category: "Kids Gear", badge: "Age 4-7", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Training wheels included with coaster brake. Fun streamers and matching bell in the box.", rating: 4.6, reviews: 1560 },
    { name: "Junior Mountain Rider 24\"", price: 349, originalPrice: 449, category: "Kids Gear", badge: "Age 8-12", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Real 7-speed Shimano gears with front suspension. Disc brakes for serious young riders.", rating: 4.7, reviews: 870 },

    // === Motorcycles ===
    { name: "ThunderBolt 650 Twin", price: 7499, originalPrice: 8999, category: "Motorcycles", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400&h=300&fit=crop", desc: "649cc parallel-twin engine producing 47hp. Modern classic styling with dual-channel ABS and slipper clutch.", rating: 4.9, reviews: 3400 },
    { name: "StreetFire 300R", price: 4299, originalPrice: 4999, category: "Motorcycles", badge: "Trending", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=400&h=300&fit=crop", desc: "296cc liquid-cooled single with fuel injection. Raw Power and aggressive street-fighter design for technical urban routes.", rating: 4.7, reviews: 2890 },
    { name: "CruiserKing 1200", price: 12999, originalPrice: 14999, category: "Motorcycles", badge: "Premium", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1558981424-86a2f127d897?q=80&w=400&h=300&fit=crop", desc: "1200cc V-twin with high-torque belt drive. Features heated grips, cruise control, and leather saddlebags.", rating: 4.8, reviews: 1560 },
    { name: "AdventureX 800 GS", price: 9999, originalPrice: 11499, category: "Motorcycles", badge: "Adventure", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=400&h=300&fit=crop", desc: "798cc adventure touring beast with 21-inch spokes and crash bars. Ready for any desert or mountain trail.", rating: 4.9, reviews: 2100 },
    { name: "NightHawk 250cc Commuter", price: 2799, originalPrice: 3299, category: "Motorcycles", badge: "Value Pick", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1563220790-264777558ec4?q=80&w=400&h=300&fit=crop", desc: "Forgiving 250cc engine delivering exceptional fuel economy. Features low seat height and nimble handling.", rating: 4.5, reviews: 4500 },
    { name: "SuperSport RR 600", price: 10499, originalPrice: 12499, category: "Motorcycles", badge: "Track Ready", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1621271107530-9b3602167d4f?q=80&w=400&h=300&fit=crop", desc: "Performance tuned 599cc inline-four. Professional track suspension and competition-grade radial brakes.", rating: 4.8, reviews: 1230 },

    // === Scooters ===
    { name: "GlideCity 125cc Scooter", price: 1899, originalPrice: 2299, category: "Scooters", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1582231242350-0239f1c79a1f?q=80&w=400&h=300&fit=crop", desc: "Efficient 125cc auto with expansive under-seat storage. Compact dimensions for effortless lane splitting.", rating: 4.6, reviews: 5200 },
    { name: "RetroVespa Classic 150", price: 3499, originalPrice: 3999, category: "Scooters", badge: "Iconic", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1591535496431-72f126154366?q=80&w=400&h=300&fit=crop", desc: "150cc metal-bodied classic from the heritage line. Features electronic fuel injection and vintage charm.", rating: 4.8, reviews: 3100 },
    { name: "UrbanZip 110cc", price: 1299, originalPrice: 1599, category: "Scooters", badge: "Budget Fav", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=400&h=300&fit=crop", desc: "Entry-level 110cc scooter with remarkable agility. Optimized for students and first-time riders.", rating: 4.4, reviews: 6100 },
    { name: "MaxiScoot 300 GT", price: 5499, originalPrice: 6499, category: "Scooters", badge: "Touring", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1444491741275-3747c03c99d4?q=80&w=400&h=300&fit=crop", desc: "Cross-city maxi-scooter with a powerful 300cc engine. Tall windshield for long-distance highway comfort.", rating: 4.7, reviews: 1890 },

    // === Electric Scooters & Mopeds ===
    { name: "VoltRush E-Scooter Pro", price: 2499, originalPrice: 2999, category: "Electric Scooters", badge: "Eco Star", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1558980601-3e4b789073c6?q=80&w=400&h=300&fit=crop", desc: "High-torque electric motor with 120km range. Includes swappable battery tech for 24/7 mobility.", rating: 4.7, reviews: 2800 },
    { name: "ZipE Foldable Kick Scooter", price: 599, originalPrice: 799, category: "Electric Scooters", badge: "Portable", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1582231242350-0239f1c79a1f?q=80&w=400&h=300&fit=crop", desc: "Aviation-grade aluminium kick scooter with 350W motor. Folds in seconds, perfect for mixed commuting.", rating: 4.5, reviews: 4300 },
    { name: "MotoE Zero 5000", price: 8999, originalPrice: 10999, category: "Electric Scooters", badge: "Premium", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1612450791763-71887e5bba98?q=80&w=400&h=300&fit=crop", desc: "Naked electric bike equivalent to 125cc performance. Instant torque and smart connectivity suite.", rating: 4.9, reviews: 1670 },
    { name: "PedalAssist E-Moped", price: 1799, originalPrice: 2199, category: "Electric Scooters", badge: "Hybrid", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1558216393-f0022d4314c6?q=80&w=400&h=300&fit=crop", desc: "Charming vintage-style moped with electric pedal-assist. Features heavy-duty racks for groceries.", rating: 4.4, reviews: 1450 },

    // === Pedals ===
    { name: "ClipForce SPD Pedals", price: 59, originalPrice: 79, category: "Pedals", badge: "Pro Choice", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1593710926639-65691bc9a96e?q=80&w=400&h=300&fit=crop", desc: "Chromoly steel axles with dual-sided SPD entry and adjustable tension for efficient power transfer.", rating: 4.7, reviews: 2100 },
    { name: "FlatGrip Platform Pedals", price: 32, originalPrice: null, category: "Pedals", badge: "MTB Pick", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1593710926639-65691bc9a96e?q=80&w=400&h=300&fit=crop", desc: "Wide aluminium platform with replaceable steel pins. Concave profile provides maximum foot stability.", rating: 4.5, reviews: 3400 },

    // === Fenders & Mudguards ===
    { name: "FullWrap Fender Set", price: 28, originalPrice: 39, category: "Fenders", badge: "All-Weather", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1558223175-0b41510afcb6?q=80&w=400&h=300&fit=crop", desc: "Durable matte black polycarbonate fenders with stainless stays. Fits tire widths up to 45mm.", rating: 4.4, reviews: 2900 },
    { name: "QuickSnap Clip-On Mudguard", price: 15, originalPrice: null, category: "Fenders", badge: "Quick Fit", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1558223175-0b41510afcb6?q=80&w=400&h=300&fit=crop", desc: "Lightweight tool-free fender. Snaps onto seatposts in seconds for instant protection from spray.", rating: 4.2, reviews: 4100 },

    // === Racks & Carriers ===
    { name: "TourRack Rear Carrier", price: 45, originalPrice: 59, category: "Racks & Carriers", badge: "Essential", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=400&h=300&fit=crop", desc: "Heavy-duty aluminium alloy rear rack. 30kg load capacity with universal mounting points for panniers and child seats.", rating: 4.6, reviews: 2340 },
    { name: "CarMount Pro Bike Rack", price: 129, originalPrice: 169, category: "Racks & Carriers", badge: "For Cars", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1593710926639-65691bc9a96e?q=80&w=400&h=300&fit=crop", desc: "Premium trunk-mount carrier for up to 3 bikes. Features thick foam protection and adjustable security straps.", rating: 4.5, reviews: 1780 },

    // === Mirrors ===
    { name: "WideView Bar-End Mirror", price: 18, originalPrice: 25, category: "Mirrors", badge: "Safety", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1558223175-0b41510afcb6?q=80&w=400&h=300&fit=crop", desc: "High-definition convex mirror with a vibration-resistant bar-end mount. Provides a 180-degree unobstructed rear view.", rating: 4.3, reviews: 3200 },

    // === Phone Mounts ===
    { name: "GripLock Phone Mount Pro", price: 29, originalPrice: 39, category: "Phone Mounts", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1610484832539-715bd888be62?q=80&w=400&h=300&fit=crop", desc: "Shock-absorbing silicone mount with a 360-degree ball joint. Fits any handlebar from 20-35mm.", rating: 4.6, reviews: 5600 },
    { name: "MagSnap Wireless Mount", price: 49, originalPrice: 65, category: "Phone Mounts", badge: "Premium", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1627389955609-702444b1c67d?q=80&w=400&h=300&fit=crop", desc: "MagSafe-ready magnetic mount with 15W Qi wireless charging. Waterproof IP67 rated connector.", rating: 4.7, reviews: 1890 },

    // === Chain & Drivetrain Care ===
    { name: "ChainLube Pro Wet/Dry Kit", price: 22, originalPrice: 32, category: "Chain Care", badge: "Must-Have", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?q=80&w=400&h=300&fit=crop", desc: "Professional maintenance kit including 120ml ceramic dry lube and 120ml extreme wet weather oil.", rating: 4.5, reviews: 3800 },
    { name: "ChainScrub Cleaning Tool", price: 15, originalPrice: null, category: "Chain Care", badge: "Easy Clean", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1541625602330-2277a1cd1f59?q=80&w=400&h=300&fit=crop", desc: "Triple-brush chain cleaner with reservoir. Effectively removes grit and old oil without removing the chain.", rating: 4.3, reviews: 4500 },

    // === Cycling Sunglasses ===
    { name: "AeroVision Sport Glasses", price: 79, originalPrice: 109, category: "Cycling Sunglasses", badge: "UV400", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Photochromic lenses auto-adjust to light. Anti-fog coating with swappable nose pieces.", rating: 4.6, reviews: 2100 },
    { name: "NightRider Clear Lens", price: 39, originalPrice: null, category: "Cycling Sunglasses", badge: "Night Ride", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?q=80&w=400&h=300&fit=crop", desc: "Yellow-tinted lenses enhance contrast at dusk. Wraparound design blocks wind and debris.", rating: 4.4, reviews: 1560 },

    // === Protective Gear ===
    { name: "ArmorFlex Knee Guards", price: 45, originalPrice: 59, category: "Protective Gear", badge: "Safety+", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&h=300&fit=crop", desc: "D3O impact material hardens on impact. Breathable mesh straps with silicone grip bands.", rating: 4.7, reviews: 1890 },
    { name: "ElbowShield Pro Guards", price: 35, originalPrice: 49, category: "Protective Gear", badge: "MTB Armor", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&h=300&fit=crop", desc: "CE-certified elbow protection with pre-curved fit. Lightweight at just 180g per guard.", rating: 4.5, reviews: 1230 },
    { name: "FullBody Armor Jacket", price: 129, originalPrice: 179, category: "Protective Gear", badge: "Max Protect", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&h=300&fit=crop", desc: "Chest, back, shoulder and elbow CE armor. Mesh construction keeps you cool on downhill runs.", rating: 4.8, reviews: 780 },

    // === Handlebar Grips & Tape ===
    { name: "ErgoPro Lock-On Grips", price: 22, originalPrice: 29, category: "Grips & Tape", badge: "Comfort", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1591535496431-72f126154366?q=80&w=400&h=300&fit=crop", desc: "Ergonomically shaped dual-density rubber grips. Features aluminium lock-on collars for secure, slip-free performance.", rating: 4.5, reviews: 3400 },
    { name: "CorkWrap Bar Tape", price: 18, originalPrice: null, category: "Grips & Tape", badge: "Road Pick", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1533162002102-1a48c66e288e?q=80&w=400&h=300&fit=crop", desc: "Synthetic cork bar tape with a vibration-dampening gel backing. Superior grip in both dry and wet conditions.", rating: 4.4, reviews: 2100 },

    // === Motorcycle Helmets ===
    { name: "FullFace Stealth Helmet", price: 189, originalPrice: 249, category: "Motorcycle Helmets", badge: "DOT/ECE", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=400&h=300&fit=crop", desc: "Advanced polycarbonate composite shell with a dual-density EPS liner. Features an anti-scratch pinpoint visor and integrated sun shield.", rating: 4.8, reviews: 4200 },
    { name: "OpenFace Retro Helmet", price: 119, originalPrice: 149, category: "Motorcycle Helmets", badge: "Classic", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1590425712128-444aa16e3926?q=80&w=400&h=300&fit=crop", desc: "Lightweight fiberglass shell in heritage matte cream. Features a premium leather interior and chrome trim for a timeless aesthetic.", rating: 4.6, reviews: 2300 },
    { name: "ModularFlip Adventure Helmet", price: 249, originalPrice: 329, category: "Motorcycle Helmets", badge: "Versatile", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1582531093125-978c4a176e5d?q=80&w=400&h=300&fit=crop", desc: "Toure-ready flip-up design with a removable peak visor. Includes a Pinlock anti-fog insert and Bluetooth-ready recessed pockets.", rating: 4.7, reviews: 1670 },

    // === Motorcycle Gloves ===
    { name: "LeatherGrip Touring Gloves", price: 69, originalPrice: 89, category: "Motorcycle Gloves", badge: "Premium", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=400&h=300&fit=crop", desc: "Abrasion-resistant goatskin leather with carbon fiber hard-knuckle protectors. Conductive fingertips for smartphone use.", rating: 4.7, reviews: 2560 },
    { name: "SummerMesh Riding Gloves", price: 39, originalPrice: null, category: "Motorcycle Gloves", badge: "Hot Weather", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=400&h=300&fit=crop", desc: "Highly breathable 3D air-mesh construction with TPR palm sliders. Pre-curved fingers ensure a natural grip on the bars.", rating: 4.5, reviews: 3100 },

    // === Motorcycle Jackets ===
    { name: "ArmorRide Leather Jacket", price: 299, originalPrice: 399, category: "Motorcycle Jackets", badge: "Best Seller", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400&h=300&fit=crop", desc: "1.2mm premium cowhide leather with CE Level 2 armor. Features accordion stretch panels and a removable quilted thermal liner.", rating: 4.9, reviews: 1890 },
    { name: "TextileTour All-Season Jacket", price: 189, originalPrice: 249, category: "Motorcycle Jackets", badge: "All-Weather", badgeClass: "badge-deal", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400&h=300&fit=crop", desc: "600D high-impact poly-fabric with a waterproof breathable membrane. Massive zippered vents for warm days and high visibility hits.", rating: 4.6, reviews: 2340 },

    // === Motorcycle Boots ===
    { name: "CrusaderRide Boots", price: 159, originalPrice: 199, category: "Motorcycle Boots", badge: "Armored", badgeClass: "badge-best", img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=400&h=300&fit=crop", desc: "Touring-standard full-grain leather with TPU shin and ankle protection. Reinforced toe box and anti-slip vulcanized rubber sole.", rating: 4.7, reviews: 1670 },
    { name: "UrbanStealth Short Boots", price: 99, originalPrice: 129, category: "Motorcycle Boots", badge: "City Style", badgeClass: "badge-new", img: "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=400&h=300&fit=crop", desc: "Low-profile leather sneakers with hidden impact-certified ankle padding. Waterproof membrane and reflective heel pulls.", rating: 4.5, reviews: 2100 }
];


// --- Liked products state (stored in localStorage) ---
let likedProducts = JSON.parse(localStorage.getItem('2w_liked') || '[]');

function isLiked(productName) {
    return likedProducts.includes(productName);
}

function toggleLike(productName, btn) {
    const idx = likedProducts.indexOf(productName);
    if (idx > -1) {
        likedProducts.splice(idx, 1);
        btn.classList.remove('liked');
        btn.innerHTML = '<i class="far fa-heart"></i>';
    } else {
        likedProducts.push(productName);
        btn.classList.add('liked');
        btn.innerHTML = '<i class="fas fa-heart"></i>';
    }
    localStorage.setItem('2w_liked', JSON.stringify(likedProducts));
}

// --- Generate Star HTML ---
function renderStars(rating) {
    let html = '';
    const full = Math.floor(rating);
    const hasHalf = rating - full >= 0.3;
    const empty = 5 - full - (hasHalf ? 1 : 0);

    for (let i = 0; i < full; i++) html += '<i class="fas fa-star"></i>';
    if (hasHalf) html += '<i class="fas fa-star-half-alt"></i>';
    for (let i = 0; i < empty; i++) html += '<i class="far fa-star empty"></i>';
    return html;
}

// --- Format Price ---
function formatPrice(p) {
    return '$' + p.toLocaleString('en-US', { minimumFractionDigits: 0 });
}

// --- Render All Product Cards ---
function renderAllProducts(products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    grid.innerHTML = '';

    products.forEach((p, idx) => {
        const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
        const liked = isLiked(p.name);

        const card = document.createElement('div');
        card.className = 'all-product-card';
        card.dataset.index = idx;

        card.innerHTML = `
            <div class="apc-image-wrap">
                <img src="${p.img}" alt="${p.name}" loading="lazy">
                <span class="apc-badge ${p.badgeClass}">${p.badge}</span>
                <button class="apc-like-btn ${liked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleLike('${p.name.replace(/'/g, "\\'")}', this)">
                    <i class="${liked ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="apc-info">
                <div class="apc-category">${p.category}</div>
                <div class="apc-name">${p.name}</div>
                <div class="apc-desc">${p.desc}</div>
                <div class="apc-rating">
                    <div class="apc-stars">${renderStars(p.rating)}</div>
                    <span class="apc-rating-text">${p.rating} (${p.reviews.toLocaleString()})</span>
                </div>
                <div class="apc-price-row">
                    <div>
                        <span class="apc-price">${formatPrice(p.price)}</span>
                        ${p.originalPrice ? `<span class="apc-original-price">${formatPrice(p.originalPrice)}</span>` : ''}
                    </div>
                    ${discount > 0 ? `<span class="apc-discount">${discount}% OFF</span>` : ''}
                </div>
                <div class="apc-actions">
                    <button class="apc-btn-cart" onclick="event.stopPropagation();">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="apc-btn-buy" onclick="event.stopPropagation(); window.location.href='2_Wheelers_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(formatPrice(p.price))}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(p.category)}&rating=${p.rating}&reviews=${p.reviews}${p.originalPrice ? '&originalPrice=' + encodeURIComponent(formatPrice(p.originalPrice)) : ''}&desc=${encodeURIComponent(p.desc)}&badge=${encodeURIComponent(p.badge)}'">
                        <i class="fas fa-bolt"></i> Buy Now
                    </button>
                </div>
            </div>
        `;

        // Click card → go to product details
        card.addEventListener('click', () => {
            window.location.href = `2_Wheelers_ProductDetails.html?name=${encodeURIComponent(p.name)}&price=${encodeURIComponent(formatPrice(p.price))}&img=${encodeURIComponent(p.img)}&cat=${encodeURIComponent(p.category)}&rating=${p.rating}&reviews=${p.reviews}${p.originalPrice ? '&originalPrice=' + encodeURIComponent(formatPrice(p.originalPrice)) : ''}&desc=${encodeURIComponent(p.desc)}&badge=${encodeURIComponent(p.badge)}`;
        });

        grid.appendChild(card);
    });

    // Update results count
    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = products.length;
}

// --- Filter Logic ---
let activeFilter = 'all';

function filterProducts(category) {
    activeFilter = category;

    // Update active button styling
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === category);
    });

    if (category === 'all') {
        renderAllProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
        renderAllProducts(filtered);
    }
}

// --- Sort Logic ---
function sortProducts(criteria) {
    let sorted = [...allProducts];
    if (activeFilter !== 'all') {
        sorted = sorted.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));
    }

    switch (criteria) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
        case 'reviews':
            sorted.sort((a, b) => b.reviews - a.reviews);
            break;
        default: // 'featured' — original order
            break;
    }

    renderAllProducts(sorted);
}

// --- Back to Top Button ---
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
    renderAllProducts(allProducts);
    initBackToTop();
    initCustomDropdown();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
    });
});

// --- Custom Dropdown Logic ---
function initCustomDropdown() {
    const dropdown = document.getElementById('sort-dropdown');
    const trigger = document.getElementById('dropdown-trigger');
    const menu = document.getElementById('dropdown-menu');
    const label = document.getElementById('dropdown-label');
    const backdrop = document.getElementById('dropdown-backdrop');
    const items = menu ? menu.querySelectorAll('.dropdown-item') : [];

    if (!dropdown || !trigger || !menu) return;

    function openDropdown() {
        dropdown.classList.add('open');
        if (backdrop) backdrop.classList.add('visible');
    }

    function closeDropdown() {
        dropdown.classList.remove('open');
        if (backdrop) backdrop.classList.remove('visible');
    }

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
    });

    if (backdrop) {
        backdrop.addEventListener('click', closeDropdown);
    }

    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) closeDropdown();
    });

    // Keyboard: Escape to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDropdown();
    });

    items.forEach(item => {
        item.addEventListener('click', () => {
            const value = item.dataset.value;
            const text = item.querySelector('span').textContent;
            
            // Update label
            label.textContent = 'Sort: ' + text;

            // Update active state
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Close dropdown
            closeDropdown();

            // Trigger sort
            sortProducts(value);
        });
    });
}
