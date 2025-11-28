/* --------------------------------------------------
   Decision Tree Engine
-------------------------------------------------- */

window.buildLicense = function() {
  const answers = collectAnswers();
  const base = chooseBaseLicense(answers);
  const clauses = window.buildClauses(answers);
  const rendered = window.renderLicense(base, clauses);

  return rendered;
};

function collectAnswers() {
  return {
    commercial: getRadio("commercial-use"),
    closed: getRadio("closed-source"),
    deriv: getRadio("derivatives"),
    publicEdit: getRadio("public-edit"),
    saas: getRadio("saas"),
    strict: collectStrictClauses()
  };
}

function getRadio(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : null;
}

function collectStrictClauses() {
  const selected = [];
  document.querySelectorAll('input[name="strict"]:checked').forEach(c => {
    selected.push(c.value);
  });
  return selected;
}

/* --------------------------------------------------
   Base License Rules
-------------------------------------------------- */

function chooseBaseLicense(a) {
  // STRONGEST COPYPLEFT → GPL
  if (a.deriv === "strong") {
    if (a.saas === "yes") return "AGPL";
    return "GPL";
  }

  // WEAK COPYPLEFT
  if (a.deriv === "weak") {
    return "LGPL";
  }

  // No derivatives allowed
  if (a.deriv === "none") {
    return "NC-ND";
  }

  // Closed source allowed?
  if (a.closed === "yes") {
    // MIT or Apache
    if (a.commercial === "yes") return "Apache";
    return "MIT";
  }

  // Open source, but no commercial
  if (a.commercial === "no") return "NC";

  // Default fallback
  return "MIT";
}

/* --------------------------------------------------
   License Rendering
-------------------------------------------------- */

window.renderLicense = function(baseKey, clauseList) {
  const baseText = window.getLicenseText(baseKey);

  let full = "";
  full += `${baseText.trim()}\n\n`;
  full += "--------------------------------------------------\n";
  full += "ADDITIONAL STRICT CLAUSES\n";
  full += "--------------------------------------------------\n\n";
  full += clauseList.join("\n\n");

  return full.trim();
};
