class User < ApplicationRecord
    has_secure_password
    
    has_many :books, dependent: :destroy
    # has_many :groups, through: :books

    validates :username, uniqueness: true, presence: true 
    # validates :password, :password_confirmation, presence: true
end
