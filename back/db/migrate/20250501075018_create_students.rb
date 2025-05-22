class CreateStudents < ActiveRecord::Migration[7.1]
  def change
    create_table :students do |t|
      t.string :user_name
      t.string :university_name
      t.string :department
      t.integer :grade
      t.string :profile_text
      t.string :self_pr
      t.string :desired_job
      t.string :github
      t.string :portfolio

      t.timestamps
    end
  end
end
