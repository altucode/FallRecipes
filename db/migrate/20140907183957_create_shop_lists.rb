class CreateShopLists < ActiveRecord::Migration
  def change
    create_table :shop_lists do |t|
      t.integer :user_id, null: false
      t.string :name, null: false

      t.timestamps
    end
    add_index :shop_lists, [:user_id, :name], unique: true
  end
end
