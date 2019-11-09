here are sample of the calls used to test in postman

remember that my db content could be different ...
and 
NOTE :

get       - homepage list of all locations
http://localhost:3001/ 

get - home page drill down to activities for a location
http://localhost:3001/1  


NOTE : from here down we use the ids passed in from the body to process
not using whats on the URL address its only a place holder to find the right routes --- you will see for get alls and post that we need to pass the id of the owner 


post - to login
http://localhost:3001/login  
{
	"username":"jan",
	"password":"123"
}

post - to register
http://localhost:3001/register   
{
	"username":"steve",
	"password":"123"
}

get - get user data
http://localhost:3001/user/1  
{
	"id":1
}

put - to update user
http://localhost:3001/user/1  
{
    "id": 3,
    "username": "steve",
    "image_url": "asdasdasdasd",
    "fitness_level": 3,
    "email": "i don't do email"
}

delete - to delete user
http://localhost:3001/user/1  
{
    "id": 3
}
 
logout will be on the front end - just remove token and remove user form cache


get      - get all locations for a user
http://localhost:3001/user/1/location    
{
	"user_id":1
}

get - get a specific location
http://localhost:3001/1   
{
	"id":5
}

post   -- add location to user
http://localhost:3001/user/1/location
  {	"user_id":2,
    "name": "hereagain",
    "image_url": "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-bill-and-teds-excellent-adventure-keanu-reeves.jpg",
    "description": "description 1",
    "address_line1": "address line 1",
    "address_line2": "address line 2",
    "city": "nyc",
    "state": "ny",
    "zip": "07945"
    }

    put  - update a location
    http://localhost:3001/user/1/location/1
{
    "id": 4,
    "name": "hereagain and again",
    "image_url": "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-bill-and-teds-excellent-adventure-keanu-reeves.jpg",
    "description": "description 1",
    "address_line1": "address line 1",
    "address_line2": "address line 2",
    "city": "nyc",
    "state": "ny",
    "zip": "07945",
    "userId": 1
}

delete - delete a location
http://localhost:3001/user/1/location/1
{
    "id": 4
}

get    -- get all activities for a user
http://localhost:3001/user/1/location/1/actvity
{
	"location_id":1
}

get  - get a specific activity
http://localhost:3001/user/1/location/1/actvity/333
{
	"id":2
}

post   - add an activity for a location
    {
        "location_id": 1,
        "name": "do somethiasdasdasddasdng more",
        "date": "2019-11-08T20:28:47.942Z",
        "description": "doing somsdasdasething",
        "duration": "1hr",
        "recommended": "no",
        "cost": "too high",
        "completion": "no",
        "fitness_level": 1,
        "locationId": 1
    }

put  --- update an activity
http://localhost:3001/user/1/location/1/actvity/333
{
    "id": 2,
    "name": "do something asdsadasdasdasdelse",
    "date": "2019-11-08T20:28:47.942Z",
    "description": "coding",
    "duration": "foreverand a day",
    "recommended": "no",
    "cost": "$1",
    "completion": "no",
    "fitness_level": 2,
    "createdAt": "2019-11-08T20:28:47.944Z",
    "updatedAt": "2019-11-09T18:12:41.232Z",
    "locationId": 3
}

delete --  delete an activity
http://localhost:3001/user/1/location/1/actvity/333
{
    "id": 2
}