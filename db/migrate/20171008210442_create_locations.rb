class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.string :phone
      t.string :fax
      t.string :description
      t.string :latitude
      t.string :longitude
      t.text :hours
      t.timestamps
    end
  end
end
