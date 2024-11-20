window.onload = () => {
  fetch("https://server-06z2.onrender.com/devs")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};
