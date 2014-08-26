class CreateRecipeBoxes < ActiveRecord::Migration
  def change
    create_table :recipe_boxes do |t|
      t.integer :user_id
      t.string :name
      t.timestamps
    end
    add_index :recipe_boxes, :user_id
  end
end
