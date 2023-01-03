import React from "react";
import Card from "../components/Card";


// cardList component > a list of all card components
const CardList  = ({robots}) => {
          return (
                    <div>
                              {
                                        // collecting each user and rendering a card component out of it
                                    robots.map((user) => {
                                                return (
                                                <Card 
                                                key = {user.phone} // Every user must have a unique key prop for the reference
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