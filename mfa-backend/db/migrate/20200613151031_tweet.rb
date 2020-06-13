class Tweet < ActiveRecord::Migration[6.0]
  def change
    create_table :tweets do |t|
      t.string :url 

      t.timestamps
    end
    
  end
end
