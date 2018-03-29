class CreatePuzzles < ActiveRecord::Migration[5.1]
  def change
    create_table :puzzles do |t|
      t.string :name
      t.integer :pieces
      t.integer :missing_pieces
      t.string :previous_owners, array: true
      t.integer :user_id

      t.timestamps
    end
  end
end
