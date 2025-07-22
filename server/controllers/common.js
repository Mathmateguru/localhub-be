
export const uploudImage = (req, res) => {

 try {
 if (!req?.file?.path) {
    res.status(400).json({ error: 'Image upload failed' });
  } else {
    res.status(201).send({
      status: 'success',
      imageUrl: req.file?.path
    })
  }

 } catch(e){
   res.status(400).send({error: e})
  
 }

}

