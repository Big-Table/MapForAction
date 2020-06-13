class CreateIncidents < ActiveRecord::Migration[6.0]
  def change
    create_table :incidents do |t|
      t.string :title
      t.string :description
      t.string :date
      t.string :image_url
      
      t.timestamps
    end
  end
end
