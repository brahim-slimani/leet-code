select t.request_at as Day, round((count(
    case t.status 
        when 'cancelled_by_driver' then 1
        when 'cancelled_by_client' then 1
    end)/count(*)),2) as "Cancellation Rate" from trips t

where   TO_DATE(t.request_at, 'YYYY-MM-DD') between to_date('2013-10-01', 'YYYY-MM-DD') and to_date('2013-10-03', 'YYYY-MM-DD')
and     t.driver_id in (select users_id from users where banned ='No')
and     t.client_id in (select users_id from users where banned ='No')
group by t.request_at;
