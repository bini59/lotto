-- select with id
-- for login
select `name`, `password` from user where id="test1";

-- select number with user order, name
select n.*
from `numbers` as n
join user as u
on u.order = n.no
where u.name = "test_id";