class CreatePuzzles < ActiveRecord::Migration[5.1]
  def change
    create_table :puzzles do |t|
      t.string :name
      t.integer :pieces
      t.integer :missing_pieces
      t.array :previous_owners
      t.integer :user_id

      t.timestamps
    end
  end
end
