class CreateWishCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :wish_categories do |t|
      t.string :name
      t.string :icon
      t.string :order
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
