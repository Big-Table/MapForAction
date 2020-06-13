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



# seed incidents
25.times do
    Incident.create(
        title: Faker::Book.title,
        image_url: ["https://wtop.com/wp-content/uploads/2020/06/America_Protests_Washington_47013-1880x1254.jpg", "https://wgbh.brightspotcdn.com/dims4/default/0b9dc5a/2147483647/strip/true/crop/843x460+0+296/resize/990x540!/quality/70/?url=https%3A%2F%2Fwgbh.brightspotcdn.com%2F71%2F9b%2F7ff7635541a7ba2a66fd1feaa431%2Fblue-hill-avenue.jpg", "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/photo10.JPG?itok=IPAwQXD_"].sample,
        description: Faker::Hipster.sentence,
        lat: Faker::Address.latitude,
        lng: Faker::Address.longitude
    )
end



Incident.create(title:"Example Title" , description: "A fake description", date: "1/3/20", image_url: "https://www.reviewjournal.com/wp-content/uploads/2020/06/13811294_web1_BLM-PROTEST_EDIT_JUNE02_20_001.jpg", lat: "", lng: "")
Incident.create(title: "Another Example Incident", description: "This is a description of the second event", date: "3/2/20", image_url: "https://s.abcnews.com/images/International/EPA_blm_germany_as_160713_16x9_992.jpg", lat: "", lng: "")
Incident.create(title: "A third example", description: "This is another description of the last even", date: "4/5/20", image_url: "https://media.vanityfair.com/photos/5ed67abbdf4b3d936b967346/master/w_2560%2Cc_limit/GettyImages-1216832831.jpg", lat: "", lng: "")
