class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :photos do |t|
      t.integer :user_id, null: false
      t.integer :recipe_id, null: false

      t.string :caption

      t.attachment :image
    end
    add_index :photos, :user_id
  end
end
