class CreateAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :albums do |t|
      t.string :name
      t.string :song
      t.string :producer
      t.string :cover_art
      t.integer :rapper_id

      t.timestamps
    end
  end
end
