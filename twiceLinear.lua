--[[
https://www.codewars.com/kata/5672682212c8ecf83e000050/train/lua

Twice linear

Consider a sequence u where u is defined as follows:

    The number u(0) = 1 is the first one in u.
    For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
    There are no other numbers in u.

Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
Task:

Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).
Example:

dbl_linear(10) should return 22
]]

-- CODE

local solution = {}

function solution.dblLinear(n)
  if n == 0 then return 1 end
  arr = {1}
  a, j = 1, 1
  while a<=n do
    local y, z
    y, z = 2*j+1, 3*j+1
    local checker, checker2 = false, false
    for _,i in pairs(arr) do
      if not(checker and checker2) then
        if (i==y) then
          checker = true
        elseif (i==z) then
          checker2 = true
        end
      end
    end
    if not(checker) then table.insert(arr,y) end
    if not(checker2) then table.insert(arr,z) end
    a=a+1
    j=arr[a]
    table.sort(arr)
  end
  return arr[n+1]
end

return solution


-- TESTING CASE

local solution = require 'solution'

describe("twiceLinear", function()
  local function testing(n, expect)
    local actual = solution.dblLinear(n)
    assert.are.same(expect, actual)
  end
  
  it("basic tests", function()
    testing(10, 22)
    testing(20, 57)
    testing(30, 91)
    testing(50, 175)
    
  end)
  
end)
