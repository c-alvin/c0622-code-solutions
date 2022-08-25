with replacementCost as (
    select "f"."filmId",
            "f"."title",
            count("i".*) as "itemsInventory",
            "f"."replacementCost",
            count("i".*) * "f"."replacementCost" as "totalReplacementCost"
    from "films" as "f"
    join "inventory" as "i" using ("filmId")
    group by "f"."filmId"
),
revenue as (
    select "f"."filmId",
            "f"."description",
            "f"."rating",
            SUM("p"."amount") as "totalPayments"
    from "films" as "f"
    join "inventory" as "i" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" as "p" using ("rentalId")
    group by "f"."filmId"
)


select "r"."title",
      "rev"."description",
      "rev"."rating",
      "rev"."totalPayments" - "r"."totalReplacementCost" as "totalProfit"
  from replacementCost as "r"
  join revenue as "rev" using ("filmId")
  order by "totalProfit" DESC
  limit 5;
