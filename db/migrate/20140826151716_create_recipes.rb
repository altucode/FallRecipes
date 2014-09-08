class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      #DURATIONS IN SECONDS
      t.integer :prep_time, null: false
      t.integer :cook_time, null: false

      t.integer :servings, null: false

      t.attachment :image

      t.text :desc

      t.integer :review_count

      t.float :calories, null: false, default: 0
      t.float :carbohydrate, null: false, default: 0
      t.float :cholesterol, null: false, default: 0
      t.float :fat, null: false, default: 0
      t.float :fiber, null: false, default: 0
      t.float :potassium, null: false, default: 0
      t.float :protein, null: false, default: 0
      t.float :saturated_fat, null: false, default: 0
      t.float :sodium, null: false, default: 0
      t.float :sugar, null: false, default: 0

      t.timestamps
    end

    add_index :recipes, :user_id
    add_index :recipes, :name
  end
end
