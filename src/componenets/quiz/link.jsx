// In Registration.jsx or any other component where you want a link to Quiz
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div>
      <h1>Registration</h1>
      {/* Registration form here */}
      <Link to="/quiz">Go to Quiz</Link>
    </div>
  );
}
