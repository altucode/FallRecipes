class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer :subscribable_id, null: false
      t.string :subscribable_type, null: false

      t.integer :subscriber_id, null: false
      t.string :subscriber_type, null: false

      t.datetime :created_at
    end
    add_index :subscriptions, [:subscribable_id, :subscribable_type]
    add_index :subscriptions, [:subscriber_id, :subscriber_type]
  end
end
