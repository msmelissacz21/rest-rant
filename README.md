# Project REST-Rant


REST-Rant is an app where users can review restaurants.


## Routes

| Method   | Path                      | Purpose                                             |
| -------- |:-------------------------:| ---------------------------------------------------:|
| GET      |              /            |   Home page                                         |
| GET      |           /places         |   Places index page                                 |
| POST     |           /places         |   Create new place                                  |
| GET      |         /places/new       |   Form page for creating a new place                |
| GET      |         /places/:id       |   Details about a particular place                  |
| PUT      |        /places/:id        |   Update a particular place                         |
| GET      |      /places/:id/edit     |   Form page for editing an existing place           |
| DELETE   |         /places/:id       |   Delete a particular place                         | 
| POST     |        /places/:id/rant   |   Create a rant (comment) about a particular place  |
| DELETE   |  /places/:id/rant:rantID  |   Delete a rant (comment) about a particular place  |
| GET      |              *            |   404 page (matches any route not defined above)    |



## Places

| Restaurant Name                       | Restaurant City           | Restaurant State        | Cuisine                 | Picture            |
| ------------------------------------- |---------------------------| ------------------------|-------------------------|--------------------|
| Taco Bell                             |         Lake Geneva       |   Wisconsin             |  Mexican American Food  | Search Web         |
| Touch of Class                        |          Twin Lakes       |   Wisconsin             |  American Food          | Search Web         |
| Mad Dan's                             |          Twin Lakes       |   Wisconsin             |  Bar Food               | Search Web         |
| Burger King                           |          Twin Lakes       |   Wisconsin             |  Fast Food              | Search Web         |
| Bodi's                                |          Twin Lakes       |   Wisconsin             |  Bakery                 | Search Web         |
| Corner Kitchen Family Restaurant      |          Twin Lakes       |   Wisconsin             |  American Food          | Search Web         |
| La Casita Mexican Restaurant          |          Twin Lakes       |   Wisconsin             |  Mexican Food           | Search Web         |
| Manny's Snack Shack                   |          Twin Lakes       |   Wisconsin             |  American Food          | Search Web         |
| Subway                                |          Twin Lakes       |   Wisconsin             |  Fast Food              | Search Web         |
| Culvers                               |         Lake Geneva       |   Wisconsin             |  Fast Food              | Search Web         |
| Texas Roadouse                        |           Kenosha         |   Wisconsin             |  Texas Food             | Search Web         |

## Database Places Field and Type

| Feild    | Type                  | 
| -------- |-----------------------| 
| _id      |        Object ID      |   
| name     |         String        |  
| city     |         String        | 
| state    |         String        | 
| cuisines |         String        |   
| pic      |         String        | 

## Database Rants Field and Type

| Feild    | Type                     | 
| -------- |--------------------------| 
| _id      |         Object ID        |   
| place_id |  ref(places) Object_ID   |  
| rant     |           Boolean        | 
| rating   |           Number         | 
| comment  |           String         |   
| reviewer |           String         | 
