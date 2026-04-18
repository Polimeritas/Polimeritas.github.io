export interface PolymerData {
    id: string;
    name: string;
    tg: number | null;
    tm: number | null;
    desc: string;
  }
  
  export const POLYMER_DB: Record<string, PolymerData> = {
    PP: {
      id: "PP",
      name: "Polypropylene (PP)",
      tg: 0,
      tm: 160,
      desc: "Plastik tangguh, tahan panas, dan fleksibel. Banyak digunakan untuk wadah makanan.",
    },
    PVC: {
      id: "PVC",
      name: "Polyvinyl Chloride (PVC)",
      tg: 85,
      tm: null,
      desc: "Keras dan kaku di bawah suhu Tg, sering digunakan untuk pipa. Melunak di atas Tg.",
    },
    PE: {
      id: "PE",
      name: "Polyethylene (PE)",
      tg: -100,
      tm: 150,
      desc: "Sangat ringan dan banyak digunakan untuk kantong plastik atau kemasan.",
    },
    PET: {
      id: "PET",
      name: "Polyethylene Terephthalate (PET)",
      tg: 70,
      tm: 260,
      desc: "Plastik bening yang dapat didaur ulang, sangat umum untuk botol air minum.",
    },
  };