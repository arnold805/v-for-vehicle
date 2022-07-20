require 'rails_helper'

RSpec.describe User, type: :model do
  # context 'validations' do
  #   context 'email is not registered' do
  #     it 'is valid' do
  #       user = build(:user)
  #       expect(email.valid?).to eq(true)
  #     end
  #   end

  #   context 'email is already registered' do
  #     before do
  #       create(:user, email: email)
  #     end

  #     it 'is invalid' do
  #       user = build(:user)
  #       expect(user.email).to eq 'jdgreen@gmail.com'
  #       # expect(user.valid?).to eq(false)
  #       expect(user.errors.full_messages).to include('Email is already taken')
  #     end
  #   end
  # end
  it 'returns email for a user' do
    user = build(:user)
    expect(user.email).to eq 'jdgreen@gmail.com'
  end
end