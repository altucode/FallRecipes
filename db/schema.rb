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

ActiveRecord::Schema.define(version: 20140908003220) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "directions", force: true do |t|
    t.integer "recipe_id", null: false
    t.integer "ord",       null: false
    t.text    "body",      null: false
  end

  add_index "directions", ["recipe_id", "ord"], name: "index_directions_on_recipe_id_and_ord", unique: true, using: :btree

  create_table "ingredients", force: true do |t|
    t.integer "recipe_id", null: false
    t.integer "food_id",   null: false
    t.string  "name",      null: false
    t.string  "unit"
    t.float   "unit_qty",  null: false
  end

  add_index "ingredients", ["recipe_id", "food_id"], name: "index_ingredients_on_recipe_id_and_food_id", unique: true, using: :btree

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

  create_table "notifications", force: true do |t|
    t.integer  "subscriber_id",   null: false
    t.string   "subscriber_type", null: false
    t.integer  "notifiable_id",   null: false
    t.string   "notifiable_type", null: false
    t.integer  "event_id",        null: false
    t.boolean  "is_read"
    t.datetime "created_at"
  end

  add_index "notifications", ["event_id"], name: "index_notifications_on_event_id", using: :btree
  add_index "notifications", ["notifiable_id", "notifiable_type"], name: "index_notifications_on_notifiable_id_and_notifiable_type", using: :btree
  add_index "notifications", ["subscriber_id", "subscriber_type"], name: "index_notifications_on_subscriber_id_and_subscriber_type", using: :btree

  create_table "photos", force: true do |t|
    t.integer  "user_id",            null: false
    t.integer  "recipe_id",          null: false
    t.string   "caption"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

  create_table "recipes", force: true do |t|
    t.integer  "user_id",                          null: false
    t.string   "name",                             null: false
    t.integer  "prep_time",                        null: false
    t.integer  "cook_time",                        null: false
    t.integer  "servings",                         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.text     "desc"
    t.integer  "review_count"
    t.float    "calories",           default: 0.0, null: false
    t.float    "carbohydrate",       default: 0.0, null: false
    t.float    "cholesterol",        default: 0.0, null: false
    t.float    "fat",                default: 0.0, null: false
    t.float    "fiber",              default: 0.0, null: false
    t.float    "potassium",          default: 0.0, null: false
    t.float    "protein",            default: 0.0, null: false
    t.float    "saturated_fat",      default: 0.0, null: false
    t.float    "sodium",             default: 0.0, null: false
    t.float    "sugar",              default: 0.0, null: false
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

  create_table "shop_items", force: true do |t|
    t.integer "shop_list_id", null: false
    t.integer "usda_id",      null: false
    t.string  "unit",         null: false
    t.float   "unit_qt",      null: false
  end

  add_index "shop_items", ["shop_list_id", "usda_id"], name: "index_shop_items_on_shop_list_id_and_usda_id", unique: true, using: :btree

  create_table "shop_lists", force: true do |t|
    t.integer  "user_id",    null: false
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "shop_lists", ["user_id", "name"], name: "index_shop_lists_on_user_id_and_name", unique: true, using: :btree

  create_table "subscriptions", force: true do |t|
    t.integer  "subscribable_id",   null: false
    t.string   "subscribable_type", null: false
    t.integer  "subscriber_id",     null: false
    t.string   "subscriber_type",   null: false
    t.datetime "created_at"
  end

  add_index "subscriptions", ["subscribable_id", "subscribable_type"], name: "index_subscriptions_on_subscribable_id_and_subscribable_type", using: :btree
  add_index "subscriptions", ["subscriber_id", "subscriber_type"], name: "index_subscriptions_on_subscriber_id_and_subscriber_type", using: :btree

  create_table "taggings", force: true do |t|
    t.integer "recipe_id", null: false
    t.integer "tag_id",    null: false
  end

  add_index "taggings", ["recipe_id", "tag_id"], name: "index_taggings_on_recipe_id_and_tag_id", unique: true, using: :btree

  create_table "tags", force: true do |t|
    t.string "name", null: false
  end

  add_index "tags", ["name"], name: "index_tags_on_name", unique: true, using: :btree

  create_table "users", force: true do |t|
    t.string   "display_name",        null: false
    t.string   "username",            null: false
    t.string   "email",               null: false
    t.integer  "recipe_count"
    t.integer  "review_count"
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
