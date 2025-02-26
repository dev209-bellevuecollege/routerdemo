
import { Link, Outlet } from 'react-router-dom';
const About = () => (
  <div>
    <h1>About Page</h1>
    <nav>
      <ul>
        <li><Link to="team">Our Team</Link></li>
        <li><Link to="company">Company</Link></li>
      </ul>
    </nav>
    <Outlet />
  </div>
);

export default About;