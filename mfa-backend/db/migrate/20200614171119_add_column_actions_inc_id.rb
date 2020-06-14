class AddColumnActionsIncId < ActiveRecord::Migration[6.0]
  def change
    add_column :actions, :incident_id, :integer
  end
end
