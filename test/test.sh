
### USER ###

# Create
curl -X POST http://localhost:3000/users/new -H "Content-Type: application/json" -d '{"name": "Beatrix Kiddo", "id": "Bride", "password": "1234" }'
curl -X POST http://localhost:3000/users/new -H "Content-Type: application/json" -d '{"name": "Elle Driver", "id": "California Mountain Snake", "password": "1234" }'

# Read
curl -X GET http://localhost:3000/users

# Delete
curl -X DELETE http://localhost:3000/users/636378b3a7c4e5b4e8f09fc4

# Update
curl -X PATCH http://localhost:3000/users/636371bbfe033f39fb34bcbf -H "Content-Type: application/json" -d '{"id":"Black Mamba"}'


### history ###
# Create
curl -X POST http://localhost:3000/history -H "Content-Type: application/json" -d '{"title": "Kill Bill", "content": "I want to kill Bill", "owner":"636371bbfe033f39fb34bcbf", "date":"1667466181"}'

#Read All By Owner
curl -X GET http://localhost:3000/history/list/636371bbfe033f39fb34bcbf

