# starting_number = 1
# puts 1
#
# 99.times do
#     puts starting_number = starting_number + 1
# end


# starting_number = 0
#
# 100.times do
#     puts starting_number += 1
# end


# (1..100).each do |i|
#     puts i
# end

# for i in (1..100) do
#     puts i
# end

# starting_number = 0
#
# while starting_number < 100 do
#     starting_number = starting_number + 1
#     puts starting_number
# end

# starting_number = 0
#
# until starting_number > 99 do
#     starting_number = starting_number + 1
#     puts starting_number
# end

# bread = "bbbbbbbbb"
# cheese = "ccccccccc"
# tomatoes = "ttttttttt"
#
# half_sandwich = bread, cheese, tomatoes, bread
# full_sandwich = bread * 2, cheese * 2, tomatoes * 2, bread * 2
# gay_tomato_allergy = bread, cheese, bread
# double_gay_tomato_allergy = bread * 2, cheese * 2, bread * 2
#
#
# sandwich_order = gets.chomp
# puts sandwich_order.inspect
# if sandwich_order == "half_sandwich"
#     puts half_sandwich
# end
# if sandwich_order == "full_sandwich"
#     puts full_sandwich
# end
# if sandwich_order == "gay_tomato_allergy"
#     puts gay_tomato_allergy
# end
# if sandwich_order == "double_gay_tomato_allergy"
#     puts double_gay_tomato_allergy
# end

@sandwich_length = 6

@bread = "b"


tomato = "t"
cheese = "c"

@toppings = gets.chomp!.split

def print_ingredient (ingredient)
    puts ingredient * @sandwich_length
end

def print_sandwich (sandwich)
    print_ingredient @bread
    for topping in @toppings do
        print_ingredient (topping)
    end
    print_ingredient @bread
end

print_sandwich @sandwich
