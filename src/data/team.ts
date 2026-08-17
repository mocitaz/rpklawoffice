export type TeamMember = {
  slug: string;
  fullName: string;
  role: string;
  portrait: string;
  shortBio: string;
  biography: string[];
  practiceAreas: string[];
  languages: string[];
  email: string;
  education: { degree: string; institution: string }[];
  experience: { title: string; description: string }[];
  qualifications: string[];
  timeline: { year: string; title: string; description: string }[];
  relatedInsights?: string[];
};

/**
 * IMPORTANT CONTENT STATUS
 * Names and academic titles are supplied RPK Law Firm data.
 * Every other profile field below—including roles, portraits, biography, education,
 * experience, areas, languages, qualifications, and email—is placeholder content.
 * Replace only here to update every team surface across the site.
 */
export const team: TeamMember[] = [
  {
    slug: "muhamad-fajar-roni",
    fullName: "Muhamad Fajar Roni, S.H.",
    role: "Managing Partner",
    portrait: "/images/team/fajar-profile.png",
    shortBio: "Mendukung penanganan kebutuhan litigasi perdata, isu properti, dan legal advisory melalui riset serta penelaahan yang cermat.",
    biography: [
      "Muhamad Fajar Roni merupakan Managing Partner RPK Law Firm dengan area pendampingan pada litigasi perdata, properti, dan kebutuhan legal advisory bagi klien.",
      "Pendekatannya menekankan ketelitian dalam menelaah fakta, dokumen, dan kerangka hukum agar setiap rekomendasi memiliki dasar yang jelas dan dapat dipahami.",
      "Informasi mengenai riwayat pendidikan, pengalaman profesional, dan keanggotaan akan diperbarui setelah data resmi diterima.",
    ],
    practiceAreas: ["Litigasi Perdata", "Properti & Real Estat", "Legal Advisory"],
    languages: ["Indonesia"], // PLACEHOLDER
    email: "fajar@rpklawoffice.com",
    education: [{ degree: "Sarjana Hukum (S.H.)", institution: "Informasi institusi akan diperbarui." }],
    experience: [
      { title: "Pendampingan Litigasi", description: "Dukungan penelaahan dan persiapan terhadap berbagai kebutuhan dalam proses sengketa perdata." },
      { title: "Riset dan Analisis Hukum", description: "Penyusunan riset serta analisis berdasarkan isu dan dokumen yang relevan." },
      { title: "Legal Advisory", description: "Pendampingan hukum yang disesuaikan dengan kebutuhan dan karakteristik persoalan klien." },
    ],
    qualifications: ["Informasi kualifikasi profesional akan diperbarui."],
    timeline: [
      { year: "Data", title: "Pendidikan Hukum", description: "Institusi dan periode pendidikan akan diperbarui." },
      { year: "Data", title: "Pengalaman Profesional", description: "Posisi, organisasi, dan periode akan diperbarui." },
      { year: "Kini", title: "RPK Law Firm", description: "Managing Partner." },
    ],
    relatedInsights: ["persiapan-perusahaan-menghadapi-sengketa", "risiko-sebelum-menandatangani-kontrak"],
  },
  {
    slug: "m-anggara-putra",
    fullName: "M. Anggara Putra, S.H., M.H.",
    role: "Partner",
    portrait: "/images/team/anggara.png", // PLACEHOLDER portrait.
    shortBio: "Mendampingi kebutuhan hukum korporasi dan penyelesaian sengketa dengan pendekatan yang terukur, komunikatif, dan berorientasi pada konteks klien.",
    biography: [
      "M. Anggara Putra merupakan Partner RPK Law Firm dengan fokus pada berbagai kebutuhan hukum yang berkaitan dengan aktivitas usaha, penyelesaian sengketa, dan pendampingan strategis bagi individu maupun badan usaha.",
      "Dalam setiap pendampingan, pendekatan yang digunakan dimulai dari pemahaman atas konteks, tujuan, dan profil risiko klien. Proses tersebut menjadi dasar untuk menyusun analisis serta pilihan langkah hukum yang relevan.",
      "Informasi rinci mengenai pengalaman profesional dan portofolio perkara akan diperbarui setelah data terverifikasi tersedia.",
    ],
    practiceAreas: ["Hukum Korporasi & Komersial", "Penyelesaian Sengketa", "Litigasi Perdata", "Penyusunan & Review Kontrak"],
    languages: ["Indonesia", "Inggris"], // PLACEHOLDER
    email: "anggara@rpklawoffice.com",
    education: [
      { degree: "Sarjana Hukum (S.H.)", institution: "Informasi institusi akan diperbarui." },
      { degree: "Magister Hukum (M.H.)", institution: "Informasi institusi akan diperbarui." },
    ],
    experience: [
      { title: "Pendampingan Korporasi", description: "Pengalaman dalam memberikan pendampingan terhadap berbagai kebutuhan hukum korporasi dan aktivitas komersial." },
      { title: "Penyelesaian Sengketa", description: "Terlibat dalam pendampingan dan penyusunan strategi terhadap berbagai persoalan hukum dan penyelesaian sengketa." },
      { title: "Legal Advisory", description: "Memberikan analisis dan pendampingan hukum berdasarkan kebutuhan dan karakteristik persoalan klien." },
    ],
    qualifications: ["Informasi kualifikasi profesional akan diperbarui."],
    timeline: [
      { year: "Data", title: "Pendidikan Hukum", description: "Institusi dan periode pendidikan akan diperbarui." },
      { year: "Data", title: "Pengalaman Profesional", description: "Posisi, organisasi, dan periode akan diperbarui." },
      { year: "Kini", title: "RPK Law Firm", description: "Partner." },
    ],
    relatedInsights: ["memahami-klausul-perjanjian-komersial", "risiko-sebelum-menandatangani-kontrak", "persiapan-perusahaan-menghadapi-sengketa"],
  },
  {
    slug: "reza-evaldo-kusumah",
    fullName: "Reza Evaldo Kusumah, S.H.",
    role: "Partner", // PLACEHOLDER
    portrait: "/images/team/reza.png", // PLACEHOLDER
    shortBio: "Berfokus pada kebutuhan komersial, penyusunan kontrak, dan pendampingan sengketa dengan analisis yang sistematis dan praktis.",
    // DEMO CONTENT: replace with verified partner profile data before publication.
    biography: [
      "Reza Evaldo Kusumah adalah Partner di RPK Law Firm yang berfokus pada hukum korporasi dan komersial, penyusunan kontrak, serta penyelesaian sengketa bisnis. Ia mendampingi perusahaan dan pelaku usaha dalam menerjemahkan persoalan hukum menjadi pilihan tindakan yang jelas dan dapat dilaksanakan.",
      "Dalam setiap penugasan, Reza memulai proses dengan memahami tujuan komersial, struktur hubungan para pihak, dan profil risiko klien. Pendekatan tersebut menjadi dasar dalam menelaah dokumen, menguji posisi hukum, serta menyusun strategi yang proporsional.",
      "Reza dikenal melalui komunikasi yang lugas dan sistematis. Setiap rekomendasi disampaikan bersama pertimbangan risiko, alternatif langkah, dan implikasi praktis agar klien dapat mengambil keputusan dengan pemahaman yang utuh.",
    ],
    practiceAreas: ["Hukum Korporasi & Komersial", "Penyusunan & Review Kontrak", "Penyelesaian Sengketa"],
    languages: ["Indonesia"], // PLACEHOLDER
    email: "reza@rpklawoffice.com",
    education: [
      { degree: "Sarjana Hukum (S.H.)", institution: "Fakultas Hukum, Universitas di Bandung" },
      { degree: "Pendidikan Profesi Advokat", institution: "Program Profesi Advokat Indonesia" },
    ],
    experience: [
      { title: "Corporate & Commercial Advisory", description: "Pendampingan atas kebutuhan tata kelola, hubungan komersial, dan keputusan bisnis yang memerlukan pertimbangan hukum terukur." },
      { title: "Contract Drafting & Review", description: "Penyusunan dan penelaahan kontrak dengan fokus pada kejelasan hak, kewajiban, mekanisme pelaksanaan, dan mitigasi risiko." },
      { title: "Dispute Strategy", description: "Pemetaan posisi hukum dan penyusunan pilihan penyelesaian sengketa melalui negosiasi, langkah non-litigasi, maupun proses hukum yang relevan." },
    ],
    qualifications: [
      "Pendidikan Profesi Advokat",
      "Pelatihan Legal Drafting & Contract Negotiation",
      "Pengembangan Strategi Penyelesaian Sengketa",
    ],
    timeline: [
      { year: "Data", title: "Pendidikan Hukum", description: "Institusi dan periode pendidikan akan diperbarui." },
      { year: "Data", title: "Pengalaman Profesional", description: "Posisi, organisasi, dan periode akan diperbarui." },
      { year: "Kini", title: "RPK Law Firm", description: "Partner." },
    ],
    relatedInsights: ["risiko-sebelum-menandatangani-kontrak", "memahami-klausul-perjanjian-komersial"],
  },
];

export const getTeamMember = (slug: string) => team.find((member) => member.slug === slug);
