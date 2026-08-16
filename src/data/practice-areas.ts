export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  image: string;
  scope: string[];
};

// Placeholder service descriptions; confirm final scope before publication.
export const practiceAreas: PracticeArea[] = [
  {
    slug: "hukum-korporasi-komersial",
    title: "Hukum Korporasi & Komersial",
    shortTitle: "Korporasi & Komersial",
    description: "Pendampingan untuk aktivitas usaha, tata kelola, transaksi, serta kebutuhan hukum korporasi sehari-hari.",
    intro: "Kami membantu badan usaha memahami dan mengelola aspek hukum yang menyertai keputusan komersial, dari pembentukan struktur hingga pelaksanaan transaksi.",
    image: "/images/practices/corporate.jpg",
    scope: ["Pendirian dan restrukturisasi perusahaan", "Tata kelola perusahaan", "Legal due diligence", "Transaksi dan kontrak komersial", "Isu pemegang saham", "Advis regulasi"],
  },
  {
    slug: "penyelesaian-sengketa",
    title: "Penyelesaian Sengketa",
    shortTitle: "Penyelesaian Sengketa",
    description: "Analisis posisi hukum dan penyusunan strategi penyelesaian yang mempertimbangkan risiko serta tujuan klien.",
    intro: "Setiap sengketa membutuhkan pemetaan fakta, kepentingan, dan pilihan penyelesaian yang cermat. Kami mendampingi klien sejak analisis awal hingga pelaksanaan strategi.",
    image: "/images/practices/dispute.jpg",
    scope: ["Analisis posisi hukum", "Negosiasi dan mediasi", "Strategi pra-sengketa", "Pendampingan korespondensi", "Manajemen risiko perkara", "Penyelesaian alternatif"],
  },
  {
    slug: "litigasi-perdata",
    title: "Litigasi Perdata",
    shortTitle: "Litigasi Perdata",
    description: "Pendampingan dalam proses perselisihan perdata dengan persiapan perkara yang terstruktur dan komunikasi yang jelas.",
    intro: "Pendampingan litigasi kami berangkat dari penelaahan dokumen dan fakta secara menyeluruh untuk membangun posisi hukum yang terukur.",
    image: "/images/practices/litigation.jpg",
    scope: ["Penelaahan dokumen perkara", "Penyusunan strategi litigasi", "Pendampingan proses persidangan", "Upaya hukum", "Eksekusi putusan", "Legal opinion"],
  },
  {
    slug: "hukum-ketenagakerjaan",
    title: "Hukum Ketenagakerjaan",
    shortTitle: "Ketenagakerjaan",
    description: "Dukungan hukum bagi perusahaan dan individu dalam mengelola hubungan kerja serta potensi perselisihan.",
    intro: "Kami memberikan perspektif hukum dalam pengelolaan hubungan kerja dengan tetap memperhatikan kebutuhan operasional dan kepatuhan.",
    image: "/images/practices/employment.jpg",
    scope: ["Perjanjian kerja", "Peraturan perusahaan", "Kebijakan internal", "Perselisihan hubungan industrial", "Restrukturisasi tenaga kerja", "Advis kepatuhan"],
  },
  {
    slug: "properti-real-estat",
    title: "Properti & Real Estat",
    shortTitle: "Properti & Real Estat",
    description: "Penelaahan dan pendampingan aspek hukum dalam penguasaan, pengalihan, dan pemanfaatan properti.",
    intro: "Kami membantu klien mengidentifikasi aspek hukum dan risiko dalam transaksi maupun pengelolaan aset properti.",
    image: "/images/practices/property.jpg",
    scope: ["Uji tuntas dokumen", "Perjanjian jual beli", "Sewa dan pemanfaatan", "Status dan penguasaan aset", "Sengketa properti", "Advis transaksi"],
  },
  {
    slug: "kepatuhan-regulasi",
    title: "Kepatuhan & Regulasi",
    shortTitle: "Kepatuhan & Regulasi",
    description: "Pendampingan untuk memahami kewajiban regulasi dan membangun proses kepatuhan yang relevan dengan kegiatan usaha.",
    intro: "Perubahan regulasi memerlukan respons yang terarah. Kami membantu klien memetakan kewajiban dan implikasinya terhadap proses bisnis.",
    image: "/images/practices/compliance.jpg",
    scope: ["Pemetaan kewajiban", "Review kebijakan internal", "Perizinan usaha", "Audit kepatuhan", "Advis regulasi", "Mitigasi risiko"],
  },
];

export const getPracticeArea = (slug: string) => practiceAreas.find((area) => area.slug === slug);
