const validationBodySiswa = (req, res, next) =>{
    let {nama_siswa, alamat_siswa, tgl_siswa, jurusan_siswa} = req.body;

    if (nama_siswa === undefined || alamat_siswa === undefined || tgl_siswa === undefined || jurusan_siswa === undefined){
        res.status(400).json({message: "tolong isi dengan lengkap"});
        
    }else{
        next();
    }
}



module.exports ={
    validationBodySiswa,
   
}