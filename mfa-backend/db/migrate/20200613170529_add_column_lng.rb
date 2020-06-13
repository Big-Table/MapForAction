class AddColumnLng < ActiveRecord::Migration[6.0]
  def change
     add_column :incidents, :lng, :string
  end
end
