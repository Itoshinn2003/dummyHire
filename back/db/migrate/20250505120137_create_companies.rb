class CreateCompanies < ActiveRecord::Migration[7.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.string :profile_text
      t.string :string
      t.string :location
      t.string :established
      t.integer :employee
      t.string :official_site

      t.timestamps
    end
  end
end
