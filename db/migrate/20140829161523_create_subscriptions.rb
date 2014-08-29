class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer :notifiable_id, null: false
      t.string :notifiable_type, null: false

      t.integer :subscriber_id, null: false
      t.string :subscriber_type, null: false

      t.datetime :created_at
    end
    add_index :subscriptions, [:notifiable_id, :notifiable_type]
    add_index :subscriptions, [:subscriber_id, :subscriber_type]
  end
end
