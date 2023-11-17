import { Twitter, Facebook, Instagram, Linkedin } from "react-feather";


const SocialMedia = () => {
    return(
<>
<h3>SOCIAL MEDIA</h3>
          <div className="social-menu">
            <a href="">
              <Twitter />
            </a>
            <a href="">
              <Facebook />
            </a>
            <a href="">
              <Instagram />
            </a>
            <a href="">
              <Linkedin />
            </a>
          </div>
</>
    )
}

export default SocialMedia;