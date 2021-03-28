require 'csv'
require 'json'

# format:
#
# 強い,つよい,(adj-i) strong; powerful; mighty; potent; resistant; resilient; durable; (P),tsuyoi,,,,,,,
#
# 0: expression
# 1: pronunciation
# 2: definition
CSV.foreach("./vocab_to_import.csv").with_index do |row, i|
  power_level = i + 1
  expression = row[0]
  pronunciation = row[1]
  definition = row[2]
  # ---
  # expression: 介抱
  # definition: "(n,vs) nursing; looking after"
  # notes: ''
  # screenshot: ''
  # pronunciation: かいほう
  #
  # ---

  File.open("./testoutput/#{power_level.to_s.rjust(5, '0')}.md", "w") { |file|
    file.puts "---"
    file.puts "powerlevel: #{power_level}"
    file.puts "expression: #{expression.to_json}"
    file.puts "definition: #{definition.to_json}"
    file.puts "pronunciation: #{pronunciation.to_json}"
    file.puts "---"
  }
end
