FactoryBot.define do
    factory :user do
        first_name { 'John' }
        last_name { 'Deere' }
        email { 'jdgreen@gmail.com' }
        password_digest { 'BigGreenTR!' }
        admin { false }
    end
end