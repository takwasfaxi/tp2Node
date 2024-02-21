const express=require('express');
const router=express.Router();

//array of cars
let cars=[{id:1,name:'Audi'},{id:2,name:'BMW'},{id:3,name:'Mercedes'}]

//get all cars
router.get('/all',(req,res)=>{
    res.send(cars);
    
})

//get one car byID
router.get('/:id',(req,res)=>{
    const carId=parseInt(req.params.id); //les param de type string lezem nconvertih l entier
    const car = cars.find(item => item.id==carId); //lawejli aal car li aandha id atheka 
    if(car){
        res.send(car)
    }else{
        res.status(404).send('Car not found')
    }
})


//create new car
router.post('/create',(req,res)=>{
    const car = req.body; //yjib new car
    cars.push(car) //yajouty new car f tableau
    res.status(201).send({message:"car created successfully",data:cars})//y'affichi tableau jdid
})

//update car
router.put('/:id',(req,res)=>{
    const carId=parseInt(req.params.id);
    const updatedCar=req.body
    const index=cars.findIndex(car => car.id == carId)//yrajaali l'index mtaa l car win mawjouda selon tableau cars
    //-1 yaani car not found f tableau
    if(index!== -1){
        cars[index]=updatedCar //hot l'objet jdid=updatedcar fl index
        res.send({message:'car updated successfully',data:cars})

    }else{
        res.status(404).send('car not found')
    }      
})

//delete car
router.delete('/:id',(req,res)=>{
    const carId=parseInt(req.params.id);
    const index=cars.findIndex(car => car.id == carId)
    if(index !== -1){
        cars.splice(index,1)
        res.send({message:"car deleted",data:cars})
    }else{
        res.status(404).send("car not found")
    }

})

module.exports=router;