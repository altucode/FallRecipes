# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140826200657) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: true do |t|
    t.integer  "recipe_id",  null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at"
  end

  add_index "favorites", ["user_id", "recipe_id"], name: "index_favorites_on_user_id_and_recipe_id", unique: true, using: :btree

  create_table "follows", force: true do |t|
    t.integer  "user_id",     null: false
    t.integer  "follower_id", null: false
    t.datetime "created_at"
  end

  add_index "follows", ["follower_id", "user_id"], name: "index_follows_on_follower_id_and_user_id", unique: true, using: :btree

  create_table "ingredients", force: true do |t|
    t.integer "recipe_id"
    t.integer "usda_id"
    t.string  "unit"
    t.float   "unit_qty"
  end

  add_index "ingredients", ["recipe_id", "usda_id"], name: "index_ingredients_on_recipe_id_and_usda_id", unique: true, using: :btree

  create_table "menu_items", force: true do |t|
    t.integer  "menu_id",    null: false
    t.integer  "recipe_id",  null: false
    t.datetime "created_at"
  end

  add_index "menu_items", ["menu_id", "recipe_id"], name: "index_menu_items_on_menu_id_and_recipe_id", unique: true, using: :btree

  create_table "menus", force: true do |t|
    t.integer  "user_id",    null: false
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "menus", ["user_id"], name: "index_menus_on_user_id", using: :btree

  create_table "recipe_boxes", force: true do |t|
    t.integer  "user_id"
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "recipe_boxes", ["user_id"], name: "index_recipe_boxes_on_user_id", using: :btree

  create_table "recipe_cards", force: true do |t|
    t.integer  "recipe_box_id", null: false
    t.integer  "recipe_id",     null: false
    t.datetime "created_at"
  end

  add_index "recipe_cards", ["recipe_box_id", "recipe_id"], name: "index_recipe_cards_on_recipe_box_id_and_recipe_id", unique: true, using: :btree

  create_table "recipe_steps", force: true do |t|
    t.integer "recipe_id", null: false
    t.integer "ord",       null: false
    t.text    "text",      null: false
  end

  add_index "recipe_steps", ["recipe_id"], name: "index_recipe_steps_on_recipe_id", using: :btree

  create_table "recipes", force: true do |t|
    t.integer  "user_id",            null: false
    t.string   "name",               null: false
    t.integer  "prep_time",          null: false
    t.integer  "cook_time",          null: false
    t.integer  "servings",           null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.text     "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "recipes", ["name"], name: "index_recipes_on_name", using: :btree
  add_index "recipes", ["user_id"], name: "index_recipes_on_user_id", using: :btree

  create_table "reviews", force: true do |t|
    t.integer  "recipe_id",  null: false
    t.integer  "user_id",    null: false
    t.integer  "score"
    t.text     "body",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "reviews", ["recipe_id", "user_id"], name: "index_reviews_on_recipe_id_and_user_id", unique: true, using: :btree

  create_table "taggings", force: true do |t|
    t.integer "recipe_id"
    t.integer "tag_id"
  end

  add_index "taggings", ["recipe_id", "tag_id"], name: "index_taggings_on_recipe_id_and_tag_id", unique: true, using: :btree

  create_table "tags", force: true do |t|
    t.string "name"
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "usda_ingredients", force: true do |t|
    t.string "item_name"
    t.string "nf_serving_size_unit"
    t.float  "nf_serving_size_qty"
    t.float  "nf_calories"
    t.float  "nf_total_fat"
    t.float  "nf_saturated_fat"
    t.float  "nf_cholesterol"
    t.float  "nf_sodium"
    t.float  "nf_total_carbohydrate"
    t.float  "nf_sugars"
    t.float  "nf_protein"
    t.float  "nf_dietary_fiber"
  end

  add_index "usda_ingredients", ["item_name"], name: "index_usda_ingredients_on_item_name", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.string   "username",            null: false
    t.string   "first_name",          null: false
    t.string   "last_name",           null: false
    t.string   "email",               null: false
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.text     "about"
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
