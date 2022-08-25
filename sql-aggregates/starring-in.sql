select "g"."name" as "genreName",
        count("g".*) as "numberOfAppearances"
   from "actors"
   join "castMembers" using ("actorId")
   join "filmGenre" using ("filmId")
   join "genres" as "g" using ("genreId")
   where "actors"."firstName" = 'Lisa' AND
        "actors"."lastName" = 'Monroe'
   group by "g"."genreId";
