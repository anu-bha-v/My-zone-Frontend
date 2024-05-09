import React ,{ useState }from 'react' 
import './ContactUs.css'
import Swal from 'sweetalert2'
import contactus from '../Assets/footbaner.jpg'
import banner from '../Assets/contact.jpg'
import video from '../Assets/contactvid.mp4'


const ContactUs = () => {
    
    const [formData, setFormData] = useState({
        fullname: '',
        mobilenumber: '',
        email: '',
        subject: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:4000/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Ticket Raised!',
                    text: 'Your ticket has been raised successfully!',
                    confirmButtonColor: '#41B883', // Custom color
                    confirmButtonText: 'OK'
                });
                setFormData({
                    fullname: '',
                    mobilenumber: '',
                    email: '',
                    subject: '',
                    description: ''
                });
            } else {
                alert('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };
     
    return (
        <div className='contact'>
            <div className="contactus">
                <div className="contactus-left">
                    <h2>#Contact</h2>
                </div>
                <div className="contactus-right">
                    {<img src={contactus} alt="" />}
                </div>
            </div>
            <div className="content1">
                <h3>How We Work</h3>
                <h2>Crafting connections through quality products and service</h2>
                <p>At Orbito, we're dedicated to revolutionizing your anime shopping experience, 
                    offering an immersive journey that knows no boundaries. Join us as we delve into 
                    the boundless realms of the anime universe, no matter where you reside</p>

                    <img src={banner} alt="" />
            </div>
            <div className="form">
            {/* <img src={banner} alt="" /> */}
            <p>Full Name</p>
                <input name='fullname'  type="text" placeholder='Full Name' value={formData.fullname} onChange={handleChange} />
                <p>Mobile Number</p>
                <input name='mobilenumber'  type="number" placeholder='Mobile Number' value={setFormData.mobilenumber} onChange={handleChange} />
                <p>E-mail</p>
                <input name='email'  type="e-mail" placeholder='E-mail' value={formData.email} onChange={handleChange} />
                <p>Subject</p>
                <input name='subject'  type="text" placeholder='subject' value={formData.subject} onChange={handleChange} />
                <div className='description'>
                <p>Description</p>
                <textarea name="description" value={formData.description} onChange={handleChange} id="" style={{outline:'none'}}></textarea>
                </div>
                <div className="button">
                <button onClick={handleSubmit} >Submit</button>
                </div>
            </div>
            <div className="content2">
                <h3>OUR MISSION</h3>
                <h2>Enhancing the shopping experience for everyone across the globe</h2>
                <p>At Orbito, we're committed to transforming the way you shop for anime products, 
                    providing an immersive experience that transcends borders. Join us in exploring the endless
                    possibilities of the anime universe, wherever you are in the world</p>

                <video src={video} autoPlay loop muted></video>
            </div>
        </div>
        
      )
    }

export default ContactUs