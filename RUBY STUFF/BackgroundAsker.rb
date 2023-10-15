print "What's your first name?"
first_name = gets.chomp
first_name.capitalize!

print "What's your last name?"
last_name = gets.chomp
last_name.capitalize!

print "What's your city?"
city = gets.chomp
city.capitalize!

print "What's your state? (2-letter abbreviation please)"
state = gets.chomp
state.upcase!

print "Your first name is #{first_name}, your last name is #{last_name}, your city is #{city}, and your state is #{state}." 