class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.integer :recipe_id
      t.string :type
      t.float :units
      t.string :unit_type
    end
    add_index :ingredients, [:recipe_id, :type]
  end
end
