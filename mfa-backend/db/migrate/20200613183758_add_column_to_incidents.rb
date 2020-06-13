class AddColumnToIncidents < ActiveRecord::Migration[6.0]
  def change
    add_column :incidents, :organization, :string
    add_column :incidents, :petition, :string
  end
end
