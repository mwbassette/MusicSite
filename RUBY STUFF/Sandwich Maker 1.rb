#!/usr/bin/env ruby

#This is for the very unrealistic looking sandwich
def sandwich
    puts "[==========]"
    puts " 8888888888 "
    puts " ~~~~~~~~~~ "
    puts "o==========o"
    puts "[==========]"
end

#This is for 'yes'
def yes
    yes = gets.chomp
    puts "Here ya go! #{sandwich}"
end

#This is for 'no'
def no
    no = gets.chomp
    puts "Ok, well, come back later if you feel so inclined."
end

#This is for the beginning text
print "Welcome to the sandwich maker! Are you hungry? (Warning: bread is not optional) TYPE: 'yes' or 'no' without quotations."



=begin
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
=end






# This is for the bread
def bread
    @bread = bread
    puts "[==========]"
end

# This is for the meat
def meat
    @meat = meat
    puts " o========o "
end

# This is for the shitty lettuce
def lettuce
    @lettuce = lettuce
    puts "~~~~~~~~"
end

# This is for what's left of my sanity, uh, I mean tomatoes!
def tomatoes
    @tomatoes = tomatoes
    puts "88888888"
end


if __FILE__ == $0
    sm = SandwichMaker.new
    print "Welcome to the sandwich maker! Are you hungry? (Warning: bread is not optional) TYPE: 'yes' or 'no' without quotations."
end


