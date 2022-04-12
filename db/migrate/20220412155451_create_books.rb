class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.integer :user_id
      t.integer :group_id
      t.string :title
      t.string :author
      t.integer :personal_rating
      t.string :favorite_quote
      t.boolean :lent_out

      t.timestamps
    end
  end
end
