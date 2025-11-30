# License Wizard — Interactive License Generator

>A fully interactive, multi-step, hybrid license-generation wizard.  <br>
>Designed to help developers, researchers, makers, and indie creators choose — or build — the perfect software license.

## This wizard supports:
- Standard OSS licenses (MIT, GPL, LGPL, AGPL, Apache, MPL, Unlicense)
- A rules-based decision tree that recommends the best license
- Strict clauses for Anti-AI, No-Government-Use, No-Big-Tech-Use, No-SaaS-Resale, Moral-Use, Attribution-Banner, and more
- A hybrid inline/accordion explanation system for beginners and advanced users
- Auto-generated LICENSE files with inserted strict clauses
- GitHub badges, PDF export, and clipboard export
- Full comparison tables for all major licenses
- Optional “Super-Strict License Template” mode
- Full dark-mode UI  

---

## Features

### Smart Decision Tree
A scoring engine evaluates:
- Commercial use permissions  
- Closed-source allowance  
- Copyleft strength (weak, strong, file-based)  
- Public editing rights  
- SaaS/web deployment requirements  
- Custom strict clauses  

The wizard generates a structured profile and automatically recommends MIT, GPL, AGPL, Apache, MPL, or a custom strict license.

### Strict Clause System
Add optional restrictions such as:
- Anti-AI training/fine-tuning  
- No government use  
- No big-tech use  
- Personal-use only  
- Moral-use only  
- Source-visible but not usable  
- Attribution-banner requirement  
- No derivatives  
- No SaaS resale  

All clauses are inserted directly into the final LICENSE.

### License Comparison Table
A developer-friendly, side-by-side comparison of:
- MIT  
- Apache 2.0  
- GPLv3  
- AGPLv3  
- LGPLv3  
- MPL 2.0  
- Other personalized licenses

Each includes categories for:  
commercial use, patent protection, copyleft strength, SaaS rules, liability, warranty, and redistribution requirements.

### Export Options
- **Download LICENSE file**  
- **Copy to clipboard**  
- **PDF export**  
- **Export with strict clauses**  
- **GitHub Action** that automatically injects the LICENSE into your repo on commit  

### UI Highlights
- Clean, modern card layout  
- Responsive multi-page wizard  
- Hybrid option explanations (inline + accordion)  
- Dark mode switch  
- Optional watermark branding  

---

## Project Structure


## License Comparison Table

| License Type | Commercial Use | Closed Source Allowed | Derivatives Allowed | Must Remain Free | Web/SaaS Must Share Source | Notes |
|--------------|----------------|------------------------|----------------------|------------------|-----------------------------|-------|
| **GPLv3** | ✔ | ❌ | ✔ | ✔ Strong Copyleft | ❌ | Strongest open-source protection; ensures “free forever” |
| **AGPLv3** | ✔ | ❌ | ✔ | ✔ Strong Copyleft | ✔ Mandatory | Prevents companies from hiding modified versions behind web servers |
| **LGPL** | ✔ | ✔ | ✔ (if linked) | Weak Copyleft | ❌ | Libraries can be used in closed software |
| **MPL 2.0** | ✔ | ✔ | ✔ | File-level Copyleft | ❌ | Only modified files must stay open |
| **MIT** | ✔ | ✔ | ✔ | ❌ | ❌ | Anything goes; widely used |
| **Apache 2.0** | ✔ | ✔ | ✔ | ❌ | ❌ | Like MIT but adds patent protection |
| **BSD-3-Clause** | ✔ | ✔ | ✔ | ❌ | ❌ | MIT-style but with attribution clause |
| **CC-BY** | ✔ | ✔ | ✔ | ❌ | ❌ | Attribution required |
| **CC0** | ✔ | ✔ | ✔ | ❌ | ❌ | Public domain |
| **Unlicense** | ✔ | ✔ | ✔ | ❌ | ❌ | Basically public domain |
| **Proprietary Strict** | ❌ | ❌ | ❌ | N/A | ❌ | Closed. View-only. No permissions. |
| **Source Visible, Not Usable** | ❌ | ❌ | ❌ | N/A | ❌ | Users may read code but cannot run, compile, or reuse it |
| **Attribution Banner Required** | ✔ | ✔ | ✔ | ❌ | ❌ | Must show your banner in UI |
| **Personal Use Only** | ❌ Commercial | ✔ | ✔ | ❌ | ❌ | Free for personal, non-commercial use |
| **Commercial Allowed, No Derivatives** | ✔ | ✔ | ❌ | N/A | ❌ | No modified versions can be published |
| **Anti-AI Clause** | Varies | Varies | Varies | Varies | Varies | Prohibits AI-model training on your content |
| **No Government Use** | ✔ | ✔ | ✔ | ❌ | ❌ | Blocks any government or contractor usage |
| **No Big-Tech Use** | ✔ | ✔ | ✔ | ❌ | ❌ | Blocks usage by: Google, Meta, Amazon, Apple, Microsoft, etc. |
| **No SaaS Resale** | ✔ | ✔ | ✔ | ❌ | ✔ Optional | Cannot wrap your code into a paid SaaS |
| **Moral Use Only** | ✔ | ✔ | ✔ | ❌ | ❌ | No use for harm, prejudice, or unethical activity |
