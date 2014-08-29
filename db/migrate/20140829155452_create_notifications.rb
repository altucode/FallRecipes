class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :subscriber_id
      t.string :subscriber_type

      t.integer :notifiable_id
      t.string :notifiable_type

      t.integer :event_id

      t.boolean :is_read

      t.datetime :created_at
    end
    add_index :notifications, [:subscriber_id, :subscriber_type]
    add_index :notifications, [:notifiable_id, :notifiable_type]
    add_index :notifications, :event_id
  end
end
