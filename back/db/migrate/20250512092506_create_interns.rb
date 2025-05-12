class CreateInterns < ActiveRecord::Migration[7.1]
  def change
    create_table :interns do |t|
      t.references :company, null: false, foreign_key: true
      t.string :title
      t.string :job
      t.string :intern_text
      t.string :terms
      t.string :selection
      t.integer :salary
      t.string :location

      t.timestamps
    end
  end
end
