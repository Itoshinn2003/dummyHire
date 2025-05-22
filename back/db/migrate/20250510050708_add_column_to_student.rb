class AddColumnToStudent < ActiveRecord::Migration[7.1]
  def change
    add_column :students, :region, :string
  end
end
