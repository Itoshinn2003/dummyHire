class CreateLikes < ActiveRecord::Migration[7.1]
  def change
    create_table :likes do |t|
      t.references :intern, null: false, foreign_key: true
      t.references :student, null: false, foreign_key: true

      t.timestamps
    end
  end
end
