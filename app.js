const translations = {
  uz: {
    hero_title: "Har sohaga mos boshqaruv platformasi",
    hero_desc:
      "Ishlab chiqarish, savdo va xizmat bizneslari uchun modulli ERP/MES. Oddiy boshlaysiz, keyin bozor talabiga qarab kengaytirasiz.",
    cta_primary: "Demo so‘rash",
    cta_secondary: "Modullarni ko‘rish",
    modules_title: "Yadro modullar",
    m1_title: "Ombor va partiya hisobi",
    m1_desc: "FIFO/Weighted Average, lot kuzatuvi va real-time qoldiq.",
    m2_title: "Ishlab chiqarish",
    m2_desc: "BOM, operatsiya bosqichlari, yo‘qotish va brak tahlili.",
    m3_title: "Savdo va xarid",
    m3_desc: "Buyurtma, shartnoma, hisob-faktura va to‘lov holati.",
    m4_title: "Hisobot va analitika",
    m4_desc: "KPI panel, rentabellik, yo‘qotish va samaradorlik kesimi.",
    industries_title: "Bir nechta soha uchun bitta platforma",
    demo_title: "Startupga aylantirishga tayyor arxitektura",
    demo_desc: "Multi-tenant, rolga asoslangan ruxsatlar, audit log va API-first yondashuv bilan qurilgan.",
    label_name: "Ismingiz",
    label_sector: "Sohangiz",
    submit: "Yuborish"
  },
  en: {
    hero_title: "One operations platform for multiple industries",
    hero_desc:
      "A modular ERP/MES for manufacturing, trading, and service businesses. Start simple, then scale by market demand.",
    cta_primary: "Request demo",
    cta_secondary: "Explore modules",
    modules_title: "Core modules",
    m1_title: "Warehouse & lot traceability",
    m1_desc: "FIFO/Weighted Average, lot tracking, and real-time stock.",
    m2_title: "Production",
    m2_desc: "BOM, workflow stages, and loss/scrap analytics.",
    m3_title: "Sales & procurement",
    m3_desc: "Orders, contracts, invoicing, and payment status.",
    m4_title: "Reporting & analytics",
    m4_desc: "KPI dashboards, profitability, loss, and efficiency metrics.",
    industries_title: "Single product, many verticals",
    demo_title: "Architecture ready for startup scaling",
    demo_desc: "Built with multi-tenant design, role-based access, audit logs, and API-first foundations.",
    label_name: "Your name",
    label_sector: "Your industry",
    submit: "Submit"
  }
};

let currentLang = "uz";
const nodes = document.querySelectorAll("[data-i18n]");

document.getElementById("langToggle")?.addEventListener("click", () => {
  currentLang = currentLang === "uz" ? "en" : "uz";
  nodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[currentLang][key] ?? node.textContent;
  });
});
