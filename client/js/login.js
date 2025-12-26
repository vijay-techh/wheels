async function login() {
  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: user.value,
      password: pass.value
    })
  });

  const data = await res.json();

  if (!res.ok) {
    error.innerText = data.message;
    return;
  }

  localStorage.setItem("token", data.token);

  if (data.role === "admin") {
    location.href = "admin.html";
  } else {
    location.href = "employee.html";
  }
}
