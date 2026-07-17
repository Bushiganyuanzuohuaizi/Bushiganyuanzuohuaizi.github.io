document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.replace(/\/+$/, "");
  const isHome =
    path === "" ||
    path.endsWith("/index.html") ||
    path === "/" ||
    /github\.io$/i.test(path);

  if (isHome) {
    document.body.setAttribute("data-page", "home");
  }
});
