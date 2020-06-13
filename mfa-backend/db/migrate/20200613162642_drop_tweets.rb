class DropTweets < ActiveRecord::Migration[6.0]
  def change
    drop_table :tweets 
  end
end
