/* --------------------------------------------------
   License Text Templates
-------------------------------------------------- */

const licenseCache = {};

window.getLicenseText = function(key) {
  return licenseCache[key] || "ERROR: License not found.";
};

async function loadLicenseFiles() {
  const files = {
    "MIT": "/licenses/MIT.txt",
    "Apache": "/licenses/Apache-2.0.txt",
    "GPL": "/licenses/GPLv3.txt",
    "AGPL": "/licenses/AGPLv3.txt",
    "LGPL": "/licenses/LGPLv3.txt",
    "NC": "/licenses/CC-BY-NC-4.0.txt",
    "NC-ND": "/licenses/CC-BY-NC-ND-4.0.txt"
  };

  for (const key in files) {
    const res = await fetch(files[key]);
    const txt = await res.text();
    licenseCache[key] = injectNameYear(txt);
  }
}

function injectNameYear(text) {
  const year = new Date().getFullYear();
  return text.replace("{{YEAR}}", year).replace("{{NAME}}", "Olivia Griffin");
}

document.addEventListener("DOMContentLoaded", loadLicenseFiles);
