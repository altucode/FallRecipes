class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :recipe_id, null: false
      t.integer :user_id, null: false

      t.integer :score
      t.text :body, null: false

      t.timestamps
    end
    add_index :reviews, [:recipe_id, :user_id], unique: true
  end
end
