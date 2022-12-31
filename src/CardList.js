import React from "react";
import Card from "./Card";


// cardList component > a list of all card components
const CardList  = ({robots}) => {
          return (
                    <div>
                              {
                                        // collecting each user and rendering a card component out of it
                                        robots.map((user) => {
                                                  return (
                                                  <Card 
                                                  key = {user.uniqueId} 
                                                  id = {user.id} 
                                                  name = {user.name} 
                                                  email = {user.email} />
                                                  )
                                        }) 
                              }
                    </div>
          );
}

export default CardList;