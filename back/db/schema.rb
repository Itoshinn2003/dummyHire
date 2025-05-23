# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_05_18_080145) do
  create_table "companies", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "name"
    t.string "profile_text"
    t.string "location"
    t.string "established"
    t.integer "employee"
    t.string "official_site"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password"
    t.string "mail"
  end

  create_table "interns", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.string "title"
    t.string "job"
    t.string "intern_text"
    t.string "terms"
    t.string "selection"
    t.integer "salary"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["company_id"], name: "index_interns_on_company_id"
  end

  create_table "likes", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.bigint "intern_id", null: false
    t.bigint "student_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["intern_id"], name: "index_likes_on_intern_id"
    t.index ["student_id"], name: "index_likes_on_student_id"
  end

  create_table "messages", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "sender_type", null: false
    t.bigint "sender_id", null: false
    t.string "receiver_type", null: false
    t.bigint "receiver_id", null: false
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["receiver_type", "receiver_id"], name: "index_messages_on_receiver"
    t.index ["sender_type", "sender_id"], name: "index_messages_on_sender"
  end

  create_table "students", charset: "utf8mb4", collation: "utf8mb4_0900_ai_ci", force: :cascade do |t|
    t.string "user_name"
    t.string "university_name"
    t.string "department"
    t.integer "grade"
    t.string "profile_text"
    t.string "self_pr"
    t.string "desired_job"
    t.string "github"
    t.string "portfolio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "user_id"
    t.string "password"
    t.string "region"
  end

  add_foreign_key "interns", "companies"
  add_foreign_key "likes", "interns"
  add_foreign_key "likes", "students"
end
