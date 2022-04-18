class RemoveGroupsFromDataBase < ActiveRecord::Migration[6.1]
  def change
    remove_column :books, :group_id, :integer
  end
end
