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

