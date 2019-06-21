class CreateJoyrides < ActiveRecord::Migration[5.2]
  def change
    create_table :joyrides do |t|
      t.string :name
      t.string :image
      t.string :location
      t.string :comments

      t.timestamps
    end
  end
end
