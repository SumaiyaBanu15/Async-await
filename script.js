async function restApi() {
  try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await data.json();

      const container = document.querySelector('.row');
      // No need to create a new container element

      for (let i = 0; i < result.length; i++) {
          const div = document.createElement("div");
          div.innerHTML = `
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
          `;
          container.appendChild(div);
      }
  } catch (error) {
      console.log(error);
  }
}

restApi();