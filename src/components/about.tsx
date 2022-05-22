type About = {
  image: string;
};
function About({ image }: About) {
  return <img src={image} />;
}

export default About;
