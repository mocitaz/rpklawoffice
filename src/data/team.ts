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
 * Names and academic titles are supplied RAF Law Office data.
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
      "Muhamad Fajar Roni merupakan bagian dari RAF Law Office dengan area pendampingan sementara pada litigasi perdata, properti, dan kebutuhan legal advisory bagi klien.",
      "Pendekatannya menekankan ketelitian dalam menelaah fakta, dokumen, dan kerangka hukum agar setiap rekomendasi memiliki dasar yang jelas dan dapat dipahami.",
      "Informasi mengenai riwayat pendidikan, pengalaman profesional, dan keanggotaan akan diperbarui setelah data resmi diterima.",
    ],
    practiceAreas: ["Litigasi Perdata", "Properti & Real Estat", "Legal Advisory"],
    languages: ["Indonesia"], // PLACEHOLDER
    email: "fajar@placeholder.raflawoffice.com",
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
      { year: "Kini", title: "RAF Law Office", description: "Jabatan dan deskripsi peran menunggu konfirmasi." },
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
      "M. Anggara Putra merupakan bagian dari RAF Law Office dengan fokus sementara pada berbagai kebutuhan hukum yang berkaitan dengan aktivitas usaha, penyelesaian sengketa, dan pendampingan strategis bagi individu maupun badan usaha.",
      "Dalam setiap pendampingan, pendekatan yang digunakan dimulai dari pemahaman atas konteks, tujuan, dan profil risiko klien. Proses tersebut menjadi dasar untuk menyusun analisis serta pilihan langkah hukum yang relevan.",
      "Informasi rinci mengenai pengalaman profesional dan portofolio perkara akan diperbarui setelah data terverifikasi tersedia.",
    ],
    practiceAreas: ["Hukum Korporasi & Komersial", "Penyelesaian Sengketa", "Litigasi Perdata", "Penyusunan & Review Kontrak"],
    languages: ["Indonesia", "Inggris"], // PLACEHOLDER
    email: "anggara@placeholder.raflawoffice.com",
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
      { year: "Kini", title: "RAF Law Office", description: "Jabatan dan deskripsi peran menunggu konfirmasi." },
    ],
    relatedInsights: ["memahami-klausul-perjanjian-komersial", "risiko-sebelum-menandatangani-kontrak", "persiapan-perusahaan-menghadapi-sengketa"],
  },
  {
    slug: "reza-evaldo-kusumah",
    fullName: "Reza Evaldo Kusumah, S.H.",
    role: "Partner", // PLACEHOLDER
    portrait: "/images/team/reza.png", // PLACEHOLDER
    shortBio: "Berfokus pada kebutuhan komersial, penyusunan kontrak, dan pendampingan sengketa dengan analisis yang sistematis dan praktis.",
    biography: [
      "Reza Evaldo Kusumah merupakan bagian dari RAF Law Office dengan lingkup praktik sementara pada hukum komersial, kontrak, serta penyelesaian persoalan hukum yang dihadapi klien.",
      "Pendampingan dilakukan melalui penelaahan dokumen dan fakta yang terstruktur, disertai komunikasi yang terbuka mengenai pilihan, risiko, dan implikasi dari setiap langkah.",
      "Uraian pendidikan, pengalaman, dan kualifikasi profesional akan dilengkapi setelah informasi resmi tersedia.",
    ],
    practiceAreas: ["Hukum Korporasi & Komersial", "Penyusunan & Review Kontrak", "Penyelesaian Sengketa"],
    languages: ["Indonesia"], // PLACEHOLDER
    email: "reza@placeholder.raflawoffice.com",
    education: [{ degree: "Sarjana Hukum (S.H.)", institution: "Informasi institusi akan diperbarui." }],
    experience: [
      { title: "Pendampingan Komersial", description: "Pendampingan terhadap kebutuhan hukum yang timbul dalam aktivitas dan hubungan komersial." },
      { title: "Review Kontrak", description: "Penelaahan struktur kontrak, hak dan kewajiban, serta aspek risiko sesuai kebutuhan klien." },
      { title: "Legal Advisory", description: "Penyusunan analisis hukum berdasarkan konteks dan karakteristik persoalan yang disampaikan." },
    ],
    qualifications: ["Informasi kualifikasi profesional akan diperbarui."],
    timeline: [
      { year: "Data", title: "Pendidikan Hukum", description: "Institusi dan periode pendidikan akan diperbarui." },
      { year: "Data", title: "Pengalaman Profesional", description: "Posisi, organisasi, dan periode akan diperbarui." },
      { year: "Kini", title: "RAF Law Office", description: "Jabatan dan deskripsi peran menunggu konfirmasi." },
    ],
    relatedInsights: ["risiko-sebelum-menandatangani-kontrak", "memahami-klausul-perjanjian-komersial"],
  },
];

export const getTeamMember = (slug: string) => team.find((member) => member.slug === slug);
