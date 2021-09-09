class CreateVideos < ActiveRecord::Migration[6.1]
  def change
    create_table :videos do |t|
      t.string :name
      t.string :song
      t.string :director
      t.string :cover_art
      t.integer :rapper_id

      t.timestamps
    end
  end
end
