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

      t.timestamps
    end

    add_index :recipes, :user_id
    add_index :recipes, :name
  end
end
