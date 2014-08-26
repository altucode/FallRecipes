class CreateUsdaIngredients < ActiveRecord::Migration
  def change
    create_table :usda_ingredients do |t|

      t.timestamps
    end
  end
end
