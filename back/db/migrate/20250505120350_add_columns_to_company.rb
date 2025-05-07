class AddColumnsToCompany < ActiveRecord::Migration[7.1]
  def change
    add_column :companies, :password, :string
    add_column :companies, :mail, :string
  end
end
