class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false
      t.datetime :created_at
    end
    add_index :favorites, [:user_id, :recipe_id], unique: true
  end
end
