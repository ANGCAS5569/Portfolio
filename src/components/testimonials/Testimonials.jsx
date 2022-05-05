import "./testimonials.scss"

export default function Testimonials() {


  const data = [
    {
      id: 1,
      name: "Disclaimer: NEW!",
      link: "https://twitter.com/AngelCa62059001 ",
      title: "",
      img:
        "assets/meLarge.png",
      icon: "assets/twitter.png",
      desc:
        "Follow me on Twitter! I have some interesting things to say.",
    },
    {
      id: 2,
      name: "Disclaimer: EMPTY!",
      link: "https://www.youtube.com/channel/UCA1DgbU9gdO-nWj3nqFrKsQ",
      title: "",
      img:
        "assets/meLarge.png",
      icon: "assets/youtube.png",
      desc:
        "Follow me on Youtube! I have some cool stuff to show you. ",
      featured: true,
    },
    {
      id: 3,
      name: "Disclaimer: I actually use this!",
      link: "https://www.linkedin.com/in/angel-casiano-8705531a9/",
      title: "",
      img:
        "assets/meLarge.png",
      icon: "assets/linkedin.png",
      desc:
        "Add me on Linkedin. Let's grow our networks!",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Social Media</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              <a href={d.link} target="_blank" rel="noopener noreferrer">
              {d.desc}
              </a>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
