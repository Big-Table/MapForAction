class AddColumnIncidents < ActiveRecord::Migration[6.0]
  def change
    add_column :incidents, :approve, :integer
    add_column :incidents, :reject, :integer
  end
end
