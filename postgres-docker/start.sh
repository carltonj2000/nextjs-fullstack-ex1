DATA=$PWD/data
echo $DATA
docker run -d \
  --name some-postgres \
  -e POSTGRES_PASSWORD=mysecretpassword \
  -e PGDATA=/var/lib/postgresql/data/pgdata \
  -v $DATA:/var/lib/postgresql/data/pgdata \
  -p 5432:5432 \
  postgres:15.3

