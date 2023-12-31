WITH CTE AS (SELECT *, ID - ROW_NUMBER() OVER(ORDER BY ID) AS DIFF 
FROM STADIUM WHERE PEOPLE >= 100)
SELECT C.ID, C.VISIT_DATE, C.PEOPLE FROM CTE C WHERE C.ID IN (
    SELECT ID FROM CTE WHERE DIFF IN (
        SELECT DIFF FROM CTE GROUP BY DIFF HAVING COUNT(ID) > 2 
    )
) ORDER BY C.VISIT_DATE ASC;
