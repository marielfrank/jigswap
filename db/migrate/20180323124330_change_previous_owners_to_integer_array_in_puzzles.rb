class ChangePreviousOwnersToIntegerArrayInPuzzles < ActiveRecord::Migration[5.1]
  def change
    remove_column :puzzles, :previous_owners, :string, array: true
    add_column :puzzles, :previous_owners, :integer, array: true, default: []
  end
end
