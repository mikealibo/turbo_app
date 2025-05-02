class Article < ApplicationRecord
  validates :title, presence: true

  after_create_commit -> { broadcast_prepend_to "articles" }
  after_update_commit -> { broadcast_prepend_to "articles" }
end
