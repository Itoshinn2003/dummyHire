class RemoveStringFromCompanies < ActiveRecord::Migration[7.1]
  def change
    remove_column :companies, :string
  end
end
