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