class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id
      t.integer :usda_id
      t.string :unit
      t.float :unit_qty
    end
    add_index :ingredients, [:recipe_id, :usda_id], unique: true
  end
end
