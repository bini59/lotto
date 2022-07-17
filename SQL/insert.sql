-- insert all field
insert into user(`no`, `id`, `password`, `name`, `email`, `phone`, `order`)
values (
    1,
    'test1',
    'password',
    'test_id1',
    'email1',
    'phone1',
    1
);

-- insert exclude email, phone
insert into user(`no`, `id`, `password`, `name`, `order`)
values (
    2,
    'test2',
    'password',
    'test_id2',
    2
);

-- insert exclude email
insert into user(`no`, `id`, `password`, `name`, `email`, `order`)
values (
    3,
    'test3',
    'password',
    'test_id3',
    'email3',
    3
);

-- insert exclude phone
insert into user(`no`, `id`, `password`, `name`, `phone`, `order`)
values (
    4,
    'test4',
    'password',
    'test_id4',
    'phone4',
    4
);



-- insert lotto number
insert into numbers(`n_1`, `n_2`, `n_3`, `n_4`, `n_5`, `n_6`)
values (1, 2, 3, 4, 5, 6);