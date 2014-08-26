class CreateRecipeCards < ActiveRecord::Migration
  def change
    create_table :recipe_cards do |t|
      t.integer :recipe_box_id, null: false
      t.integer :recipe_id, null: false
      t.datetime :created_at
    end
    add_index :recipe_cards, [:recipe_box_id, :recipe_id], unique: true
  end
end
