select "c"."name" as "countryName",
        count("cit".*) as "numberOfCities"
    from "countries" as "c"
    join "cities" as "cit" using ("countryId")
    group by "c"."countryId";
