class CreatePuzzleTags < ActiveRecord::Migration[5.1]
  def change
    create_table :puzzle_tags do |t|
      t.integer :tag_id
      t.integer :puzzle_id

      t.timestamps
    end
  end
end
