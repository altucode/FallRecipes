class CreateMenuItems < ActiveRecord::Migration
  def change
    create_table :menu_items do |t|
      t.integer :menu_id, null: false
      t.integer :recipe_id, null: false
      t.datetime :created_at
    end
    add_index :menu_items, [:menu_id, :recipe_id], unique: true
  end
end
