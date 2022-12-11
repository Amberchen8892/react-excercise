import "./App.css";
import ExcerciseThree from "./pages/ExcerciseThree";
import ExcerciseTwo from "./pages/ExcerciseTwo";
import TonyTableUser from "./pages/TonyTableUser";

const tablHeaderBestHunter = [
  {
    name: "Owner",
    align: "left",
  },
  {
    name: "Attempt",
    align: "center",
  },
  {
    name: "Success",
    align: "center",
  }
]

const dataTableRow = [
  {
    owner: 'tony',
    attempt: 10,
    success: '100%'
  },
  {
    owner: 'phuong',
    attempt: 10,
    success: '50%'
  },
  {
    owner: 'tai',
    attempt: 10,
    success: '10%'
  }
]

const tablHeaderBestTrainner = [
  {
    name: "Owner",
    align: "left",
  },
  {
    name: "Trainner",
    align: "center",
  },
  {
    name: "Lost",
    align: "center",
  }
]

const tablHeaderBestSeller = [
  {
    name: "Owner",
    align: "left",
  },
  {
    name: "Seller",
    align: "center",
  },
  {
    name: "Deal",
    align: "center",
  }
]

function App() {
  return (
    <>
      {/* <ExcerciseThree /> */}

      <h2>Table</h2>
      {/* <ExcerciseTwo /> */}
      <h3>Best Hunter</h3>
      <TonyTableUser
        tableHeader={tablHeaderBestHunter} 
        dataTableRow={dataTableRow}
        renderRow={row => {
          console.log('row', row)
          return (
            <>
              <td>{row.owner}</td>
              <td>{row.attempt}</td>
              <td>
                {row.success}
                {row.success === '100%' && <span>🏆</span>}
              </td>
            </>
          )
        }}
      />

      <h3>Best Trainner</h3>
      <TonyTableUser 
        tableHeader={tablHeaderBestTrainner} 
        dataTableRow={dataTableRow}
        renderRow={row => {
          console.log('row', row)
          return (
            <>
              <td>{row.owner}</td>
              <td>{row.attempt}</td>
              <td>{row.success}</td>
            </>
          )
        }}
      />

      <h3>Best Seller</h3>
      <TonyTableUser 
        tableHeader={tablHeaderBestSeller}
        dataTableRow={dataTableRow}
        renderRow={row => {
          console.log('row', row)
          return (
            <>
              <td>{row.owner}</td>
              <td>{row.attempt}</td>
              <td>{row.success}</td>
            </>
          )
        }} 
      />
    </>
  )
}

export default App;
