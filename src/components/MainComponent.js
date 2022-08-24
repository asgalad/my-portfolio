import React, {useState} from "react"

import ListOfTech from "./ListOfTechComponent"
import resume from "../images/Abubakar's Resume.pdf"

// import honors from "../images/HonorsCertificate.png"
// import frontend from "../images/FrontEnd.png"
// import scrimba from "../images/ScrimbaCert.png"
import resumeImg from "../images/Abubakar's Resume.jpeg"
import me from "../images/me.jpeg"
// import album from "../images/gallery/Album.jpg"
// import marble from "../images/gallery/Marble.jpg"
// import ellie from "../images/gallery/Ellie.jpg"
// import cover from "../images/gallery/FrontCover.jpg"
// import swings from "../images/gallery/swings.jpg"
// import city from "../images/gallery/City.jpg"

import { 
    Card,
    Collapse,
    Paper,
    Button,
    //Dialog,
    Slide,
    //IconButton
 } from '@mui/material'

import {
    LinkedIn,
    GitHub,
    EmojiPeople, 
    Code, 
    AlternateEmail,
    ArrowUpward,
    Article,
    //Close
 } from '@mui/icons-material';

import projects from "../projects"


const MainComponent = () => {
    const [aboutOpen, setAboutOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)
    const [imageOpen, setImageOpen] = useState(false)
    const [setSelectedImage] = useState("")

    return (
        <div className="text-center">
            <div className="container pt-5 ">
                <div className="row">
                    <div className="img-col col-10 col-lg-3 mx-auto">
                        <Slide in={true} timeout={2000} direction="right">
                            <div id="circle-1"></div>
                        </Slide>
                        <Slide in={true} timeout={3000} direction="right">
                            <div id="circle-2"></div>
                        </Slide>
                        <Slide in={true} timeout={4000} direction="right">
                            <div id="circle-3"></div>
                        </Slide>
                        <Slide in={true} timeout={5000} direction="right">
                            <div id="circle-4"></div>
                        </Slide>
                        <Slide in={true} timeout={1000} direction="right">
                            <img 
                                src={me} 
                                alt="Me" 
                                id="img" 
                                height="275" width="275" className="rounded-circle" 
                            />
                        </Slide>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-9 w-100 mb-4 border-bottom ">
                        <h1 id="name-heading">Abubakar <strong>Lawal</strong></h1>
                        <h5 className="text-dark">Front End Web Developer</h5>
                        <h6>Kaduna, Nigeria</h6>
                        <div className="row mt-3">
                            <div className="col col-md-8 mx-auto">
                                <Button 
                                    variant="contained" 
                                    className="btn m-1" 
                                    sx={{borderRadius: "20px"}}
                                    onClick={() => window.open("https://www.linkedin.com/in/abubakar-lawal-b6478219b/")}
                                >
                                    <LinkedIn />
                                </Button>
                                <Button 
                                    variant="contained" 
                                    className="btn m-1" 
                                    sx={{borderRadius: "20px"}}
                                    onClick={() => window.open("https://github.com/asgalad")}
                                >
                                    <GitHub />
                                </Button>
                                <Button 
                                    variant="contained"
                                    className="btn m-1" 
                                    sx={{borderRadius: "20px"}}
                                    onClick={() => window.open('abbakarhaneef@gmail.com')}
                                >
                                    <AlternateEmail />
                                </Button>
                                <div className="border-bottom my-2 w-75 mx-auto" />
                                <div className="row">
                                    <div className="col mx-auto text-center">
                                        <Button 
                                            id="resume"
                                            className="btn mt-1 px-3" 
                                            onClick={() => {
                                                setSelectedImage(resumeImg)
                                                setImageOpen(!imageOpen)
                                            }}
                                            size="small"
                                            endIcon={<Article />}
                                        >
                                            View Resumé 
                                        </Button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Button 
                                            id="resume"
                                            className="btn mt-2 px-3" 
                                            download="AbubakarSadiq-Resume"
                                            href={resume}
                                            size="small"
                                            endIcon={<Article />}
                                        >
                                            Download Resumé
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-dark mt-4">
                            <h5>“We have to continually be jumping off cliffs and developing our wings on the way down.”</h5><p>― Kurt Vonnegut</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <ListOfTech />

                </div>
            </div>
            <Button 
                variant="contained" 
                className="btn mt-5 btn-wide mb-2" 
                onClick={() => setAboutOpen(!aboutOpen)}
                endIcon={<EmojiPeople />}
            >
                    Background
            </Button>
            <Collapse in={aboutOpen} timeout={{enter: 2000, exit: 1000}}>
                <Paper className="container my-3 text-dark gradient" elevation={1}>
                    <div className="row justify-content-between">
                        <Slide in={aboutOpen} timeout={{enter: 3000, exit: 8000}} direction="up">
                            <Card className="col-lg-5 m-3">
                                <h4 className="mt-3 border-bottom mb-3">About Me</h4>
                                <p className="text-left">I love being a developer. I love learning new things every day and creating something new every day!
                                    I am a creative person that enjoy creating simple, functional, and effective designs.
                                    I design and develop responsive content using the most current and modern technologies to provide the best user experience while satisfying customer needs.
                                    I enjoy challenges and always look for good opportunities to develop my skills.
                                    <br/><br/>
                                    I am a problem solver seeking to solve problems through human creativity and by properly utilising technology. I am a software engineer
                                    with experience in building enterprise software solutions using agile methodologies. I have also had the opportunity to work and learn from
                                    both senior and junior developers to develop business solutions from inception to completion..</p>
                            </Card>
                        </Slide>
                        <Slide in={aboutOpen} timeout={{enter: 4000, exit: 8000}} direction="up">
                            <Card className="col-lg-5 m-3 text-left">
                                <h4 className="mt-3 border-bottom mb-3 text-center">Education</h4>
                                <div className="text-left">
                                    <h5 className="font-weight-bold">Gusau Institute Front End Web Development</h5>
                                    <p>Web Development Bootcamp<br/>
                                        August 2018- December 2018<br/>
                                    </p>
                                </div>
                                <ul className="text-left">
                                    <li>Graduated with honors in top 10% of class</li>
                                    <li>Was one of two people to showcase final project to all graduating students</li>
                                </ul>

                                <h5 className="font-weight-bold">Bachelor of Technology in Computer Science</h5>
                                <p>Abubakar Tafawa Balewa University, Bauchi<br/>
                                    2017- present</p>
                                <ul>
                                    <li> Graduated cum laude</li>
                                </ul>
                                <h4 className="mt-5 border-bottom mb-3 text-center">Work History</h4>
                                <h5 className="font-weight-bold">Lexignton Technologies</h5>
                                <p>Software Engineer Intern<br/>
                                August 2020- February 2021</p>
                                <h5 className="font-weight-bold">Lexignton Technologies</h5>
                                <p>Junior Software Engineer<br/>
                                March 2021- present</p>
                            </Card>
                        </Slide>
                    </div>
                    <Button 
                        endIcon={<ArrowUpward />}
                        className="my-3 btn-up text-dark" 
                        onClick={() => setAboutOpen(!aboutOpen)}
                    >
                        <p className="text-dark my-auto">Back up</p>
                    </Button>
                </Paper>
            </Collapse>

            <Button 
                variant="contained" 
                onClick={() => setProjectOpen(!projectOpen)} 
                className="btn btn-wide mb-2"
                endIcon={<Code />}
            >
                Projects
            </Button>
            <Collapse in={projectOpen} timeout={{enter: 3000, exit: 1000}}>
                    <Paper className="container my-3 gradient" elevation={1}>
                        <div className="row">
                            <div className="col">
                                {projects.map((project, index) => {
                                    return (
                                    <Slide in={projectOpen} timeout={{enter: (1000 * (index * 2)), exit: 9000}} direction="up">
                                        <Card key={index} className="mt-4 p-3">
                                            <div className="row mx-auto justify-content-center border-bottom mb-4 w-75">
                                                <h3 className="font-weight-bold mb-2">{project.title}</h3>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <img
                                                        src={project.img} 
                                                        alt={project.alt} 
                                                        className="mb-4" 
                                                        id="no-cursor"
                                                        height="400" 
                                                        width="300"
                                                        style={{objectFit: "cover", imageResolution: "from-image"}}
                                                    />
                                                </div>
                                                <div className="col-md-6 text-center text-md-left">
                                                    <p>{project.description}</p>
                                                    <h4 className="border-bottom mb-3 pb-2">Technologies Used</h4>
                                                    <ul>
                                                        {project.tech.map((tech, index) => {
                                                            return (
                                                                <li key={index} className="text-left">{tech}</li>
                                                            )
                                                        })
                                                    }
                                                    </ul>
                                                </div>
                                            </div>
                                            {project.problem ? 
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h4 className="border-bottom mb-3 pb-2">Problems</h4>
                                                        <ul className="small">
                                                            {project.problem.map((problem, index) => {
                                                                return (
                                                                    <>
                                                                        <li key={index} className="text-left">{problem}</li>
                                                                        <br/>
                                                                    </>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h4 className="border-bottom mb-3 pb-2">Solutions</h4>
                                                        <ul className="small">
                                                            {project.solution.map((solution, index) => {
                                                                return (
                                                                    <>
                                                                        <li key={index} className="text-left">{solution}</li>
                                                                        <br/>
                                                                    </>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                            :
                                            null
                                            }
                                                <div className="row mx-auto justify-content-center align-items-center">
                                                    <div className="btn-group">
                                                        {project.demo ? 
                                                            <Button 
                                                                variant="contained" 
                                                                className="btn mr-2" 
                                                                onClick={() => window.open(`${project.demo}`)}
                                                                size="small"
                                                            >
                                                                demo
                                                            </Button> 
                                                            : 
                                                        project.live ? 
                                                            <Button 
                                                                variant="contained" 
                                                                className="btn mr-2" 
                                                                onClick={() => {
                                                                    console.log(project.live)
                                                                    window.open(`${project.live}`)
                                                                }}
                                                                size="small"
                                                            >
                                                                live
                                                            </Button>
                                                        : 
                                                        null
                                                        }
                                                        <Button 
                                                            disabled
                                                            variant="contained" 
                                                            className="btn"
                                                            size="small"
                                                        >
                                                            Private
                                                        </Button>
                                                    </div>
                                            </div>
                                        </Card>
                                    </Slide>
                                    )
                                })}
                            </div>
                        </div>

                        <Button 
                            endIcon={<ArrowUpward />}
                            className="my-3 btn-up text-dark" 
                            onClick={() => setProjectOpen(!projectOpen)}
                        >
                            <p className="text-dark my-auto">Back up</p>
                        </Button>
                    </Paper>
            </Collapse>

            {/* <Dialog 
                open={imageOpen} 
                fullWidth={true} 
                maxWidth={"sm"} 
                sx={{overFlow: "hidden" }} 
                onClose={() => setImageOpen(!imageOpen)} 
            >
                <IconButton
                    onClick={() => setImageOpen(!imageOpen)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8
                    }}
                >
                    <Close />
                </IconButton>
                <img src={selectedImage} alt="" className="modal-img" />
            </Dialog> */}
        </div>
    )
}

export default MainComponent