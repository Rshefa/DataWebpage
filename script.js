fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => console.log(json))

      const myList = document.getElementById("list");
      function data(obj){
        const section = document.querySelector("sector");
        const album = obj.json
        for(const user of userId){
            const usernum = document.createElement("p");
            const id = document.createElement("p");
            const title = document.createElement("p");
            
        }
      }