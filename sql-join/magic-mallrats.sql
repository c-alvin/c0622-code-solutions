select "c"."firstName",
        "c"."lastName"
    from "rentals"
    join "inventory" using ("inventoryId")
    join "customers" as "c" using ("customerId")
    join  "films" using ("filmId")
    where "films"."title" = 'Magic Mallrats';
