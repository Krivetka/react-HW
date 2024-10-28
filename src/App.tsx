import './App.css'

function App() {

  return (
      <div className="grid-container">
          {Array.from({length: 9}, (_, index) => (
              <div key={index} className="grid-item">
                  {index + 1}
              </div>
          ))}
      </div>
  )
}

export default App
