# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Location.create(
  name: "19th and Chestnut Location",
  address: "1925 Chestnut St",
  city: "Philadelphia",
  state: "PA",
  zip: "19103",
  phone: "(215) 854-0441",
  hours: "Monday	9:30AM–5:30PM\n
          Tuesday	9:30AM–5:30PM\n
          Wednesday	9:30AM–5:30PM\n
          Thursday	10AM–7:00PM\n
          Friday	9:30AM–5:30PM\n
          Saturday	9:30AM–4PM\n
          Sunday	Closed\n",
  latitude: "39.9521149",
  longitude: "-75.17282269999998"
)
Location.create(
  name: "40th and Chestnut Location",
  address: "4002 Chestnut St",
  city: "Philadelphia",
  state: "PA",
  zip: "19104",
  phone: "(215) 921-4871",
  hours: "Monday	10AM–6PM\n
          Tuesday	10AM–6PM\n
          Wednesday	10AM–6PM\n
          Thursday	10AM–6PM\n
          Friday	10AM–6PM\n
          Saturday	10AM–4PM\n
          Sunday	Closed\n",
latitude: "39.9553932",
longitude: "-75.20253430000002"
)
Location.create(
  name: "13th and Market Location",
  address: "1325 Market St",
  city: "Philadelphia",
  state: "PA",
  zip: "19107",
  phone: "(215) 375-7840",
  hours: "Monday	10AM–6PM\n
          Tuesday	10AM–6PM\n
          Wednesday	10AM–6PM\n
          Thursday	10AM–6PM\n
          Friday	10AM–6PM\n
          Saturday	10AM–4PM\n
          Sunday	Closed\n",
latitude: "39.9521722",
longitude: "-75.16197090000003"
)
Location.create(
  name: "Morrell Location",
  address: "3810 Morrell Ave",
  city: "Philadelphia",
  state: "PA",
  zip: "19114",
  phone: "(215) 632-6698",
  hours: "Monday	10AM–6PM\n
          Tuesday	10AM–6PM\n
          Wednesday	10AM–6PM\n
          Thursday	10AM–6PM\n
          Friday	10AM–6PM\n
          Saturday	Closed\n
          Sunday	Closed\n",
latitude: "40.0644548",
longitude: "-74.9870105"
)
Location.create(
  name: "Aramingo Location",
  address: "3853 Aramingo Ave",
  city: "Philadelphia",
  state: "PA",
  zip: "19137",
  phone: "(215) 288-3333",
  hours: "Monday 10AM–6PM\n
          Tuesday	10AM–6PM\n
          Wednesday	10AM–6PM\n
          Thursday	10AM–7PM\n
          Friday	10AM–6PM\n
          Saturday	10AM–4PM\n
          Sunday	Closed\n",
latitude: "39.9963613",
longitude: "-75.08986959999999"
)
Location.create(
  name: "Drexel Eye Location",
  address: "219 N Broad St 3rd Floor",
  city: "Philadelphia",
  state: "PA",
  zip: "19107",
  phone: "(215) 762-3937",
  hours: "Monday 8AM–4PM\n
          Tuesday	8AM–4PM\n
          Wednesday	8AM–4PM\n
          Thursday	8AM–4PM\n
          Friday	8AM–4PM\n
          Saturday	Closed\n
          Sunday	Closed\n",
latitude: "39.9486325",
longitude: "-75.16406390000003"
)
