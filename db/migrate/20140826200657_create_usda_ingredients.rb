class CreateUsdaIngredients < ActiveRecord::Migration
  def change
    create_table :usda_ingredients do |t|
      t.string :item_name
      t.string :nf_serving_size_unit
      t.float :nf_serving_size_qty
      t.float :nf_calories
      t.float :nf_total_fat
      t.float :nf_saturated_fat
      t.float :nf_cholesterol
      t.float :nf_sodium
      t.float :nf_total_carbohydrate
      t.float :nf_sugars
      t.float :nf_protein
      t.float :nf_dietary_fiber
    end

    add_index :usda_ingredients, :name, unique: true
  end
end
