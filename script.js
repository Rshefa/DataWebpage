fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{
        console.log(data);
       const users = data.map(users =>{
          return `
            <div>
              <h2> ${users.name}</h2>
              </div>
             `
       })
             document.getElementById('users').innerHTML = users.join(" ");   
            
      })

      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(info =>{
        console.log(info);
        const firstTen = info.slice(0, 10);

        const post = firstTen.map(post => {
          return `
            <div>
              <h2> ${post.body}</h2>
              </div>
             `
       })
             document.getElementById('post').innerHTML = post.join(" ");   
            
      })
      
      
    
