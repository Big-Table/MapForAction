class AddColumnLatLong < ActiveRecord::Migration[6.0]
  def change
    add_column :incidents, :lat, :string
  end
end
