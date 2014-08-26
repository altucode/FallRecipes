class CreateMenus < ActiveRecord::Migration
  def change
    create_table :menus do |t|
      t.integer :user_id, null: false
      t.string :name, null: false
      t.timestamps
    end
    add_index :menus, :user_id
  end
end
