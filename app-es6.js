/*** Scripts - Start ***/

// 'Get Text' - Button
document.querySelector("#button1").addEventListener("click", getText);

// 'Get Json' - Button
document.querySelector("#button2").addEventListener("click", getJson);

// Get API Data - Button
document.querySelector("#button3").addEventListener("click", getExternal);

// Clear Button
document
  .querySelector("#clearall")
  .addEventListener(
    "click",
    () => (document.querySelector("#output").innerHTML = "")
  );

// document.querySelector("#button2")

// Get the Local Text File
function getText() {
  fetch("test.txt")
    .then(resp => resp.text())
    .then(data => {
      console.log(data);
      document.querySelector("#output").innerHTML = data;
    })
    .catch(err => console.log(err));
}

// Get the Local Json File
function getJson() {
  fetch("posts.json")
    .then(resp => resp.json())
    .then(posts => {
      // console.log(data);
      let output = "";
      posts.forEach(post => {
        output += `<div class="box-post">
            <div class="title">${post.title}</div>
            <div class="content">${post.body}</div>
        </div>`;
        document.querySelector("#output").innerHTML = output;
      });
    })
    .catch(err => console.log(err));
}

// Get External API - https://api.github.com/users
function getExternal() {
  fetch("https://api.github.com/users")
    .then(resp => resp.json())
    .then(users => {
      let wrapper = document.createElement("div");
      document.querySelector("#output").innerHTML = "";
      users.forEach((user, index) => {
        wrapper.className = "row ubox";
        wrapper.innerHTML += `<div class="three columns userbox">
      <img src="${user.avatar_url}" alt="${user.login}" />
      <strong>${user.login}</strong>
      </div>`;
      });

      document.querySelector("#output").append(wrapper);
      // console.log(wrapper);
    })
    .catch(err => console.log(err));
}
/*** Scripts - End ***/
