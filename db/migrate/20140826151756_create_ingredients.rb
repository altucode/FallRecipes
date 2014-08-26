class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id
      t.integer :usda_id
      t.float :units
      t.string :unit_type
    end
    add_index :ingredients, [:recipe_id, :usda_id], unique: true
  end
end
