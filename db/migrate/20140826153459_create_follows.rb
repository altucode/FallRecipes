class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :follower_id, null: false
      t.datetime :created_at
    end
    add_index :follows, [:follower_id, :user_id], unique: true
  end
end
