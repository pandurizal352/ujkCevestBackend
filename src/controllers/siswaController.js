
const prisma = require("../config/utils");

const getAllSiswa = async (req, res)=> {
    try {
        const siswa = await prisma.siswa.findMany({
            orderBy: { createdAt: "desc"},
        });
        return res.json(siswa);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "internal server error"});
        
    }
};

const getSiswaById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const siswa = await prisma.siswa.findUnique({
where: { kode_siswa: id },
        }) 
        if (!siswa){
            return res.status(404).json({message: "siswa tidak di temukan"});
        };
        return res.json(siswa);
    } catch (error) {
        console.error(error);
        return res.status(500).json({message :"internal server error"});
    }
}

const createSiswa= async (req, res) => {
    try {
        const {nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa} = req.body
        const siswa = await prisma.siswa.create({
            data: {nama_siswa,
                 alamat_siswa,
                  tgl_siswa: new Date(tgl_siswa), 
                  jurusan_siswa}
        });
        return res.status(201).json(siswa);
    } catch (error) {
        console.error(error);
        return res.status(400).json({message: error.message});
    }
}

const updateSiswa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa} = req.body
        const siswa = await  prisma.siswa.update ({
            where: { kode_siswa: id },
            data: {nama_siswa, alamat_siswa,
                tgl_siswa: new Date(tgl_siswa)
                , jurusan_siswa},
        });
        return res.json(siswa);
    } catch (error) {
        console.error(error);
        if (error.code === "P2025"){
            return res.status(404).json({message: "siswa not found"});
        }
        return res.status(404).json({message: error.message});
    }
}

const deleteSiswa = async (req, res) =>{
    try {
        const id = parseInt(req.params.id);
        await prisma.siswa.delete({where: { kode_siswa: id }, });
        return res.json({message: "Siswa deleted"});

    } catch (error) {
        console.error(error);
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Siswa not found" });
    }
    return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports={
    getAllSiswa,
    getSiswaById,
    createSiswa,
    updateSiswa,
    deleteSiswa
   
}


