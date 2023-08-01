async function load() {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbylfmEIxkoNMyvSM8M83qOt4jOh9KGAT2r4D8k6Pc9Qov0kNUkTfFt0_rx9PUzOZXrY/exec"
  );
  const events = await response.json();

  const eventsContainer = document.getElementById("events-container");

  eventsContainer.innerHTML = ""; // remove the loader

  for (let event of events) {
    eventsContainer.innerHTML += `<div class="card w-72 bg-base-100 shadow-xl">
    <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
    <div class="card-body">
      <h2 class="card-title">${event.Name}</h2>
      <p>${event.Location}<br/>${event.Date}</p>
      <div class="card-actions justify-end">
        <a class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
      </div>
    </div>
  </div>`;
  }
}

load();
