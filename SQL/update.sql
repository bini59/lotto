-- update order when user choose number
update `user`
set `order` = `order`+1
where `name`="test_id";


-- update user name
update `user`
set `name` = "updated_name"
where `name`="test_id2";