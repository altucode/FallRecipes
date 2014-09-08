class CreateDirections < ActiveRecord::Migration
  def change
    create_table :directions do |t|
      t.integer :recipe_id, null: false
      t.integer :ord, null: false

      t.text :body, null: false
    end
    add_index :directions, [:recipe_id, :ord], unique: true
  end
end
