class User < ApplicationRecord
    validates :username, presence: true
    validates :email, presence: true, uniqueness: true
    # use bcrypt for password security
    has_secure_password

    has_many :puzzles
    has_many :reviews
    belongs_to :location

    # authentication/authorization methods
    def admin?
        self.admin
    end

    # def owner_or_admin?(resource)
    #     if admin?
    #         true
    #     elsif resource.respond_to?('user')
    #         resource.user == self
    #     else
    #         false
    #     end
    # end

    # def self.set_user_from_oauth(auth)
    #     find_or_create_by(uid: auth['uid']) do |u|
    #         u.name = auth['info']['name']
    #         u.email = auth['info']['email']
    #         # set random secure password if new user
    #         u.password ||= SecureRandom.base58
    #     end
    # end
end
