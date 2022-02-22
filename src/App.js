import './App.css';
import Question from './question.component';
import questions from './data';
const App = () => {
  return (
    <div className="main">
      <div className="container">
        <h3>Questions and answers about login</h3>
        <section className="info">
          {questions.map((prop) => {
            return <Question key={prop.id} {...prop} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default App;
