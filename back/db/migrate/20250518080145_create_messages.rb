class CreateMessages < ActiveRecord::Migration[7.1]
  def change
    create_table :messages do |t|
      t.references :sender, polymorphic: true, null: false
      t.references :receiver, polymorphic: true, null: false
      t.text :content

      t.timestamps
    end
  end
end
