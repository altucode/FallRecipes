class CreateRecipeSteps < ActiveRecord::Migration
  def change
    create_table :recipe_steps do |t|
      t.integer :recipe_id, null: false
      t.integer :ord, null: false
      t.text :text, null: false
    end

    add_index :recipe_steps, :recipe_id
  end
end
