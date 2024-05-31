const { Router } = require("express");
const multer = require("multer");
// const upload = multer({dest: "./upload"});

const router = Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

router.post("/upload", upload.single("avater"), (req, res) => {
    console.log(req.body)
    console.log(req.file)
    try {
        res.status(200).json({msg: "success"})
    } catch(error) {
        console.log(error)
    }
    
})

router.get("/get", (req, res) => {
    res.send("Hello world")
})



module.exports = router;