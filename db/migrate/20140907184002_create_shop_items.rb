class CreateShopItems < ActiveRecord::Migration
  def change
    create_table :shop_items do |t|
      t.integer :shop_list_id, null: false
      t.integer :usda_id, null: false
      t.string :unit, null: false
      t.float :unit_qt, null: false
    end
    add_index :shop_items, [:shop_list_id, :usda_id], unique: true
  end
end
