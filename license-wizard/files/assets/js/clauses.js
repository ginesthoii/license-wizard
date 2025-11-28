/* --------------------------------------------------
   Clause Library
-------------------------------------------------- */

const CLAUSE_LIBRARY = {
  "anti-ai": "Anti-AI Use: This work may not be used to train, fine-tune, or operate machine learning, LLM, or AI systems.",
  "no-gov": "No Government Use: Governmental bodies may not use this work without explicit written permission.",
  "no-bigtech": "No Big-Tech Use: Corporations exceeding 1,000 employees or $100M/year revenue require written permission.",
  "no-saas": "No SaaS Resale: This work may not be resold, rented, or licensed as part of a hosted SaaS product.",
  "moral": "Moral Use Only: This work may not be used for harm, surveillance, exploitation, or rights violations.",
  "source-visible": "Source Visible: All deployments must offer live access to view the full unmodified source.",
  "personal": "Personal Use Only: This work may only be used in private, non-commercial personal projects.",
  "no-deriv": "No Derivatives: Modified versions may not be created or distributed.",
  "attrib": "Attribution Banner: Visible credit to the original author must appear in the UI of all derived works."
};

/* --------------------------------------------------
   Clause Builder
-------------------------------------------------- */

window.buildClauses = function(answerObj) {
  const out = [];

  answerObj.strict.forEach(key => {
    if (CLAUSE_LIBRARY[key]) {
      out.push(CLAUSE_LIBRARY[key]);
    }
  });

  return out;
};
