class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.integer :puzzle_id
      t.text :comment
      t.integer :user_id

      t.timestamps
    end
  end
end
