# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Tweet.create(url: 'https://twitter.com/TomthunkitsMind/status/1271823706877300743')
Tweet.create(url: 'https://twitter.com/VippusaO/status/1271810625463869442')
Action.create(title: "Help us take action now!", action_type: 'donate', url: 'https://blacklivesmatter.com/')
Action.create(title: "Call your reps!", action_type: 'speak out', url: 'https://myreps.datamade.us/')

Incident.create(title:"Example Title" , description: "A fake description", date: "1/3/20", image_url: "https://www.reviewjournal.com/wp-content/uploads/2020/06/13811294_web1_BLM-PROTEST_EDIT_JUNE02_20_001.jpg", lat: "", lng: "")
Incident.create(title: "Another Example Incident", description: "This is a description of the second event", date: "3/2/20", image_url: "https://s.abcnews.com/images/International/EPA_blm_germany_as_160713_16x9_992.jpg", lat: "", lng: "")
Incident.create(title: "A third example", description: "This is another description of the last even", date: "4/5/20", image_url: "https://media.vanityfair.com/photos/5ed67abbdf4b3d936b967346/master/w_2560%2Cc_limit/GettyImages-1216832831.jpg", lat: "", lng: "")