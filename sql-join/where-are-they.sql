select "addresses"."line1",
        "addresses"."district",
        "city"."name",
        "country"."name"
    from "addresses"
    join "cities" as "city" using ("cityId")
    join "countries" as "country" using ("countryId");
