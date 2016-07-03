class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :genre
      t.string :img_link
      t.string :amazon_link
      t.string :text
      
      t.timestamps null: false
    end
  end
end
