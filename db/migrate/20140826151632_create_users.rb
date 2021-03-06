class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :display_name, null: false
      t.string :username, null: false
      t.string :email, null: false

      t.integer :recipe_count
      t.integer :review_count

      t.attachment :avatar

      t.text :about

      t.string :password_digest, null: false

      t.string :session_token, null: false

      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
    add_index :users, :session_token, unique: true
  end
end
