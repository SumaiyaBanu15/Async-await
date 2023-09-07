async function restApi() {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await data.json();

      const container = document.createElement("div");
      const h1 = document.createElement("h1");
      container.setAttribute("class", "container");
      h1.innerText = "Users List";
      container.appendChild(h1);
    
  
      for (let i = 0; i < result.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `
      <div class="row row-cols-1 row-cols-md-2 g-3 m-3 p-3 ">
        <div class="col">
          <div class="card">
            <div class="card-body">
            <p class="card-text"><b>Name : ${result[i].name}</b></p>
            <p class="card-text">Email : ${result[i].email}</p>
            <p class="card-text">Street : ${result[i].address.street}</p>
            <p class="card-text">City : ${result[i].address.city}</p>
            </div>
          </div>
        </div>
      </div>`;
    
        container.appendChild(div);
      }
      document.body.append(container);
    } catch (error) {
      console.log(error);
    }
  }
  
  restApi();


