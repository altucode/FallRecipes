class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id, null: false
      t.integer :food_id, null: false
      t.string :name, null: false
      t.string :unit
      t.float :unit_qty, null: false
    end
    add_index :ingredients, [:recipe_id, :food_id], unique: true
  end
end
