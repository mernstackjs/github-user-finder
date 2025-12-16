async function searchUser() {
  const username = document.getElementById("searchInput").value.trim();
  if (!username) return;

  const res = await fetch(`https://api.github.com/users/${username}`);
  const data = await res.json();

  document.getElementById("profileCard").style.display = "block";
  document.getElementById("avatar").src = data.avatar_url;
  document.getElementById("name").textContent = data.name || "No name";
  document.getElementById("username").textContent = "@" + data.login;
  document.getElementById("bio").textContent = data.bio || "No bio available";
  document.getElementById("repos").textContent = data.public_repos;
  document.getElementById("followers").textContent = data.followers;
  document.getElementById("following").textContent = data.following;
  document.getElementById("profileLink").href = data.html_url;
}
