'use strict'
const mongoose = require('mongoose');
module.exports = {
    bookHandler,
    homeHandler,
    handleAddBook,
    handleDeleteBook,
};
function homeHandler(req,res){
    res.send('Home Route');
}
// http://localhost:3016/book?email=anas19971114@gmail.com
function bookHandler(req,res){
    let emailForBook=req.query.email;

    myEmailModle.find({email:emailForBook},function(err,userData){
        if(err){
            console.log('something went wrong');
        }
        else
        {
            res.send(userData[0].books);
            console.log(userData[0].books);

        }
    })

}



const bookSchema = new mongoose.Schema({
    name:  String,
    description: String,
    url:  String

  });
  
  const emailShema = new mongoose.Schema({
    email:  String,
    books: [bookSchema]
  });

  const myEmailModle = mongoose.model('Email', emailShema);

  
  function seedOwnerCollection (){
    const user1 = new myEmailModle({
        email : 'civil.anas1000@gmail.com',
        books: [
            {
                name: 'Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge and the Teachings of Plants',
                description : 'Braiding Sweetgrass: Indigenous Wisdom, Scientific Knowledge, and the Teachings of Plants is a 2013 nonfiction book by American professor Robin Wall Kimmerer and published by Milkweed. The book is about alternative forms of Indigenous knowledge outside of traditional scientific methodologies.',
                url:'https://cdn11.bigcommerce.com/s-xsfo22lt3r/images/stencil/2048x2048/products/22442/19276/braiding-sweetgrass-web__28624.1530235860.jpg'
            },
            {
                name: 'Resisting Happiness: A True Story about Why We Sabotage Ourselves',
                description : 'A true story about why we sabotage ourselves, feel overwhelmed, set aside our dreams, and lack the courage to simply be ourselves... and how to start choosing happiness again! Most of us think we are relatively happy, while at the same time knowing that we could be happier—maybe even a lot happier',
                url:'http://mcdn.elefant.ro/mnresize/1500/1500/images/57/1137857/resisting-happiness-a-true-story-about-why-we-sabotage-ourselves-feel-overwhelmed-set-aside-our-dreams-and-lack-the-courage-to-simply-b-hardcover_1_fullsize.jpg'
            }
        ]

    })

    const user2 = new myEmailModle({
        email : 'anas19971114@gmail.com',
        books: [
            {
                name: 'Living in the Light: A guide to personal transformation',
                description : 'n Living in the Light, Shakti Gawain introduced a powerful new way of life: that of listening to one\'s own intuition and relying on it ',
                url:'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            },
            {
                name: 'Give and Take: WHY HELPING OTHERS DRIVES OUR SUCCESS',
                description : 'An innovative, groundbreaking book that will captivate readers of Malcolm Gladwell, Daniel Pink, The Power of Habit, and Quiet For generations, we have focused on the individual drivers of success: passion, hard work, talent, and luck. But today, success is increasingly dependent on',
                url:'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png'
            }
        ]

    })
    

    user1.save();
    user2.save();
}
// seedOwnerCollection ();





