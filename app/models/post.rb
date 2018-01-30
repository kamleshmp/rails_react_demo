require 'carrierwave/orm/activerecord'

class Post < ActiveRecord::Base
	mount_uploader :avatar, AvatarUploader
end
