class CreateActions < ActiveRecord::Migration[6.0]
  def change
    create_table :actions do |t|
      t.string :title
      t.string :action_type
      t.string :url


      t.timestamps
    end
  end
end
