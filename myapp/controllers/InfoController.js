import Info from "../Info.js"

class InfoController {
    async create (req, res) {
        try {
            const {name, surname, email, phone_number, date_of_birth} = req.body
            const info = await Info.create({name, surname, email, phone_number, date_of_birth})
            res.json (info)
            
        } catch (error) {
            res.status(500).json(error)
            
        }
        }
    async getAll (req, res){
        try {
          const info = await Info.find();
          return res.json(info)
        } catch (error) {
            res.status(500).json(error)
        }
        }
    async getOne (req, res){
        try {
          const {id} = req.params
          if (!id) {
            res.status(400).json({message:'id не вказаний'})
          }
          const info = await Info.findById(id)
          return res.json(info)
        } catch (error) {
            res.status(500).json(error)
        }
        }
    async update (req, res){
        try {
          const info = req.body
          if (!info._id) {
            res.status(400).json({message:'id не вказаний'}) 
          }
          const updatedInfo = await Info.findByIdAndUpdate(info._id, info, {new: true})
          return res.json(updatedInfo)
        } catch (error) {
            res.status(500).json(error)
        }
        }
    async delete (req, res){
        try {
          const {id} = req.params
          if (!id) {
            res.status(400).json({message:'id не вказаний'})
          }
          const info = await Info.findByIdAndDelete(id)
          return res.json(info)
        } catch (error) {
            res.status(500).json(error)
        }
        }

}

export default new InfoController();