class CreateCampsAlbums < ActiveRecord::Migration[6.1]
  def change
    create_table :camps_albums do |t|
      t.belongs_to :camp
      t.belongs_to :album


      t.timestamps
    end
  end
end
