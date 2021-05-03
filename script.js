
/* Method is a function that can be used as an action for an object, they perform actions on the object that they are defined in */

let country = {

  /*we have an object named 'country' and it has a 'method' named 'bio' we would use it like: country.bio */

  name: "england",
  population: 1000,
  sea: true,
  language: "english",
  bio: function () {

    console.log (this.name + "is a country with" + this.population + "people");
  }   

}

country.bio();

/* METHOD, is a function that is used as an action for an object, like country the object, has a method called 'bio' */ 