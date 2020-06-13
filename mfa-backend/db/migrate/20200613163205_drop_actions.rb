class DropActions < ActiveRecord::Migration[6.0]
  def change
    drop_table :actions
  end
end
