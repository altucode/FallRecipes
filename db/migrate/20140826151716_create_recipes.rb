class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :image_url
      t.time :prep_time, null: false
      t.time :cook_time, null: false
      t.integer :servings, null: false

      t.text :desc

      t.timestamps
    end

    add_index :recipes, :user_id
    add_index :recipes, :name
  end
end
