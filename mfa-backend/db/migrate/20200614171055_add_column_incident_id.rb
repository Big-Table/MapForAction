class AddColumnIncidentId < ActiveRecord::Migration[6.0]
  def change
    add_column :tweets, :incident_id, :integer
  end
end
