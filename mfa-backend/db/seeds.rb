# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Tweet.create(url: 'https://twitter.com/RexChapman/status/1271832001364979716?s=20')
Tweet.create(url: 'https://twitter.com/greg_doucette/status/1271637576642945025?s=20')
Tweet.create(url: 'https://twitter.com/bbyches/status/1271622738990555136?s=20')
Tweet.create(url: 'https://twitter.com/JaredSawyerJr/status/1272126918742204420?s=20')
Tweet.create(url: 'https://twitter.com/greg_doucette/status/1268961856145801218?s=20')

# Action.create(title: "Help us take action now!", action_type: 'donate', url: 'https://blacklivesmatter.com/')
# Action.create(title: "Call your reps!", action_type: 'speak out', url: 'https://myreps.datamade.us/')



# seed incidents
# 25.times do
#     Incident.create(
#         title: Faker::Book.title,
#         image_url: ["https://wtop.com/wp-content/uploads/2020/06/America_Protests_Washington_47013-1880x1254.jpg", "https://wgbh.brightspotcdn.com/dims4/default/0b9dc5a/2147483647/strip/true/crop/843x460+0+296/resize/990x540!/quality/70/?url=https%3A%2F%2Fwgbh.brightspotcdn.com%2F71%2F9b%2F7ff7635541a7ba2a66fd1feaa431%2Fblue-hill-avenue.jpg", "https://news.wttw.com/sites/default/files/styles/full/public/article/image-non-gallery/photo10.JPG?itok=IPAwQXD_"].sample,
#         description: Faker::Hipster.sentence,
#         lat: Faker::Address.latitude,
#         lng: Faker::Address.longitude
#     )
# end



Incident.create(title:"I can't breathe. Justice for George Floyd" , description: "On May 25, 2020, George Floyd was killed in Minneapolis by Derek Chauvin, a white police officer, who knelt on Floyd's neck for almost nine minutes while Floyd was handcuffed and lying face down, begging for his life and repeatedly saying 'I can't breathe'.", date: "5/25/20", image_url: "https://static01.nyt.com/images/2020/05/27/us/27georgefloyd/27georgefloyd-superJumbo.jpg", lat: "44.9341429", lng: "-93.2624875")

Incident.create(title: "Eric Garner", description: "On July 17, 2014, Eric Garner died in the New York City borough of Staten Island after Daniel Pantaleo, a New York City Police Department (NYPD) officer, put him in a chokehold while arresting him", date: "7/17/14", image_url: "https://upload.wikimedia.org/wikipedia/en/a/a9/Eric_Garner_police_confrontation_screenshot.PNG", lat: "40.63716", lng: "-74.07674")

Incident.create(title: "Rayshard Brooks gunned down by Atlanta Police" , description: "Rayshard Brooks was shot and killed by an Atlanta Police Department officer on the evening of June 12, 2020", date: "6/12/20", image_url: "https://static01.nyt.com/images/2020/06/14/video/14-brooks-cover2/14-brooks-cover2-articleLarge.png?quality=75&auto=webp&disable=upscale", lat: "33.721810", lng: "-84.392290")

Incident.create(title: "Breonna Taylor" , description: "Breonna Taylor was fatally shot by Louisville Metro Police Department", date: "3/13/20", image_url: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200512170612-01-louisville-emt-police-killed.jpg", lat: "38.2527", lng: "-85.7585")

Incident.create(title: "White woman who called police on black birdwatcher" , description: `Central Park this morning: This woman's dog is tearing through the plantings in the Ramble.

    ME: Ma'am, dogs in the Ramble have to be on the leash at all times. The sign is right there.
    HER: The dog runs are closed. He needs his exercise.
    ME: All you have to do is take him to the other side of the drive, outside the Ramble, and you can let him run off leash all you want.
    HER: It's too dangerous.
    ME: Look, if you're going to do what you want, I'm going to do what I want, but you're not going to like it.
    HER: What's that?
    ME (to the dog): Come here, puppy!
    HER: He won't come to you.
    ME: We'll see about that...
    
    I pull out the dog treats I carry for just for such intransigence. I didn't even get a chance to toss any treats to the pooch before Karen scrambled to grab the dog.
    
    HER: DON'T YOU TOUCH MY DOG!!!!!
    
    That's when I started video recording with my iPhone.`, date: "5/26/20", image_url: "https://content.fortune.com/wp-content/uploads/2020/05/Amy-Cooper-Christian-Cooper-Central-Park.jpg?w=992", lat: "40.7775322", lng: "-73.9695347")

Incident.create(title: "Buffalo officers push 75-year-old protester" , description: "police officers from the Buffalo Police Department pushed 75-year-old Martin Gugino during a confrontation in Buffalo's Niagara Square, causing him to fall to the ground which left him bleeding from the ear. ", date: "6/5/20", image_url: "https://s.abcnews.com/images/US/200605_abc_social_buffalo1_hpMain_16x9_992.jpg", lat: "42.886910", lng: "-78.878070")

Incident.create(title: "Atlanta officers attack college students in car" , description: "The Louisville Metro Police officer who was caught on camera Friday firing pepper balls at a WAVE 3 reporter and photojournalist as they covered the downtown protests over Breonna Taylor's death has been reassigned", date: "6/1/20", image_url: "", lat: "33.748997", lng: "-84.387985")

Incident.create(title: "Louisville officer fired pepper balls at reporter" , description: "", date: "6/12/20", image_url:"https://s3.amazonaws.com/abn-prod/wp-content/uploads/sites/4/2020/05/wave3-protest.jpg", lat: "38.252666", lng: "-85.758453")

Incident.create(title: "Teen Allegedly Beaten, Tased by Cops in Bronx" , description: "16-year-old was beaten and Tased by NYPD", date: "6/10/20", image_url: "https://i.dailymail.co.uk/1s/2020/06/11/14/29489522-8410537-image-m-20_1591883114281.jpg", lat: "40.8448", lng: "-73.8648")

Incident.create(title: "East Meadow, New York. Police arrest a man for protesting. We no longer are free." , description: "Peaceful protest in East Meadow, NY (Long Island): 

An officer abruptly stops so the protestor walking behind him  bumps into the cop.

Then the man is violently arrested. 

Bystanders: “they kneeled on his neck & had about 6 officers holding him down.”", date: "6/13/20", image_url: "https://ewscripps.brightspotcdn.com/dims4/default/f4f3b06/2147483647/strip/true/crop/1920x1080+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fcd%2Ff7%2F0b9303f24684a05fc3937ae461e8%2Fviral-video-protester.jpeg", lng: "-73.5590", lat: "40.7140")

Incident.create(title: "police arrest a woman and her husband on the stoop of their own home for cheering on protestors" , description: "A violation of the Fourth and Fourteenth Amendments", date: "6/5/20", image_url: "https://pbs.twimg.com/media/EZvstTEWoAES3ut?format=jpg&name=medium", lat: "40.7128", lng: "-74.0060")

# Incident.create(title: "" , description: "", date: "6/12/20", image_url: "", lat: "", lng: "")
