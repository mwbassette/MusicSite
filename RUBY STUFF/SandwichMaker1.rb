#This is for a very unrealistic looking sandwich
def sandwich
    puts "[==========]"
    puts " 8888888888 "
    puts " ~~~~~~~~~~ "
    puts "o==========o"
    puts "[==========]"
end
=begin
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
=end

#This is for the beginning of the text prompt
print "Welcome to the sandwich maker! Are you hungry? (Warning: bread is not optional) TYPE: 'yes' or 'no' without quotations."
sandwich = gets.chomp
case sandwich
when 'yes'
    sandwich = true
    puts "Here ya go!"
    puts "[==========]"
    puts " 8888888888 "
    puts " ~~~~~~~~~~ "
    puts "o==========o"
    puts "[==========]"
when 'no'
    sandwich = false
    puts "Ok, well, come back later if you feel so inclined."
end
