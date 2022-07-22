require "rails_helper"

RSpec.describe PasswordResetEmailMailer, type: :mailer do
  describe '#pwreset' do
    specify do
      password_reset_email = build(:user)
      mailer = described_class.with(password_reset: password_reset).pwreset

      expect(mailer.to).to eq([password_reset.email])
  end
end
end
