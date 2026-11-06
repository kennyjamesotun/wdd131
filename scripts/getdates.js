<script>
  const d = new Date(document.lastModified);
  const pad = n = String(n).padStart(2, "0");
  document.getElementById("lastModified").textContent =
    `${pad(d.getMonth() + 1)}/${pad(d.getDate())}/${d.getFullYear()} ` +
    `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
</script>