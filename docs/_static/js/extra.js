(() => {
  const path = window.location.pathname.replace(/\/+$/, "");
  const isHome =
    path === "" ||
    path.endsWith("/index.html") ||
    path === "/" ||
    /github\.io$/i.test(path);

  if (isHome) {
    document.body.setAttribute("data-page", "home");
  }

  const code = window.siteGoatcounterCode;
  if (!code) {
    return;
  }

  const endpoint = `https://${code}.goatcounter.com`;
  const script = document.createElement("script");
  script.src = "//gc.zgo.at/count.v5.js";
  script.async = true;
  script.crossOrigin = "anonymous";
  script.integrity =
    "sha384-atnOLvQb9t+jTSipvd75X2yginT4PjVbqDdlJAmxMm+wYElFmeR6EmLP5bYeoRVQ";
  script.dataset.goatcounter = `${endpoint}/count`;
  document.head.appendChild(script);

  const loadCount = (target, requestedPath) => {
    if (!target) {
      return;
    }

    const counterPath = requestedPath || window.location.pathname || "/";
    fetch(`${endpoint}/counter/${encodeURIComponent(counterPath)}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GoatCounter returned ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        target.textContent = data.count || data.count_unique || "0";
        target.dataset.loaded = "true";
      })
      .catch(() => {
        target.textContent = "暂不可用";
      });
  };

  window.addEventListener("load", () => {
    loadCount(document.querySelector("#site-total-views"), "TOTAL");
  });

  document.addEventListener("DOMContentLoaded", () => {
    if (isHome) {
      return;
    }

    const heading = document.querySelector(".md-content__inner > h1");
    if (!heading || document.querySelector(".page-stats")) {
      return;
    }

    const stats = document.createElement("div");
    stats.className = "page-stats";
    stats.innerHTML = `
      <span class="page-stats__item">
        <span class="page-stats__label">本文阅读</span>
        <strong class="page-stats__value">加载中</strong>
      </span>
    `;
    heading.insertAdjacentElement("afterend", stats);
    loadCount(stats.querySelector(".page-stats__value"));
  });
})();
